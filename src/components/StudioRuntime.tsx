'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function StudioRuntime(){useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;const lenis=new Lenis({lerp:.085,duration:1.1,smoothWheel:true,syncTouch:false});const raf=(time:number)=>{lenis.raf(time);ScrollTrigger.update()};gsap.ticker.add(raf);gsap.ticker.lagSmoothing(1000,16);const cleanups:gsap.core.Animation[]=[];document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el)=>{const tween=gsap.fromTo(el,{y:50,opacity:0,filter:'blur(7px)'},{y:0,opacity:1,filter:'blur(0)',duration:1,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 82%',once:true}});cleanups.push(tween)});const hero=gsap.timeline({defaults:{ease:'power4.out'}});hero.fromTo('.eyebrow',{y:20,opacity:0},{y:0,opacity:1,duration:.8}).fromTo('.hero h1 span',{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.05,stagger:.08},'-=.45').fromTo('.hero-description,.hero .cta',{y:25,opacity:0},{y:0,opacity:1,duration:.8,stagger:.08},'-=.45');const onResize=()=>ScrollTrigger.refresh();addEventListener('resize',onResize);return()=>{lenis.destroy();gsap.ticker.remove(raf);cleanups.forEach((a)=>a.scrollTrigger?.kill());ScrollTrigger.getAll().forEach((t)=>t.kill());hero.kill();removeEventListener('resize',onResize)}} ,[]);return null}
