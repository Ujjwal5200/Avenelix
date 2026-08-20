import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Insights', description: 'Technical thinking from Avenelix on AI systems, software architecture, data and production engineering.' };

const topics = [
  ['01','AI SYSTEM ARCHITECTURE','How to reason about AI products beyond the model: retrieval, orchestration, evaluation, observability and production constraints.'],
  ['02','RAG & RETRIEVAL','Practical decisions around embeddings, retrieval, reranking, context quality and system evaluation.'],
  ['03','LLM PRODUCTION','Latency, cost, reliability and model selection when intelligent software leaves the prototype stage.'],
  ['04','SOFTWARE SYSTEMS','Architecture and engineering patterns for interfaces, APIs, data flows and dependable production systems.']
] as const;

export default function InsightsPage(){return <main className="inner-page page-shell"><header className="page-hero"><p className="mono">05 · INSIGHTS</p><h1>Technical thinking for systems that have to work.</h1><p className="lead">Original notes on AI engineering, software architecture, retrieval, data and production systems. We focus on decisions, trade-offs and lessons rather than generic trend summaries.</p></header><section className="page-grid page-stack">{topics.map(([n,title,body])=><article className="page-block technology-feature" key={n}><span className="mono">{n}</span><div><span className="mono">TOPIC</span><h2>{title}</h2><p>{body}</p></div><span className="arrow">↗</span></article>)}</section><section className="page-block page-cta"><span className="mono">RESEARCH DIRECTION</span><h2>Useful technical writing starts with a real engineering question.</h2><Link className="text-link" href="/contact">Work with Avenelix →</Link></section></main>}
