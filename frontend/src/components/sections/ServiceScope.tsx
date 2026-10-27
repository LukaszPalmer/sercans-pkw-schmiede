import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/cn';
import { pad2 } from '@/lib/format';
import type { Service } from '@/types/service';

/**
 * Leistungsumfang: Kicker und Titel links, Einordnung rechts – darunter drei Teilleistungen,
 * je nach Seite als Spalten (`columns`) oder Tabellenzeilen (`rows`), auf Mineralweiß oder Graphit.
 */
export function ServiceScope({ scope }: { scope: Service['scope'] }) {
  const night = scope.tone === 'night';
  return (
    <section aria-labelledby="umfang-title" className={cn(night && 'bg-night text-white')}>
      <div className="container-site flex flex-col gap-[3.375rem] py-sec-88">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[6.25rem]">
          <div className="reveal flex flex-col gap-[1.625rem] lg:w-[50.15%] lg:shrink-0">
            <Kicker tone={night ? 'night' : 'paper'}>{scope.kicker}</Kicker>
            {/* 2 px Luft: Chrome misst „So wenig Eingriff wie sinnvoll.“ 0,7 px breiter als Figma – einzeilig wie im Design */}
            <h2 id="umfang-title" className="text-h2 font-light lg:-mr-0.5">
              {scope.title}
            </h2>
          </div>
          <p className={cn('reveal text-lg leading-[1.7] lg:flex-1', night ? 'text-fog' : 'text-muted')}>{scope.text}</p>
        </div>

        {scope.layout === 'columns' ? (
          <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
            {scope.items.map((item, i) => (
              <li key={item.title} className={cn('reveal flex flex-col gap-5 border-t pt-6', night ? 'border-muted' : 'border-line')}>
                <span className={cn('text-xs leading-[1.21] tabular-nums', night ? 'text-sky' : 'text-primary')}>{pad2(i + 1)}</span>
                <h3 className="text-item-lg">{item.title}</h3>
                <p className={cn('text-[1.0625rem] leading-[1.65]', night ? 'text-fog' : 'text-muted')}>{item.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol>
            {scope.items.map((item, i) => (
              <li
                key={item.title}
                className="reveal grid gap-3 border-t border-line py-[1.6875rem] md:grid-cols-[4.63%_26.23%_minmax(0,1fr)] md:gap-12"
              >
                <span className="text-xs leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
                <h3 className="text-item">{item.title}</h3>
                <p className="text-[1.0625rem] leading-[1.6] text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
