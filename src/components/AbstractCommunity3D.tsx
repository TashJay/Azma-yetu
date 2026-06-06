import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const count = 300;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const scrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 15 + Math.random() * 100;
        const speed = 0.005 + Math.random() / 200;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const colorArray = useMemo(() => {
      const colors = [
          new THREE.Color('#34d399'), // Emerald-400
          new THREE.Color('#fbbf24'), // Amber-400
          new THREE.Color('#f59e0b'), // Amber-500
          new THREE.Color('#a78bfa'), // Violet-400 (just for some pop)
          new THREE.Color('#6ee7b7'), // Emerald-300
          new THREE.Color('#fcd34d'), // Amber-300
      ];
      const array = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          color.toArray(array, i * 3);
      }
      return array;
  }, [count]);

  useFrame((state) => {
      if (!mesh.current) return;
      
      const scrollOffset = scrollY.current * 0.0015;
      mesh.current.rotation.y = scrollOffset;
      mesh.current.rotation.x = scrollOffset * 0.5;

      particles.forEach((particle, i) => {
          let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
          t = particle.t += speed / 2;
          const a = Math.cos(t) + Math.sin(t * 1) / 10;
          const b = Math.sin(t) + Math.cos(t * 2) / 10;
          const s = Math.cos(t) + 1.5;
          
          dummy.position.set(
              (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
              (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
              (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
          );
          dummy.scale.set(s, s, s);
          dummy.rotation.set(s * 5, s * 5, s * 5);
          dummy.updateMatrix();
          mesh.current!.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
          <sphereGeometry args={[1.5, 16, 16]}>
              <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
          </sphereGeometry>
          <meshPhongMaterial vertexColors />
      </instancedMesh>
  );
}

export function AbstractCommunity3D() {
  return (
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-100">
          <Canvas camera={{ position: [0, 0, 30], fov: 60 }} className="z-0">
              <ambientLight intensity={1.2} />
              <pointLight position={[10, 10, 10]} intensity={2.5} color="#f59e0b" />
              <pointLight position={[-10, -10, -10]} intensity={2} color="#6D4C41" />
              <Particles />
          </Canvas>
      </div>
  );
}
