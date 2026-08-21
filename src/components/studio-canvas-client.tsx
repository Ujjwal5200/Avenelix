'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const StudioCanvas = dynamic(() => import('./StudioCanvas'), {
  ssr: false,
  loading: () => <div className="hero-canvas-fallback" aria-hidden="true" />
});

export default function StudioCanvasClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const start = () => { if (!cancelled) setReady(true); };
    const idle = 'requestIdleCallback' in window
      ? window.setTimeout(() => window.requestIdleCallback(start, { timeout: 900 }), 250)
      : window.setTimeout(start, 450);
    return () => { cancelled = true; window.clearTimeout(idle); };
  }, []);

  if (!ready) return <div className="hero-canvas-fallback" aria-hidden="true" />;
  return <StudioCanvas />;
}
