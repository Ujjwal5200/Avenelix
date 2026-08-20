import Link from 'next/link';

export const metadata = { title: 'Work', description: 'Selected Avenelix software and AI systems.' };

export default function WorkPage() {
  return <main className="inner-page"><p className="mono">01 · WORK</p><h1>Systems becoming products.</h1><p className="lead">Selected experiments and production work. Detailed case studies will be added as projects are ready to be published.</p><div className="page-grid"><article><span className="mono">AI / SYSTEMS</span><h2>Intelligent infrastructure</h2><p>AI systems, retrieval, orchestration and production engineering.</p></article><article><span className="mono">SOFTWARE / ENGINEERING</span><h2>Production software</h2><p>Interfaces, APIs and infrastructure engineered as one system.</p></article></div><Link className="text-link" href="/contact">Discuss a project →</Link></main>;
}
