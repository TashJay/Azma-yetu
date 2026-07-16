/**
 * ScrollJourney — a scroll-driven Three.js flythrough.
 * The user scrolls through a 300vh container; the camera moves forward
 * through a particle field, passing five glowing "pillar" orbs.
 * Feels like walking into an extraordinary place.
 */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState, Component, ReactNode } from 'react';
import * as THREE from 'three';
import { useLanguage } from '../contexts/LanguageContext';

// ── constants ────────────────────────────────────────────────────────────────

const SCROLL_HEIGHT = '300vh'; // scroll distance for the journey
const PARTICLE_COUNT = 5200;
const CAMERA_START_Z = 9;
const CAMERA_END_Z = -110;

const PILLAR_ORBS = [
  { t: 0.18, color: '#38bdf8', en: 'Boy Child Empowerment',       sw: 'Uwezeshaji wa Mtoto' },
  { t: 0.36, color: '#fb7185', en: 'Women Empowerment',           sw: 'Uwezeshaji wa Wanawake' },
  { t: 0.54, color: '#fbbf24', en: 'Widows & Widowers Support',   sw: 'Msaada kwa Wajane' },
  { t: 0.72, color: '#4ade80', en: 'Community Resilience',        sw: 'Uthabiti wa Jamii' },
  { t: 0.90, color: '#f59e0b', en: 'Fighting Drug Abuse',         sw: 'Kupambana na Madawa' },
];

// map t → Z position along camera path
function tToZ(t: number) {
  return THREE.MathUtils.lerp(CAMERA_START_Z, CAMERA_END_Z, t);
}

// ── deterministic pseudo-random ──────────────────────────────────────────────
function prng(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

// ── error boundary ───────────────────────────────────────────────────────────
class WebGLBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    if (this.state.error) return null; // silent — user just skips the 3D
    return this.props.children;
  }
}

// ── Three.js scene ───────────────────────────────────────────────────────────

interface SceneProps {
  progressRef: React.MutableRefObject<number>;
}

function ParticleCloud({ progressRef }: SceneProps) {
  const { camera } = useThree();

  // build particle positions & colors once
  const { positions, colors, sizes } = useMemo(() => {
    const pos   = new Float32Array(PARTICLE_COUNT * 3);
    const col   = new Float32Array(PARTICLE_COUNT * 3);
    const siz   = new Float32Array(PARTICLE_COUNT);

    const ochre  = new THREE.Color('#d97706');
    const ochre2 = new THREE.Color('#fbbf24');
    const green  = new THREE.Color('#15803d');
    const white  = new THREE.Color('#e5e7eb');

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const s = i * 7;
      // spread along Z from start to end (slightly beyond camera range)
      const zFrac = prng(s + 0);
      const z     = THREE.MathUtils.lerp(CAMERA_START_Z + 2, CAMERA_END_Z - 6, zFrac);
      // radial spread grows with depth to create tunnel-expanding-to-cosmos feel
      const depthFrac = zFrac;                        // 0 = near, 1 = far
      const maxR  = 1.5 + depthFrac * depthFrac * 9; // tighter near cam, wide far
      const angle = prng(s + 1) * Math.PI * 2;
      const r     = Math.sqrt(prng(s + 2)) * maxR;   // uniform disk

      pos[i * 3]     = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = z;

      // colour distribution
      const cr = prng(s + 3);
      const c = cr < 0.50 ? ochre
              : cr < 0.72 ? ochre2
              : cr < 0.88 ? green
              :              white;
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      // particle size variation
      siz[i] = 0.05 + prng(s + 4) * 0.12;
    }

    return { positions: pos, colors: col, sizes: siz };
  }, []);

  // animated ring geometries (subtle drifting circles)
  const ringAngles = useRef<number[]>([0, 0, 0, 0, 0, 0]);

  useFrame((_, delta) => {
    const p = progressRef.current;

    // ── camera path ──
    const targetZ = THREE.MathUtils.lerp(CAMERA_START_Z, CAMERA_END_Z, p);
    // gentle sway: Y rises then falls, X sways like breathing
    const targetY = Math.sin(p * Math.PI * 0.8) * 1.4;
    const targetX = Math.sin(p * Math.PI * 1.6) * 0.5;

    camera.position.z += (targetZ - camera.position.z) * (1 - Math.exp(-delta * 4));
    camera.position.y += (targetY - camera.position.y) * (1 - Math.exp(-delta * 3));
    camera.position.x += (targetX - camera.position.x) * (1 - Math.exp(-delta * 3));

    // subtle lookat drift toward centre
    camera.lookAt(camera.position.x * 0.1, camera.position.y * 0.1, camera.position.z - 10);

    // rotate rings
    ringAngles.current = ringAngles.current.map((a, i) => a + delta * (0.2 + i * 0.05));
  });

  return (
    <>
      {/* scene background */}
      <color attach="background" args={['#040404']} />
      <fog attach="fog" args={['#040404', 4, 75]} />

      {/* ambient + a warm key light near camera start */}
      <ambientLight intensity={0.08} />
      <pointLight position={[0, 2, 6]} color="#f59e0b" intensity={12} distance={20} />

      {/* particle field */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.88}
          depthWrite={false}
        />
      </points>

      {/* pillar orbs — glowing spheres along the path */}
      {PILLAR_ORBS.map((orb, i) => {
        const z = tToZ(orb.t);
        // slight offset so they're not dead centre
        const ox = (i % 2 === 0 ? 1 : -1) * (0.6 + i * 0.15);
        const oy = Math.sin(i * 1.4) * 0.5;
        return (
          <group key={i} position={[ox, oy, z]}>
            {/* halo */}
            <mesh>
              <sphereGeometry args={[1.1, 20, 20]} />
              <meshStandardMaterial
                color={orb.color}
                transparent
                opacity={0.06}
                depthWrite={false}
              />
            </mesh>
            {/* core */}
            <mesh>
              <sphereGeometry args={[0.28, 18, 18]} />
              <meshStandardMaterial
                color={orb.color}
                emissive={orb.color}
                emissiveIntensity={3.5}
                roughness={0.15}
                metalness={0.4}
              />
            </mesh>
            {/* light */}
            <pointLight color={orb.color} intensity={45} distance={22} decay={2} />
          </group>
        );
      })}

      {/* particle rings — decorative arches you fly through */}
      {[
        { z: tToZ(0.10), r: 2.8, color: '#78350f' },
        { z: tToZ(0.27), r: 3.4, color: '#14532d' },
        { z: tToZ(0.45), r: 2.6, color: '#78350f' },
        { z: tToZ(0.63), r: 3.8, color: '#14532d' },
        { z: tToZ(0.81), r: 3.0, color: '#78350f' },
      ].map((ring, i) => (
        <mesh key={`ring-${i}`} position={[0, 0, ring.z]}>
          <torusGeometry args={[ring.r, 0.025, 8, 90]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </>
  );
}

// ── scroll overlay labels ────────────────────────────────────────────────────

function PillarLabel({ orb, progress, lang }: {
  orb: typeof PILLAR_ORBS[0];
  progress: number;
  lang: string;
}) {
  const WINDOW = 0.09; // how wide (in t) the label is visible
  const dist = Math.abs(progress - orb.t);
  const opacity = Math.max(0, 1 - dist / WINDOW);
  if (opacity === 0) return null;

  return (
    <div
      className="absolute inset-x-0 flex flex-col items-center justify-center pointer-events-none"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        opacity,
        transition: 'opacity 0.1s linear',
      }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full mb-4"
        style={{ backgroundColor: orb.color, boxShadow: `0 0 18px ${orb.color}` }}
      />
      <span
        className="text-white font-display text-3xl md:text-5xl font-bold tracking-tight text-center px-4"
        style={{ textShadow: `0 0 40px ${orb.color}66` }}
      >
        {lang === 'en' ? orb.en : orb.sw}
      </span>
    </div>
  );
}

// ── exported section ─────────────────────────────────────────────────────────

export function ScrollJourney() {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef  = useRef(0);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled   = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      progressRef.current = p;
      setProgress(p);
      if (p > 0.01) setHasStarted(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="relative bg-[#040404]">
      {/* sticky viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Three.js canvas */}
        <WebGLBoundary>
          <Canvas
            camera={{ position: [0, 0, CAMERA_START_Z], fov: 62, near: 0.05, far: 200 }}
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            className="absolute inset-0 w-full h-full"
          >
            <ParticleCloud progressRef={progressRef} />
          </Canvas>
        </WebGLBoundary>

        {/* ── scroll hint (visible before scroll starts) ── */}
        <div
          className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-700"
          style={{ opacity: hasStarted ? 0 : 1 }}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
            {lang === 'en' ? 'Scroll to enter' : 'Teleza kuingia'}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-ochre-400/60 to-transparent animate-pulse" />
        </div>

        {/* ── intro label (start of journey) ── */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - progress * 10) }}
        >
          <p className="text-white/25 text-sm uppercase tracking-[0.3em] font-medium">
            {lang === 'en' ? 'Our five pillars of change' : 'Nguzo zetu tano za mabadiliko'}
          </p>
        </div>

        {/* ── pillar labels (appear as you fly through each orb) ── */}
        <div className="absolute inset-0">
          {PILLAR_ORBS.map((orb, i) => (
            <PillarLabel key={i} orb={orb} progress={progress} lang={lang} />
          ))}
        </div>

        {/* ── progress dots ── */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
          {PILLAR_ORBS.map((orb, i) => {
            const active = progress >= orb.t - 0.09 && progress <= orb.t + 0.09;
            const past   = progress > orb.t + 0.09;
            return (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: orb.color,
                  opacity: past ? 0.35 : active ? 1 : 0.2,
                  boxShadow: active ? `0 0 8px ${orb.color}` : 'none',
                  transform: active ? 'scale(1.6)' : 'scale(1)',
                }}
              />
            );
          })}
        </div>

        {/* ── exit gradient (bottom) ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #040404)',
            opacity: progress > 0.88 ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* ── "arrived" message at journey end ── */}
        <div
          className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-700"
          style={{ opacity: progress > 0.93 ? 1 : 0 }}
        >
          <span className="text-ochre-400 text-xs uppercase tracking-widest font-semibold">
            {lang === 'en' ? 'Welcome to Azma Yetu' : 'Karibu Azma Yetu'}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-ochre-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
