'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function StudioRuntime(){useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;const lenis=new Lenis({lerp:.075,duration:1.15,smoothWheel:true,syncTouch:false});const raf=(time:number)=>{lenis.raf(time);ScrollTrigger.update()};gsap.ticker.add(raf);gsap.ticker.lagSmoothing(1000,16);const cleanups:gsap.core.Animation[]=[];

document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el)=>{const tween=gsap.fromTo(el,{y:54,opacity:0,filter:'blur(8px)'},{y:0,opacity:1,filter:'blur(0)',duration:1.05,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 84%',once:true}});cleanups.push(tween)});

document.querySelectorAll<HTMLElement>('.section,.page-hero,.page-cta,.contact').forEach((el)=>{gsap.fromTo(el,{opacity:.72,y:24},{opacity:1,y:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})});

document.querySelectorAll<HTMLElement>('.capability,.work-card,.work-feature,.technology-feature,.approach-step,.studio-principles article').forEach((el)=>{const onEnter=()=>gsap.to(el,{y:-5,duration:.45,ease:'power3.out'});const onLeave=()=>gsap.to(el,{y:0,duration:.6,ease:'power3.out'});el.addEventListener('mouseenter',onEnter);el.addEventListener('mouseleave',onLeave);(el as HTMLElement & {__avenelixCleanup?:()=>void}).__avenelixCleanup=()=>{el.removeEventListener('mouseenter',onEnter);el.removeEventListener('mouseleave',onLeave)}});

const hero=gsap.timeline({defaults:{ease:'power4.out'}});hero.fromTo('.eyebrow',{y:20,opacity:0},{y:0,opacity:1,duration:.8}).fromTo('.hero h1 span',{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.05,stagger:.08},'-=.45').fromTo('.hero-description,.hero .cta',{y:25,opacity:0},{y:0,opacity:1,duration:.8,stagger:.08},'-=.45');

const onScroll=()=>{const p=Math.min(window.scrollY/700,1);gsap.to('.hero-canvas',{y:p*-34,scale:1+p*.025,duration:.45,overwrite:true,ease:'power2.out'});document.documentElement.style.setProperty('--scroll-progress',String(p))};addEventListener('scroll',onScroll,{passive:true});

const onMove=(event:MouseEvent)=>{const x=event.clientX/window.innerWidth-.5;const y=event.clientY/window.innerHeight-.5;gsap.to('.hero-copy',{x:x*6,y:y*4,duration:.8,ease:'power3.out',overwrite:true});gsap.to('.hero-vignette',{opacity:1-Math.abs(x)*.08,duration:.8,overwrite:true})};addEventListener('mousemove',onMove,{passive:true});

const onResize=()=>ScrollTrigger.refresh();addEventListener('resize',onResize);return()=>{lenis.destroy();gsap.ticker.remove(raf);cleanups.forEach((a)=>a.scrollTrigger?.kill());document.querySelectorAll<HTMLElement>('.capability,.work-card,.work-feature,.technology-feature,.approach-step,.studio-principles article').forEach((el)=>{const cleanup=(el as HTMLElement & {__avenelixCleanup?:()=>void}).__avenelixCleanup;cleanup?.();});ScrollTrigger.getAll().forEach((t)=>t.kill());hero.kill();removeEventListener('scroll',onScroll);removeEventListener('mousemove',onMove);removeEventListener('resize',onResize)}} ,[]);return null}
