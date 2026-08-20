'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';

function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((state)=>{if(!ref.current)return;ref.current.rotation.x=state.clock.elapsedTime*.08;ref.current.rotation.y=state.clock.elapsedTime*.12;ref.current.position.x=THREE.MathUtils.lerp(ref.current.position.x,state.pointer.x*.18,.025);ref.current.position.y=THREE.MathUtils.lerp(ref.current.position.y,state.pointer.y*.12,.025)});return <Float speed={1.1} rotationIntensity={.22} floatIntensity={.28}><mesh ref={ref}><icosahedronGeometry args={[1.15,5]}/><MeshTransmissionMaterial color="#d9ff8c" transmission={.86} thickness={1.2} roughness={.1} ior={1.45} chromaticAberration={.04} anisotropy={.15}/></mesh><mesh scale={1.12} rotation={[.3,.2,0]}><icosahedronGeometry args={[1.15,2]}/><meshBasicMaterial color="#eaffc2" wireframe transparent opacity={.16}/></mesh></Float>}

function Rings(){const a=useRef<THREE.Group>(null);useFrame((_,delta)=>{if(a.current)a.current.rotation.z+=delta*.045});return <group ref={a}><mesh rotation={[Math.PI*.5,.3,.1]}><torusGeometry args={[1.65,.008,8,180]}/><meshBasicMaterial color="#d9ff8c" transparent opacity={.4}/></mesh><mesh rotation={[.7,0,.8]}><torusGeometry args={[1.95,.006,8,180]}/><meshBasicMaterial color="#b8e99a" transparent opacity={.24}/></mesh></group>}

export default function StudioCanvas(){return <div className="hero-canvas" aria-hidden="true"><Canvas dpr={[1,1.6]} camera={{position:[0,0,5.8],fov:35}} gl={{antialias:true,powerPreference:'high-performance'}}><color attach="background" args={['#050505']}/><Environment preset="studio"/><ambientLight intensity={.35}/><pointLight position={[2,2,3]} intensity={8} color="#d9ff8c"/><Core/><Rings/><Sparkles count={900} scale={[5,3.4,3]} size={1.4} speed={.18} color="#d9ff8c" opacity={.28}/><EffectComposer multisampling={0}><Bloom intensity={.45} luminanceThreshold={.72} mipmapBlur/></EffectComposer></Canvas></div>}
