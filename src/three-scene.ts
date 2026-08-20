import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export function initThreeScene(canvas: HTMLCanvasElement, reducedMotion: boolean): () => void {
  if (reducedMotion) return () => undefined;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 6.4);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = environment;
  pmrem.dispose();

  const world = new THREE.Group();
  scene.add(world);

  const core = new THREE.Group();
  world.add(core);

  const crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.08, 5),
    new THREE.MeshPhysicalMaterial({
      color: 0xd9ff8c,
      transmission: 0.82,
      thickness: 1.1,
      roughness: 0.12,
      metalness: 0.14,
      ior: 1.46,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.45
    })
  );
  core.add(crystal);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.18, 2),
    new THREE.MeshBasicMaterial({ color: 0xe8ffb8, wireframe: true, transparent: true, opacity: 0.18 })
  );
  core.add(wire);

  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xa9f6a0, transparent: true, opacity: 0.42 });
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.008, 8, 160), ringMaterial);
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.006, 8, 160), ringMaterial.clone());
  ringA.rotation.x = Math.PI * 0.48;
  ringA.rotation.y = Math.PI * 0.12;
  ringB.rotation.x = Math.PI * 0.28;
  ringB.rotation.z = Math.PI * 0.36;
  world.add(ringA, ringB);

  const particleCount = window.innerWidth < 600 ? 260 : window.innerWidth < 1000 ? 520 : 920;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i += 1) {
    const radius = 2.4 * Math.pow(Math.random(), 0.55);
    const angle = Math.random() * Math.PI * 2;
    const j = i * 3;
    positions[j] = Math.cos(angle) * radius;
    positions[j + 1] = Math.sin(angle) * radius * 0.72;
    positions[j + 2] = (Math.random() - 0.5) * 2.8;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({ color: 0xd9ff8c, size: window.innerWidth < 600 ? 0.018 : 0.022, transparent: true, opacity: 0.16, depthWrite: false })
  );
  world.add(particles);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), window.innerWidth < 600 ? 0.34 : 0.58, 0.62, 0.78);
  composer.addPass(bloom);

  const pointer = new THREE.Vector2();
  const target = new THREE.Vector2();
  let running = true;
  let frame = 0;

  const onPointerMove = (event: PointerEvent): void => {
    if (event.pointerType === 'touch') return;
    target.x = (event.clientX / window.innerWidth - 0.5) * 0.55;
    target.y = (event.clientY / window.innerHeight - 0.5) * 0.35;
  };

  const onResize = (): void => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    composer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };

  const render = (time: number): void => {
    if (!running) return;
    pointer.lerp(target, 0.045);
    world.rotation.y += 0.00055;
    world.rotation.x = Math.sin(time * 0.0002) * 0.018;
    core.rotation.x += 0.00045;
    core.rotation.y -= 0.00035;
    ringA.rotation.z += 0.0013;
    ringB.rotation.y -= 0.0009;
    particles.rotation.z += 0.00008;
    world.position.x += (pointer.x * 0.42 - world.position.x) * 0.035;
    world.position.y += (-pointer.y * 0.28 - world.position.y) * 0.035;
    camera.position.x += (pointer.x * 0.24 - camera.position.x) * 0.025;
    camera.position.y += (-pointer.y * 0.18 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
    composer.render();
    frame = requestAnimationFrame(render);
  };

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) frame = requestAnimationFrame(render);
  });
  frame = requestAnimationFrame(render);

  return () => {
    running = false;
    cancelAnimationFrame(frame);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('resize', onResize);
    particleGeometry.dispose();
    (particles.material as THREE.Material).dispose();
    crystal.geometry.dispose();
    (crystal.material as THREE.Material).dispose();
    wire.geometry.dispose();
    (wire.material as THREE.Material).dispose();
    ringA.geometry.dispose();
    ringA.material.dispose();
    ringB.geometry.dispose();
    ringB.material.dispose();
    composer.dispose();
    renderer.dispose();
  };
}
