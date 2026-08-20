export const metadata = { title: 'Approach', description: 'How Avenelix approaches complex software and AI problems.' };
const steps=[['01','DISCOVER'],['02','ARCHITECT'],['03','BUILD'],['04','VALIDATE'],['05','DEPLOY'],['06','EVOLVE']];
export default function ApproachPage(){return <main className="inner-page"><p className="mono">04 · APPROACH</p><h1>From difficult problem to dependable system.</h1><div className="page-grid">{steps.map(([n,t])=><section className="page-block" key={n}><span className="mono">{n}</span><h2>{t}</h2></section>)}</div></main>}
