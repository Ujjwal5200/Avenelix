import Link from 'next/link';
export function SiteFooter(){return <footer className="site-footer"><span>© {new Date().getFullYear()} Avenelix</span><span>Intelligent software systems</span><Link href="/contact">Start a conversation →</Link></footer>}
