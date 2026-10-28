'use client';

import { Children, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';

/** Standzeit je Bild – so lange füllt sich der Fortschrittsbalken. */
const DURATION = 4000;
/** Sanfter Zoom des eingeblendeten Bildes auf seine Endgröße – länger als die Standzeit, damit er nicht stehen bleibt. */
const ZOOM = { from: 1.06, duration: 5000 };

const motionQuery = '(prefers-reduced-motion: reduce)';
const subscribeMotion = (onChange: () => void) => {
  const query = matchMedia(motionQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

interface BannerSliderProps {
  /** Ein Foto je Bild, bildschirmfüllend – das erste ist beim Laden zu sehen. */
  children: ReactNode;
}

/**
 * Bildwechsel im Seitenbanner: Alle 4 s blendet das nächste Foto in 1 s über das aktuelle und zoomt dabei sanft auf seine
 * Endgröße. Unten – mobil mittig, ab 768 px bündig mit dem Text – ein Graphitfeld mit Pause und einem Balken je Bild: Der
 * aktuelle füllt sich in 4 s himmelblau, ein Klick springt zum Bild.
 * Der Takt läuft über requestAnimationFrame statt als CSS-Animation (die globale Regel für reduzierte Bewegung kürzt
 * Animationen auf 0,01 ms) und ruht, solange der Banner nicht zu sehen ist. Bei reduzierter Bewegung startet er angehalten.
 */
export function BannerSlider({ children }: BannerSliderProps) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const zoom = useRef<Animation | null>(null);
  const shown = useRef(0);
  const elapsed = useRef(0);
  const [active, setActive] = useState(0);
  const [choice, setChoice] = useState<'play' | 'pause' | null>(null);
  const [inView, setInView] = useState(true);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => matchMedia(motionQuery).matches, () => false);
  const playing = choice ? choice === 'play' : !reducedMotion;
  const running = playing && inView;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setInView(entry.isIntersecting);
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Neues Bild: Balken von vorn – vor dem Zeichnen, sonst steht er einen Frame lang voll
  useLayoutEffect(() => {
    elapsed.current = 0;
    barsRef.current?.style.setProperty('--progress', '0');
  }, [active]);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let last: number | undefined;
    const tick = (now: number) => {
      // Höchstens 100 ms je Frame: Nach einem Hintergrund-Tab läuft der Balken weiter, statt zu springen
      elapsed.current += last === undefined ? 0 : Math.min(now - last, 100);
      last = now;
      const progress = Math.min(elapsed.current / DURATION, 1);
      barsRef.current?.style.setProperty('--progress', String(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setActive((i) => (i + 1) % count);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, active, count]);

  // Zoom beim Einblenden – nicht für das Startbild und nicht bei angehaltenem Wechsel
  useEffect(() => {
    if (active === shown.current) return;
    shown.current = active;
    const slide = slideRefs.current[active];
    zoom.current =
      running && !reducedMotion && slide
        ? slide.animate([{ scale: String(ZOOM.from) }, { scale: '1' }], { duration: ZOOM.duration, easing: 'ease-out', fill: 'both' })
        : null;
  }, [active, running, reducedMotion]);

  useEffect(() => {
    const animation = zoom.current;
    if (!animation || animation.playState === 'finished') return;
    if (running) animation.play();
    else animation.pause();
  }, [running]);

  return (
    <>
      <div ref={rootRef} aria-live={playing ? 'off' : 'polite'} className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            aria-hidden={i !== active}
            className={cn(
              'absolute inset-0 transition-opacity',
              // Das neue Bild blendet über das alte, das erst danach verschwindet – ohne dunklen Zwischenmoment
              i === active ? 'z-[1] opacity-100 duration-1000 ease-in-out' : 'opacity-0 delay-1000 duration-0',
            )}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
        <div className="container-site flex pb-4 max-md:justify-center md:pb-6">
          <div
            role="group"
            aria-label="Bildwechsel"
            className="pointer-events-auto flex items-center bg-night/80 pr-2 ring-1 ring-white/15 backdrop-blur-md ring-inset"
          >
            <button
              type="button"
              onClick={() => setChoice(playing ? 'pause' : 'play')}
              aria-label={playing ? 'Bildwechsel anhalten' : 'Bildwechsel fortsetzen'}
              className="grid size-11 cursor-pointer place-items-center text-white transition-colors duration-300 hover:text-sky"
            >
              <Icon name={playing ? 'pause' : 'play'} className="size-4" />
            </button>
            <div ref={barsRef} className="flex">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Bild ${i + 1} anzeigen`}
                  aria-current={i === active || undefined}
                  className="group/bar flex h-11 w-12 cursor-pointer items-center px-1 md:w-16"
                >
                  <span className="relative h-0.5 w-full overflow-hidden bg-white/25 transition-colors duration-300 group-hover/bar:bg-white/50">
                    <span
                      className={cn(
                        'absolute inset-0 origin-left bg-sky',
                        i < active ? 'scale-x-100' : i === active ? '[scale:var(--progress,0)_1]' : 'scale-x-0',
                      )}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
