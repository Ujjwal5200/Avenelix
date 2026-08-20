'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [['Work','/work'],['Studio','/studio'],['Technology','/technology'],['Approach','/approach'],['Contact','/contact']] as const;

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[]);
  return <header className={`site-nav${scrolled?' is-scrolled':''}${open?' menu-open':''}`}>
    <Link className="brand" href="/" aria-label="Avenelix home">AVENELIX</Link>
    <nav className="nav-links" aria-label="Primary navigation">{links.slice(0,4).map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <span className="nav-meta mono">AI · SOFTWARE · SYSTEMS</span>
    <button className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}><span>{open?'Close':'Menu'}</span><i aria-hidden="true" /></button>
    <div id="mobile-navigation" className="mobile-menu" aria-hidden={!open}>
      <div className="mobile-menu-inner"><span className="mono">Navigate</span>
        {links.map(([label,href],index)=><Link key={href} href={href} onClick={()=>setOpen(false)}><small>0{index+1}</small><span>{label}</span><b>↗</b></Link>)}
      </div>
    </div>
  </header>
}
