import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Approach', description: 'How Avenelix turns difficult software and AI problems into dependable systems.' };

const steps = [
  ['01','DISCOVER','Clarify the problem, users, constraints and measurable outcome.','ALIGNMENT'],
  ['02','ARCHITECT','Choose the right system boundaries, data flows and technical strategy.','CLARITY'],
  ['03','BUILD','Turn the architecture into a focused, usable production system.','SPEED'],
  ['04','VALIDATE','Test behavior, quality, performance and the assumptions behind the product.','CONFIDENCE'],
  ['05','DEPLOY','Ship with observability, reliability and an operational path forward.','RELIABILITY'],
  ['06','EVOLVE','Use real usage and evidence to improve the system continuously.','COMPOUNDING VALUE']
] as const;

export default function ApproachPage(){return <main className="inner-page page-shell"><header className="page-hero"><p className="mono">04 · APPROACH</p><h1>From difficult problem to dependable system.</h1><p className="lead">We make the important decisions visible, build around measurable outcomes, and keep the path from prototype to production deliberate.</p></header><section className="page-grid approach-list">{steps.map(([n,t,body,impact])=><article className="page-block approach-step" key={n}><span className="mono">{n}</span><div><span className="mono">{impact}</span><h2>{t}</h2><p>{body}</p></div><span className="arrow">↗</span></article>)}</section><section className="page-block page-cta"><span className="mono">OUTCOME</span><h2>The goal is not more technology. It is a system that creates measurable value.</h2><a className="text-link" href="/contact">Talk about the problem →</a></section></main>}
