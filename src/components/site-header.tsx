'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [['Work','/work'],['Studio','/studio'],['Technology','/technology'],['Approach','/approach']] as const;

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[]);
  return <header className={`site-nav${scrolled?' is-scrolled':''}`}>
    <Link className="brand" href="/" aria-label="Avenelix home">AVENELIX</Link>
    <nav className="nav-links" aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <span className="nav-meta mono">AI · SOFTWARE · SYSTEMS</span>
    <button className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}>{open?'Close':'Menu'}</button>
    {open&&<div id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact ↗</Link></div>}
  </header>
}
