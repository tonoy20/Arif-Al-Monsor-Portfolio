import { useEffect, useState } from 'react';

type ScrollState = {
  y: number;
  progress: number;
  scrolled: boolean;
};

/** Window scroll position, overall page progress (0–1) and "past the top" flag. */
export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({ y: 0, progress: 0, scrolled: false });

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setState({ y, progress: max > 0 ? y / max : 0, scrolled: y > 24 });
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return state;
}
