'use client';

import dynamic from 'next/dynamic';

const StudioCanvas = dynamic(() => import('./StudioCanvas'), {
  ssr: false,
  loading: () => <div className="hero-canvas-fallback" aria-hidden="true" />
});

export default StudioCanvas;
