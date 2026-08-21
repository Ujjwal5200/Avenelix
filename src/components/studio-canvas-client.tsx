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
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => { if (!cancelled) setReady(true); };

    if ('requestIdleCallback' in window) {
      timer = setTimeout(() => {
        if (!cancelled) window.requestIdleCallback(start, { timeout: 900 });
      }, 250);
    } else {
      timer = setTimeout(start, 450);
    }

    return () => {
      cancelled = true;
      if (timer !== undefined) clearTimeout(timer);
    };
  }, []);

  if (!ready) return <div className="hero-canvas-fallback" aria-hidden="true" />;
  return <StudioCanvas />;
}
