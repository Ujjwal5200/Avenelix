import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Technology', description: 'AI, software, data and infrastructure capabilities at Avenelix.' };
const items = [
  ['01','AI SYSTEMS','LLMs, retrieval, agents, evaluation and inference systems.'],
  ['02','SOFTWARE','Web applications, APIs, interfaces and production architecture.'],
  ['03','DATA','Pipelines, analytics, retrieval and decision systems.'],
  ['04','INFRASTRUCTURE','Cloud, deployment, observability and developer platforms.']
] as const;
export default function TechnologyPage(){return <main className="inner-page page-shell"><header className="page-hero"><p className="mono">03 · TECHNOLOGY</p><h1>Engineering across the whole system.</h1><p className="lead">Avenelix connects intelligence, software, data and infrastructure into systems designed for production.</p></header><section className="page-stack technology-list">{items.map(([n,title,body])=><article className="page-block technology-feature" key={n}><span className="mono">{n}</span><div><span className="mono">CAPABILITY</span><h2>{title}</h2><p>{body}</p></div><span className="arrow">↗</span></article>)}</section><section className="page-block page-cta"><span className="mono">NEXT · APPROACH</span><h2>Technology is only useful when the system works.</h2><Link className="text-link" href="/approach">See how we work →</Link></section></main>}
