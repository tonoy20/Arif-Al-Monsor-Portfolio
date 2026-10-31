import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: a small dot that tracks the pointer exactly, plus a larger
 * ring that lags behind it with an eased follow. The ring grows and shows a
 * label when it sits over anything interactive.
 *
 * Automatically disabled on touch devices and for reduced-motion users, and it
 * hides itself entirely when the pointer leaves the window.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const active = fine && !calm;
    setEnabled(active);
    if (!active) return;

    document.documentElement.classList.add('no-cursor');

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      // What is the pointer over? Interactive elements get the hover state.
      const el = event.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [data-cursor], input, textarea, select, [role="button"], label',
      ) as HTMLElement | null;

      if (interactive) {
        setHovering(true);
        setLabel(interactive.dataset.cursor ?? '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const loop = () => {
      // Lerp towards the pointer — the ring trails the dot.
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('no-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div ref={dotRef} className="cursor-dot" style={{ opacity: hovering ? 0 : 1, transition: 'opacity .2s' }} />
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? ' is-hovering' : ''}${pressed ? ' is-down' : ''}`}
      >
        {hovering && label ? <span className="cursor-label">{label}</span> : null}
      </div>
    </div>
  );
}
