import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Studio', description: 'The philosophy and capabilities behind Avenelix.' };

export default function StudioPage() {
  return <main className="inner-page page-shell"><header className="page-hero"><p className="mono">01 · STUDIO</p><h1>Independent software, engineered with intent.</h1><p className="lead">Avenelix combines software engineering, intelligent systems and experience design around difficult problems.</p></header><section className="page-block"><span className="mono">PHILOSOPHY</span><h2>Precision before decoration.</h2><p>We design from the system outward: clear architecture, useful interfaces, measurable behavior and production constraints considered from the beginning.</p></section><section className="studio-principles"><article><span className="mono">01</span><h3>Precision</h3><p>Deliberate engineering and interfaces that serve a purpose.</p></article><article><span className="mono">02</span><h3>Systems</h3><p>Architecture, data, AI and experience considered as one system.</p></article><article><span className="mono">03</span><h3>Intelligence</h3><p>AI applied where it creates useful capability rather than visual noise.</p></article></section></main>;
}
