import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { initThreeScene } from './three-scene';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = window.matchMedia('(pointer: coarse)').matches;
const root = document.querySelector<HTMLElement>('#scrollRoot');
const header = document.querySelector<HTMLElement>('#siteHeader');
const transition = document.querySelector<HTMLElement>('.page-transition');
const preloader = document.querySelector<HTMLElement>('#preloader');
const percent = document.querySelector<HTMLElement>('#preloaderPercent');
const meter = preloader?.querySelector<HTMLElement>('.preloader-meter span');
const status = preloader?.querySelector<HTMLElement>('.preloader-meta span');
const orbit = document.querySelector<HTMLElement>('#orbitVisual');
const core = document.querySelector<HTMLElement>('#orbitCore');
const pulse = document.querySelector<HTMLElement>('#corePulse');
const rings = [...document.querySelectorAll<HTMLElement>('.orbit-ring')];
const nodes = [...document.querySelectorAll<HTMLElement>('.orbit-node')];
let loco: LocomotiveScroll | null = null;
let scrollY = 0;

function revealFallback(): void {
  document.querySelectorAll<HTMLElement>('.kicker,.title,.desc,.actions,.micro,.label,.section-title,.section-body,.principle,.list li,.contact').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'; });
}

function splitWords(el: HTMLElement): void {
  if (el.dataset.split) return;
  const text = el.textContent?.trim() ?? '';
  el.dataset.split = 'true';
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(/\s+/).map((word) => `<span class="word-wrap"><span class="word">${word}</span></span>`).join(' ');
}

function initPreloader(): void {
  if (!preloader) return;
  if (reduced) { preloader.remove(); return; }
  const started = performance.now(); let finished = false;
  const finish = (): void => { if (finished) return; finished = true; if (percent) percent.textContent = '100'; if (meter) meter.style.width = '100%'; if (status) status.textContent = 'READY'; window.setTimeout(() => { preloader.classList.add('is-exiting'); window.setTimeout(() => preloader.remove(), 1000); }, 160); };
  const tick = (now: number): void => { const progress = Math.min((now - started) / 1800, 1); const eased = 1 - Math.pow(1 - progress, 1.8); const value = Math.min(96, Math.floor(eased * 96)); if (percent) percent.textContent = String(value).padStart(3, '0'); if (meter) meter.style.width = `${value}%`; if (status) status.textContent = progress < .24 ? 'CALIBRATING' : progress < .5 ? 'CONNECTING' : progress < .78 ? 'RENDERING' : 'READY'; if (progress < 1) requestAnimationFrame(tick); else finish(); };
  requestAnimationFrame(tick); window.setTimeout(finish, 3600);
}

function initScrollScenes(): void {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('.title,.section-title').forEach(splitWords);
  const hero = document.querySelectorAll<HTMLElement>('.kicker,.title,.desc,.actions,.micro');
  gsap.fromTo(hero, { y: 28, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: 1, stagger: .075, ease: 'power4.out', clearProps: 'all' });
  document.querySelectorAll<HTMLElement>('.reveal-section').forEach((section) => {
    const items = section.querySelectorAll<HTMLElement>('.label,.section-title,.section-body,.principle,.list li,.contact');
    gsap.fromTo(items, { y: 42, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: .9, stagger: .07, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: section, start: 'top 76%', once: true } });
  });
  if (orbit) gsap.to(orbit, { yPercent: -8, rotation: 2, ease: 'none', scrollTrigger: { trigger: root ?? document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 } });
}

function initScroll(): void {
  if (!root || reduced) { initScrollScenes(); return; }
  try {
    loco = new LocomotiveScroll({ el: root, smooth: true, lerp: 0.065, multiplier: 0.92, touchMultiplier: 1.05, getDirection: true, getSpeed: true, tablet: { smooth: false }, smartphone: { smooth: false } });
    ScrollTrigger.defaults({ scroller: root });
    loco.on('scroll', (event) => { scrollY = event.scroll?.y ?? 0; header?.classList.toggle('scrolled', scrollY > 20); const max = Math.max(1, root.scrollHeight - window.innerHeight); document.documentElement.style.setProperty('--scroll-progress', String(Math.min(scrollY / max, 1))); ScrollTrigger.update(); });
    initScrollScenes();
    window.setTimeout(() => { loco?.update(); ScrollTrigger.refresh(); }, 100);
  } catch (error) { console.warn('Locomotive Scroll unavailable; native scroll retained.', error); initScrollScenes(); }
}

function initOrbit(): void {
  if (reduced) return;
  rings.forEach((ring, index) => gsap.to(ring, { rotation: 360 * (index % 2 ? -1 : 1), duration: 95 + index * 14, repeat: -1, ease: 'none' }));
  if (core) gsap.to(core, { scale: 1.055, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  nodes.forEach((node, index) => { const state = { angle: index * 1.25, radius: [.34,.37,.32,.36,.29][index] ?? .34 }; gsap.to(state, { angle: state.angle + Math.PI * 2, duration: 34 + index * 9, repeat: -1, ease: 'none', onUpdate: () => { node.style.left = `${50 + Math.cos(state.angle) * state.radius * 100}%`; node.style.top = `${50 + Math.sin(state.angle) * state.radius * 72}%`; } }); });
  if (pulse) { const pulseLoop = (): void => { gsap.timeline().to(pulse, { scale: 2.6, opacity: .3, duration: .9, ease: 'power2.out' }).to(pulse, { scale: 4.5, opacity: 0, duration: 1.5, ease: 'power2.in' }); gsap.delayedCall(12, pulseLoop); }; gsap.delayedCall(5, pulseLoop); }
}

function initCursor(): void {
  if (coarse || reduced) return;
  const cursor = document.createElement('div'); cursor.className = 'studio-cursor'; cursor.innerHTML = '<span class="cursor-dot"></span><span class="cursor-ring"></span><span class="cursor-label"></span>'; document.body.appendChild(cursor);
  const dot = cursor.querySelector<HTMLElement>('.cursor-dot'); const ring = cursor.querySelector<HTMLElement>('.cursor-ring'); const label = cursor.querySelector<HTMLElement>('.cursor-label'); if (!dot || !ring || !label) return;
  let x = innerWidth / 2; let y = innerHeight / 2; let rx = x; let ry = y;
  addEventListener('pointermove', (event) => { x = event.clientX; y = event.clientY; document.documentElement.style.setProperty('--mx', `${x}px`); document.documentElement.style.setProperty('--my', `${y}px`); }, { passive: true });
  document.querySelectorAll<HTMLElement>('a,.principle,.list li').forEach((el) => { el.addEventListener('mouseenter', () => { label.textContent = el.matches('.principle,.list li') ? 'EXPLORE' : 'OPEN'; cursor.classList.add('is-active'); }); el.addEventListener('mouseleave', () => { label.textContent = ''; cursor.classList.remove('is-active'); }); });
  const loop = (): void => { rx += (x - rx) * .14; ry += (y - ry) * .14; dot.style.transform = `translate3d(${x}px,${y}px,0)`; ring.style.transform = `translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(loop); }; loop();
}

function initTransitions(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => { const href = link.getAttribute('href'); if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return; link.addEventListener('click', (event) => { const target = new URL(href, location.href); if (target.origin !== location.origin) return; event.preventDefault(); loco?.stop(); transition?.classList.add('is-leaving'); window.setTimeout(() => { location.href = target.href; }, 700); }); });
}

function initCardInteraction(): void {
  if (coarse || reduced) return;
  document.querySelectorAll<HTMLElement>('.principle').forEach((card) => { card.addEventListener('pointermove', (event) => { const rect = card.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5; card.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg) translateY(-5px)`; card.style.setProperty('--card-x', `${(x + .5) * 100}%`); card.style.setProperty('--card-y', `${(y + .5) * 100}%`); }); card.addEventListener('pointerleave', () => { card.style.transform = ''; }); });
}

initPreloader();
initScroll();
initOrbit();
initCursor();
initTransitions();
initCardInteraction();
const canvas = document.querySelector<HTMLCanvasElement>('#scene');
if (canvas) initThreeScene(canvas, reduced);
window.addEventListener('load', () => { loco?.update(); ScrollTrigger.refresh(); revealFallback(); transition?.classList.add('is-ready'); });
