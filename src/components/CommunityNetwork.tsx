import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo, Component, ReactNode } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// ── WebGL error boundary ─────────────────────────────────────────────────────
class WebGLBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() { return this.state.error ? this.props.fallback : this.props.children; }
}

// ── Scene internals ──────────────────────────────────────────────────────────

const PILLAR_COLORS = [
  '#38bdf8', // sky   – Boy Child
  '#fb7185', // rose  – Women
  '#fbbf24', // amber – Widows
  '#4ade80', // green – Resilience
  '#f59e0b', // ochre – Drug Abuse
];

const PILLAR_LABELS = [
  'Boy Child',
  'Women',
  'Widows',
  'Resilience',
  'Drug Abuse',
];

function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null!);

  // ── generate node positions once ──
  const { positions, pillarIndices } = useMemo(() => {
    const rng = (s: number) => {
      // deterministic pseudo-random so SSR / HMR is stable
      const x = Math.sin(s * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const pts: THREE.Vector3[] = [];
    const total = 72;
    for (let i = 0; i < total; i++) {
      // distribute inside a sphere
      const theta = rng(i * 3 + 0) * Math.PI * 2;
      const phi   = Math.acos(2 * rng(i * 3 + 1) - 1);
      const r     = Math.cbrt(rng(i * 3 + 2)) * 2.6; // cube-root gives uniform volume
      pts.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ));
    }

    // pick 5 well-spread nodes as "pillar" nodes
    const chosen: number[] = [];
    const candidates = pts.map((_, i) => i);
    chosen.push(0);
    while (chosen.length < 5) {
      let best = -1, bestDist = -1;
      for (const c of candidates) {
        if (chosen.includes(c)) continue;
        const minD = Math.min(...chosen.map(ch => pts[c].distanceTo(pts[ch])));
        if (minD > bestDist) { bestDist = minD; best = c; }
      }
      chosen.push(best);
    }

    return { positions: pts, pillarIndices: chosen };
  }, []);

  // ── build edge geometry ──
  const { edgeGeo } = useMemo(() => {
    const THRESH = 1.55;
    const verts: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < THRESH) {
          verts.push(positions[i].x, positions[i].y, positions[i].z);
          verts.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return { edgeGeo: geo };
  }, [positions]);

  // ── slow rotation ──
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* edges */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.12} />
      </lineSegments>

      {/* regular nodes */}
      {positions.map((pos, i) => {
        if (pillarIndices.includes(i)) return null;
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.045, 8, 8]} />
            <meshStandardMaterial
              color="#d97706"
              emissive="#92400e"
              emissiveIntensity={0.4}
              roughness={0.3}
              metalness={0.1}
            />
          </mesh>
        );
      })}

      {/* pillar nodes — larger, colored, glowing */}
      {pillarIndices.map((idx, pi) => (
        <group key={`p${pi}`} position={positions[idx]}>
          {/* glow halo */}
          <mesh>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial
              color={PILLAR_COLORS[pi]}
              transparent
              opacity={0.08}
              depthWrite={false}
            />
          </mesh>
          {/* core */}
          <mesh>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial
              color={PILLAR_COLORS[pi]}
              emissive={PILLAR_COLORS[pi]}
              emissiveIntensity={0.9}
              roughness={0.2}
              metalness={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]}   color="#f59e0b" intensity={18} />
      <pointLight position={[-4, -3, -3]} color="#065f46" intensity={10} />
      <pointLight position={[0, 5, 0]}    color="#ffffff" intensity={6}  />
    </>
  );
}

// ── exported section ─────────────────────────────────────────────────────────

export function CommunityNetwork() {
  const { lang } = useLanguage();

  const pillars = lang === 'en'
    ? [
        { color: '#38bdf8', label: 'Boy Child Empowerment' },
        { color: '#fb7185', label: 'Women Empowerment' },
        { color: '#fbbf24', label: 'Widows & Widowers Support' },
        { color: '#4ade80', label: 'Community Resilience' },
        { color: '#f59e0b', label: 'Fighting Drug Abuse' },
      ]
    : [
        { color: '#38bdf8', label: 'Uwezeshaji wa Mtoto wa Kiume' },
        { color: '#fb7185', label: 'Uwezeshaji wa Wanawake' },
        { color: '#fbbf24', label: 'Msaada kwa Wajane' },
        { color: '#4ade80', label: 'Uthabiti wa Jamii' },
        { color: '#f59e0b', label: 'Kupambana na Dawa za Kulevya' },
      ];

  return (
    <section className="py-0 bg-earth-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[580px] md:min-h-[640px]">

          {/* ── 3D canvas ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[360px] md:h-[640px] w-full"
          >
            <WebGLBoundary
              fallback={
                <div className="w-full h-full flex items-center justify-center opacity-30">
                  <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-ochre-400" style={{ opacity: 0.2 + (i % 5) * 0.15 }} />
                    ))}
                  </div>
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, 6.5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
              >
                <Lights />
                <NetworkScene />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  dampingFactor={0.05}
                  enableDamping
                />
              </Canvas>
            </WebGLBoundary>
          </motion.div>

          {/* ── text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="py-16 md:py-0 md:pl-12"
          >
            <div className="inline-block bg-ochre-500/20 text-ochre-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-ochre-500/30">
              {lang === 'en' ? 'Our Community' : 'Jamii Yetu'}
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {lang === 'en'
                ? <>Every node is<br /><span className="text-ochre-400">a life changed.</span></>
                : <>Kila nodi ni<br /><span className="text-ochre-400">maisha yaliyobadilika.</span></>}
            </h2>

            <p className="text-white/45 text-base leading-relaxed mb-10">
              {lang === 'en'
                ? 'Each point in this network represents a person. Each connection, a relationship built through our five pillars of change. Drag the network — it belongs to everyone.'
                : 'Kila nukta katika mtandao huu inawakilisha mtu. Kila muunganisho ni uhusiano uliojengwa kupitia nguzo zetu tano za mabadiliko. Buruta mtandao — ni wa kila mtu.'}
            </p>

            {/* pillar legend */}
            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}80` }}
                  />
                  <span className="text-white/60 text-sm font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-white/20 text-xs mt-8 italic">
              {lang === 'en' ? '← Drag to explore the network' : '← Buruta kuchunguza mtandao'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
