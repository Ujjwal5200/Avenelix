import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Work', description: 'Selected Avenelix software and AI systems.' };

const work = [
  { n: '01', type: 'AI / SYSTEMS', title: 'Intelligent infrastructure', body: 'AI systems, retrieval, orchestration and production engineering.' },
  { n: '02', type: 'SOFTWARE / ENGINEERING', title: 'Production software', body: 'Interfaces, APIs and infrastructure engineered as one system.' },
];

export default function WorkPage() {
  return <main className="inner-page page-shell">
    <header className="page-hero"><p className="mono">01 · WORK</p><h1>Systems becoming products.</h1><p className="lead">Selected experiments and production work. Detailed case studies will be published when the underlying work is ready to be shared.</p></header>
    <section className="page-grid work-list">{work.map(item => <article className="page-block work-feature" key={item.n}><div className="work-number mono">{item.n}</div><div><span className="mono">{item.type}</span><h2>{item.title}</h2><p>{item.body}</p></div><span className="arrow">↗</span></article>)}</section>
    <section className="page-block page-cta"><span className="mono">NEXT</span><h2>Have a difficult system to build?</h2><Link className="text-link" href="/contact">Discuss a project →</Link></section>
  </main>;
}
