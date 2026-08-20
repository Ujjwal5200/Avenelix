'use client';
import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader(){const [open,setOpen]=useState(false);return <header className="site-nav"><Link className="brand" href="/">AVENELIX</Link><nav className="nav-links"><Link href="/work">Work</Link><Link href="/studio">Studio</Link><Link href="/technology">Technology</Link><Link href="/approach">Approach</Link></nav><button className="menu-button" aria-expanded={open} onClick={()=>setOpen(!open)}>Menu</button>{open&&<div className="mobile-menu"><Link href="/work" onClick={()=>setOpen(false)}>Work</Link><Link href="/studio" onClick={()=>setOpen(false)}>Studio</Link><Link href="/technology" onClick={()=>setOpen(false)}>Technology</Link><Link href="/approach" onClick={()=>setOpen(false)}>Approach</Link><Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link></div>}</header>}
