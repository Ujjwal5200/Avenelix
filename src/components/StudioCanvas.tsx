'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Core({ mobile, tablet }: { mobile: boolean; tablet: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const speed = mobile ? 0.055 : tablet ? 0.075 : 0.1;
    ref.current.rotation.x = t * speed;
    ref.current.rotation.y = t * (speed * 1.45);
    if (!mobile) {
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * (tablet ? 0.08 : 0.16), 0.025);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * (tablet ? 0.05 : 0.1), 0.025);
    }
  });
  const detail = mobile ? 2 : tablet ? 3 : 4;
  return <Float speed={mobile ? 0.6 : tablet ? 0.85 : 1.1} rotationIntensity={mobile ? 0.06 : tablet ? 0.12 : 0.2} floatIntensity={mobile ? 0.1 : tablet ? 0.16 : 0.24}>
    <mesh ref={ref} scale={mobile ? 0.76 : tablet ? 0.88 : 1}>
      <icosahedronGeometry args={[1.15, detail]} />
      <MeshTransmissionMaterial color="#d9ff8c" transmission={mobile ? 0.72 : 0.86} thickness={mobile ? 0.65 : 1.1} roughness={mobile ? 0.2 : 0.12} ior={1.45} chromaticAberration={mobile ? 0.01 : tablet ? 0.015 : 0.025} anisotropy={mobile ? 0 : tablet ? 0.04 : 0.1} resolution={mobile ? 256 : tablet ? 384 : 512} />
    </mesh>
    <mesh scale={mobile ? 0.84 : tablet ? 0.98 : 1.12} rotation={[0.3,0.2,0]}>
      <icosahedronGeometry args={[1.15, mobile ? 1 : 2]} />
      <meshBasicMaterial color="#eaffc2" wireframe transparent opacity={mobile ? 0.08 : tablet ? 0.11 : 0.14} />
    </mesh>
  </Float>;
}

function Rings({ mobile, tablet }: { mobile: boolean; tablet: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.z += delta * (mobile ? 0.014 : tablet ? 0.026 : 0.04); });
  const segments = mobile ? 72 : tablet ? 108 : 160;
  return <group ref={ref} scale={mobile ? 0.76 : tablet ? 0.88 : 1}>
    <mesh rotation={[Math.PI * 0.5, 0.3, 0.1]}><torusGeometry args={[1.65, mobile ? 0.006 : 0.008, 6, segments]} /><meshBasicMaterial color="#d9ff8c" transparent opacity={mobile ? 0.22 : tablet ? 0.3 : 0.4} /></mesh>
    <mesh rotation={[0.7,0,0.8]}><torusGeometry args={[1.95, mobile ? 0.004 : 0.006, 6, segments]} /><meshBasicMaterial color="#b8e99a" transparent opacity={mobile ? 0.1 : tablet ? 0.15 : 0.22} /></mesh>
  </group>;
}

function CameraDrift() {
  useFrame((state) => {
    const targetX = state.pointer.x * 0.035;
    const targetY = state.pointer.y * 0.02;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.018);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.018);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function StudioCanvas() {
  const [mode, setMode] = useState<'desktop'|'tablet'|'mobile'|'reduced'>('desktop');
  useEffect(() => {
    const mqMobile = matchMedia('(max-width: 600px)');
    const mqTablet = matchMedia('(max-width: 1024px)');
    const mqReduced = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMode(mqReduced.matches ? 'reduced' : mqMobile.matches ? 'mobile' : mqTablet.matches ? 'tablet' : 'desktop');
    sync();
    mqMobile.addEventListener('change', sync); mqTablet.addEventListener('change', sync); mqReduced.addEventListener('change', sync);
    return () => { mqMobile.removeEventListener('change', sync); mqTablet.removeEventListener('change', sync); mqReduced.removeEventListener('change', sync); };
  }, []);
  if (mode === 'reduced') return <div className="hero-canvas-fallback" aria-hidden="true" />;
  const mobile = mode === 'mobile';
  const tablet = mode === 'tablet';
  const particles = mobile ? 100 : tablet ? 260 : 520;
  const dpr: [number, number] = mobile ? [1, 1.05] : tablet ? [1, 1.2] : [1, 1.5];
  return <div className="hero-canvas" aria-hidden="true">
    <Canvas dpr={dpr} camera={{ position: [0,0,mobile ? 6.5 : tablet ? 6.1 : 5.8], fov: mobile ? 32 : 35 }} gl={{ antialias: !mobile, powerPreference: 'high-performance', alpha: false }}>
      <color attach="background" args={['#050505']} />
      <Environment preset="studio" resolution={mobile ? 256 : tablet ? 384 : 512} />
      <ambientLight intensity={tablet ? 0.24 : 0.3} />
      <pointLight position={[2,2,3]} intensity={mobile ? 2.5 : tablet ? 4.5 : 7} color="#d9ff8c" />
      <CameraDrift />
      <Core mobile={mobile} tablet={tablet} /><Rings mobile={mobile} tablet={tablet} />
      <Sparkles count={particles} scale={[5,3.4,3]} size={mobile ? 0.8 : tablet ? 1 : 1.4} speed={mobile ? 0.05 : tablet ? 0.1 : 0.15} color="#d9ff8c" opacity={mobile ? 0.14 : tablet ? 0.2 : 0.26} />
      {!mobile && !tablet && <EffectComposer multisampling={0}><Bloom intensity={0.4} luminanceThreshold={0.72} mipmapBlur /></EffectComposer>}
    </Canvas>
  </div>;
}
