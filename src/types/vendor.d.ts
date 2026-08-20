declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    touchMultiplier?: number;
    getDirection?: boolean;
    getSpeed?: boolean;
    offset?: [string, string];
    tablet?: { smooth?: boolean };
    smartphone?: { smooth?: boolean };
  }

  interface LocomotiveScrollEvent {
    scroll?: { y?: number };
    currentElements?: Record<string, { el?: HTMLElement }>;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: 'scroll', callback: (args: LocomotiveScrollEvent) => void): void;
    update(): void;
    scrollTo(target: string | number | HTMLElement, options?: Record<string, unknown>): void;
    destroy(): void;
    raf(time: number): void;
  }
}
