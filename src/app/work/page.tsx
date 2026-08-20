import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Work', description: 'Selected Avenelix software, AI systems and engineering work.' };

const work = [
  { n:'01', type:'AI / SYSTEMS', title:'Intelligent infrastructure', body:'AI systems, retrieval, orchestration and production engineering.', impact:'Turn complex information flows into faster, more consistent decisions.' },
  { n:'02', type:'SOFTWARE / ENGINEERING', title:'Production software', body:'Interfaces, APIs and infrastructure engineered as one system.', impact:'Reduce friction between product experience and the systems underneath it.' }
] as const;

export default function WorkPage(){return <main className="inner-page page-shell"><header className="page-hero"><p className="mono">01 · WORK</p><h1>Systems becoming products.</h1><p className="lead">Selected work and engineering directions. We focus on the part that matters after launch: whether the system actually improves the work around it.</p></header><section className="page-grid work-list">{work.map(item=><article className="page-block work-feature" key={item.n}><div className="work-number mono">{item.n}</div><div><span className="mono">{item.type}</span><h2>{item.title}</h2><p>{item.body}</p><div className="impact-line"><span className="mono">POTENTIAL IMPACT</span><strong>{item.impact}</strong></div></div><span className="arrow">↗</span></article>)}</section><section className="page-block page-cta"><span className="mono">NEXT · IMPACT</span><h2>What should become easier, faster or more intelligent?</h2><Link className="text-link" href="/contact">Discuss a project →</Link></section></main>}
