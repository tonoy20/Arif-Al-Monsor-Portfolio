import { useEffect, useRef, useState } from 'react';

type TiltOptions = {
  /** Max rotation in degrees. */
  max?: number;
  /** Perspective in pixels. */
  perspective?: number;
};

/**
 * Subtle 3D tilt on pointer move, used on the project cards and the hero
 * portrait. Disabled on touch devices and for reduced-motion users.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 8,
  perspective = 1000,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState({ transform: '', transition: '' });
  const raf = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) {
      setStyle({ transform: '', transition: '' });
      return;
    }

    const reset = () => {
      setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)', transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)' });
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setStyle({
          transform: `perspective(${perspective}px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`,
          transition: 'transform 120ms ease-out',
        });
      });
    };

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', reset);
    return () => {
      cancelAnimationFrame(raf.current);
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', reset);
    };
  }, [max, perspective]);

  return { ref, style };
}
