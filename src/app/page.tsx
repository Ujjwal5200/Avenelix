import dynamic from 'next/dynamic';
import StudioRuntime from '@/components/StudioRuntime';

const StudioCanvas = dynamic(() => import('@/components/StudioCanvas'), {
  ssr: false,
  loading: () => <div className="hero-canvas-fallback" aria-hidden="true" />
});

const capabilities = [
  ['01', 'AI SYSTEMS', 'Intelligent systems, orchestration and reliable model-powered software.'],
  ['02', 'SOFTWARE', 'Production applications engineered around real operational problems.'],
  ['03', 'DATA', 'Pipelines, retrieval, analytics and decision systems.'],
  ['04', 'INFRASTRUCTURE', 'Cloud architecture, deployment, observability and developer platforms.']
] as const;

export default function Home() {
  return <>
    <StudioRuntime />
    <main className="home">
      <section className="hero">
        <StudioCanvas />
        <div className="hero-vignette" />
        <div className="hero-copy">
          <div className="mono eyebrow">Independent software studio · 2026</div>
          <h1><span>Intelligence,</span><span>engineered.</span></h1>
          <p className="hero-description">Avenelix builds intelligent software systems, AI products and digital experiences for problems worth solving.</p>
          <a className="cta" href="/work">Explore the work <span>↗</span></a>
        </div>
        <div className="hero-index mono">001 / 004</div>
      </section>
      <section className="section" data-reveal>
        <div className="section-grid"><div className="mono">01 · FOCUS</div><div><h2>Software should feel as considered as it functions.</h2><p className="section-copy">We combine engineering, intelligence and experience design to turn difficult problems into systems people can actually use.</p></div></div>
      </section>
      <section className="section" data-reveal>
        <div className="section-grid"><div className="mono">02 · CAPABILITIES</div><div><h2>Built from the system out.</h2><div className="capabilities">{capabilities.map(([n, title, body]) => <div className="capability" key={n}><span className="mono">{n}</span><div><h3>{title}</h3><p>{body}</p></div><span className="arrow">↗</span></div>)}</div></div></div>
      </section>
      <section className="section" data-reveal>
        <div className="section-grid"><div className="mono">03 · SELECTED WORK</div><div><h2>Experiments becoming products.</h2><div className="work-grid"><a className="work-card" href="/work"><span className="mono">AI / SYSTEMS</span><h3>Intelligent infrastructure</h3><p>Explore the systems we are building and validating.</p></a><a className="work-card" href="/technology"><span className="mono">SOFTWARE / ENGINEERING</span><h3>Production software</h3><p>Architecture, interfaces and infrastructure engineered together.</p></a></div></div></div>
      </section>
      <section className="section contact" data-reveal><div className="mono">04 · START A PROJECT</div><h2>Let's build something difficult.</h2><a className="contact-link" href="/contact">Start a conversation ↗</a></section>
    </main>
  </>;
}
