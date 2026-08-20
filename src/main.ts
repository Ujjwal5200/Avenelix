import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const root = document.querySelector<HTMLElement>('#scrollRoot');
const header = document.querySelector<HTMLElement>('#siteHeader');
const transition = document.querySelector<HTMLElement>('.page-transition');
const preloader = document.querySelector<HTMLElement>('#preloader');
const preloaderPercent = document.querySelector<HTMLElement>('#preloaderPercent');
const preloaderMeter = preloader?.querySelector<HTMLElement>('.preloader-meter span');
const preloaderStatus = preloader?.querySelector<HTMLElement>('.preloader-meta span');
const orbit = document.querySelector<HTMLElement>('#orbitVisual');
const shell = document.querySelector<HTMLElement>('#orbitShell');
const core = document.querySelector<HTMLElement>('#orbitCore');
const pulse = document.querySelector<HTMLElement>('#corePulse');
const rings = [...document.querySelectorAll<HTMLElement>('.orbit-ring')];
const nodes = [...document.querySelectorAll<HTMLElement>('.orbit-node')];

let scrollY = 0;
let loco: LocomotiveScroll | null = null;
let scrollTriggerReady = false;

const revealFallback = (): void => {
  document.querySelectorAll<HTMLElement>('.kicker,.title,.desc,.actions,.micro,.label,.section-title,.section-body,.principle,.list li,.contact').forEach((element) => {
    element.style.opacity = '1';
    element.style.transform = 'none';
    element.style.filter = 'none';
  });
};

const splitWords = (element: HTMLElement): void => {
  if (element.dataset.split === 'true') return;
  element.dataset.split = 'true';
  const text = element.textContent?.trim() ?? '';
  element.setAttribute('aria-label', text);
  element.innerHTML = text.split(/\s+/).map((word) => `<span class="word-wrap"><span class="word">${word}</span></span>`).join(' ');
};

const initTextMotion = (): void => {
  if (prefersReducedMotion) return;
  document.querySelectorAll<HTMLElement>('.title,.section-title').forEach(splitWords);
  const words = document.querySelectorAll<HTMLElement>('.word');
  gsap.set(words, { yPercent: 110, opacity: 0 });
  gsap.to(words, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.055, ease: 'power4.out', clearProps: 'transform,opacity' });

  const hero = document.querySelectorAll<HTMLElement>('.kicker,.desc,.actions,.micro');
  gsap.fromTo(hero, { y: 24, opacity: 0, filter: 'blur(5px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: .85, stagger: .08, ease: 'power4.out', clearProps: 'transform,filter,opacity' });
};

const initScroll = (): void => {
  if (!root || prefersReducedMotion) return;
  try {
    loco = new LocomotiveScroll({
      el: root,
      smooth: true,
      lerp: 0.065,
      multiplier: 0.92,
      touchMultiplier: 1.05,
      getDirection: true,
      getSpeed: true,
      resetNativeScroll: false,
      tablet: { smooth: false },
      smartphone: { smooth: false }
    });

    if (root) ScrollTrigger.defaults({ scroller: root });

    loco.on('scroll', (event) => {
      scrollY = event.scroll?.y ?? 0;
      header?.classList.toggle('scrolled', scrollY > 24);
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll-progress', String(Math.min(scrollY / max, 1)));
      if (scrollTriggerReady) ScrollTrigger.update();
    });

    scrollTriggerReady = true;
    initScrollScenes();
    ScrollTrigger.refresh();
  } catch (error) {
    console.warn('Locomotive Scroll unavailable; using native scrolling.', error);
    initScrollScenes();
  }
};

const initScrollScenes = (): void => {
  if (prefersReducedMotion) return;

  const sections = document.querySelectorAll<HTMLElement>('.reveal-section');
  sections.forEach((section) => {
    const items = section.querySelectorAll<HTMLElement>('.label,.section-title,.section-body,.principle,.list li,.contact');
    gsap.fromTo(items, { y: 38, opacity: 0, filter: 'blur(5px)' }, {
      y: 0,
      opacity: 1,
      filter: 'blur(0)',
      duration: .9,
      stagger: .075,
      ease: 'power3.out',
      clearProps: 'transform,filter,opacity',
      scrollTrigger: { trigger: section, start: 'top 76%', once: true }
    });
  });

  if (orbit) {
    gsap.to(orbit, {
      yPercent: -7,
      rotation: 2,
      ease: 'none',
      scrollTrigger: { trigger: root ?? document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 }
    });
  }

  gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
    gsap.fromTo(section, { opacity: .78 }, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top 92%', end: 'top 38%', scrub: true }
    });
  });
};

const initOrbit = (): void => {
  if (prefersReducedMotion) return;
  rings.forEach((ring, index) => {
    gsap.to(ring, { rotation: 360 * (index % 2 === 0 ? 1 : -1), duration: [92, 118, 140, 108, 165][index] ?? 110, repeat: -1, ease: 'none' });
  });
  if (core) gsap.to(core, { scale: 1.055, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  const states = nodes.map((_, index) => ({ angle: index * 1.25, radius: [.34,.37,.32,.36,.29][index] ?? .34, speed: [.19,-.15,.12,-.1,.08][index] ?? .1 }));
  states.forEach((state, index) => {
    gsap.to(state, { angle: state.angle + Math.PI * 2 * Math.sign(state.speed), duration: Math.abs(1 / state.speed) * 7, repeat: -1, ease: 'none', onUpdate: () => {
      const node = nodes[index];
      if (!node) return;
      node.style.left = `${50 + Math.cos(state.angle) * state.radius * 100}%`;
      node.style.top = `${50 + Math.sin(state.angle) * state.radius * 72}%`;
      node.style.opacity = String(.48 + .45 * (.5 + .5 * Math.sin(state.angle * 2)));
    }});
  });
  if (pulse) {
    const pulseLoop = (): void => {
      gsap.timeline().to(pulse, { scale: 2.8, opacity: .32, duration: .9, ease: 'power2.out' }).to(pulse, { scale: 4.5, opacity: 0, duration: 1.5, ease: 'power2.in' });
      gsap.delayedCall(12, pulseLoop);
    };
    gsap.delayedCall(6, pulseLoop);
  }
};

const initCursor = (): void => {
  if (coarsePointer || prefersReducedMotion) return;
  const cursor = document.createElement('div');
  cursor.className = 'studio-cursor';
  cursor.innerHTML = '<span class="cursor-dot"></span><span class="cursor-ring"></span><span class="cursor-label"></span>';
  document.body.appendChild(cursor);
  const dot = cursor.querySelector<HTMLElement>('.cursor-dot');
  const ring = cursor.querySelector<HTMLElement>('.cursor-ring');
  const label = cursor.querySelector<HTMLElement>('.cursor-label');
  if (!dot || !ring || !label) return;
  let x = innerWidth / 2; let y = innerHeight / 2; let rx = x; let ry = y;
  addEventListener('pointermove', (event) => { x = event.clientX; y = event.clientY; document.documentElement.style.setProperty('--mx', `${x}px`); document.documentElement.style.setProperty('--my', `${y}px`); }, { passive: true });
  document.querySelectorAll<HTMLElement>('a,.principle,.list li').forEach((element) => {
    element.addEventListener('mouseenter', () => { label.textContent = element.matches('.principle,.list li') ? 'EXPLORE' : 'OPEN'; cursor.classList.add('is-active'); });
    element.addEventListener('mouseleave', () => { label.textContent = ''; cursor.classList.remove('is-active'); });
  });
  const tick = (): void => { rx += (x - rx) * .14; ry += (y - ry) * .14; dot.style.transform = `translate3d(${x}px,${y}px,0)`; ring.style.transform = `translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(tick); };
  tick();
};

const initTransitions = (): void => {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;
    link.addEventListener('click', (event) => {
      const target = new URL(href, location.href);
      if (target.origin !== location.origin) return;
      event.preventDefault();
      loco?.stop();
      transition?.classList.add('is-leaving');
      window.setTimeout(() => { location.href = target.href; }, 700);
    });
  });
};

const initParticles = (): void => {
  if (prefersReducedMotion) return;
  const canvas = document.querySelector<HTMLCanvasElement>('#scene');
  if (!canvas) return;
  try {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    renderer.setSize(innerWidth, innerHeight, false);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, .1, 100);
    camera.position.z = 6.5;
    const group = new THREE.Group(); scene.add(group);
    const count = innerWidth < 600 ? 300 : innerWidth < 1000 ? 560 : 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) { const r = 2.35 * Math.pow(Math.random(), .52); const a = Math.random() * Math.PI * 2; const j = i * 3; positions[j] = r * Math.cos(a); positions[j + 1] = r * Math.sin(a) * .72; positions[j + 2] = (Math.random() - .5) * 2.4; }
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    group.add(new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xd9ff8c, size: innerWidth < 600 ? .014 : .017, transparent: true, opacity: .18, depthWrite: false })));
    let running = true;
    const render = (time: number): void => { if (!running) return; group.rotation.y = time * .000012; group.rotation.x = Math.sin(time * .00022) * .018; renderer.render(scene, camera); requestAnimationFrame(render); };
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(render); });
    requestAnimationFrame(render);
    addEventListener('resize', () => { renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5)); renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); loco?.update(); ScrollTrigger.refresh(); }, { passive: true });
  } catch (error) { console.warn('WebGL particle field unavailable.', error); }
};

const initPreloader = (): void => {
  if (!preloader) return;
  if (prefersReducedMotion) { preloader.remove(); return; }
  const start = performance.now(); const duration = 1750; let complete = false;
  const finish = (): void => { if (complete) return; complete = true; if (preloaderPercent) preloaderPercent.textContent = '100'; if (preloaderMeter) preloaderMeter.style.width = '100%'; if (preloaderStatus) preloaderStatus.textContent = 'READY'; window.setTimeout(() => { preloader.classList.add('is-exiting'); window.setTimeout(() => preloader.remove(), 1050); }, 180); };
  const frame = (now: number): void => { const progress = Math.min((now - start) / duration, 1); const eased = 1 - Math.pow(1 - progress, 1.7); const value = Math.min(96, Math.floor(eased * 96)); if (preloaderPercent) preloaderPercent.textContent = String(value).padStart(3, '0'); if (preloaderMeter) preloaderMeter.style.width = `${value}%`; if (preloaderStatus) preloaderStatus.textContent = progress < .24 ? 'CALIBRATING' : progress < .5 ? 'CONNECTING' : progress < .76 ? 'RENDERING' : 'READY'; if (progress < 1) requestAnimationFrame(frame); else finish(); };
  requestAnimationFrame(frame);
  window.setTimeout(finish, 3200);
};

const initStudioPolish = (): void => {
  if (prefersReducedMotion) return;
  const micro = document.querySelector<HTMLElement>('.micro');
  if (micro) gsap.fromTo(micro, { opacity: 0 }, { opacity: .55, duration: 1.2, delay: 1.2, ease: 'power2.out' });
  document.querySelectorAll<HTMLElement>('.principle').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (coarsePointer) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg) translateY(-5px)`;
      card.style.setProperty('--card-x', `${(x + .5) * 100}%`);
      card.style.setProperty('--card-y', `${(y + .5) * 100}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; card.style.removeProperty('--card-x'); card.style.removeProperty('--card-y'); });
  });
};

initPreloader();
initScroll();
initTextMotion();
initOrbit();
initCursor();
initTransitions();
initParticles();
initStudioPolish();

window.addEventListener('load', () => {
  loco?.update();
  ScrollTrigger.refresh();
  revealFallback();
  transition?.classList.add('is-ready');
});
