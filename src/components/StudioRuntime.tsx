'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function StudioRuntime() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.16,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      anchors: true,
      autoRaf: false
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(1000, 16);

    const reveal = document.querySelectorAll<HTMLElement>('[data-reveal],.section,.page-hero,.page-cta,.contact');
    reveal.forEach((el) => {
      gsap.fromTo(el, { y: 34, opacity: 0.7 }, {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    const cards = document.querySelectorAll<HTMLElement>('.capability,.work-card,.work-feature,.technology-feature,.approach-step,.studio-principles article');
    cards.forEach((el) => {
      const onEnter = () => gsap.to(el, { y: -4, duration: 0.35, ease: 'power3.out' });
      const onLeave = () => gsap.to(el, { y: 0, duration: 0.45, ease: 'power3.out' });
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      (el as HTMLElement & { __avenelixCleanup?: () => void }).__avenelixCleanup = () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    const hero = gsap.timeline({ defaults: { ease: 'power4.out' } });
    hero.fromTo('.eyebrow', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 })
      .fromTo('.hero h1 span', { yPercent: 105, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.07 }, '-=.35')
      .fromTo('.hero-description,.hero .cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.06 }, '-=.35');

    let scrollTween: gsap.core.Tween | undefined;
    let lastScroll = -1;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastScroll) < 4) return;
      lastScroll = y;
      const p = Math.min(y / 700, 1);
      scrollTween?.kill();
      scrollTween = gsap.to('.hero-canvas', { y: p * -24, scale: 1 + p * 0.018, duration: 0.28, overwrite: true, ease: 'power2.out' });
      document.documentElement.style.setProperty('--scroll-progress', String(p));
    };
    addEventListener('scroll', onScroll, { passive: true });

    const onMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      gsap.to('.hero-copy', { x: x * 4, y: y * 2.5, duration: 0.7, ease: 'power3.out', overwrite: true });
    };
    addEventListener('mousemove', onMove, { passive: true });

    const onResize = () => ScrollTrigger.refresh();
    addEventListener('resize', onResize);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      cards.forEach((el) => (el as HTMLElement & { __avenelixCleanup?: () => void }).__avenelixCleanup?.());
      hero.kill();
      scrollTween?.kill();
      removeEventListener('scroll', onScroll);
      removeEventListener('mousemove', onMove);
      removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
