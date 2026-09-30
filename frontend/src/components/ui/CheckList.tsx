import { cn } from '@/lib/cn';
import { Icon } from './Icon';

interface CheckListProps {
  items: string[];
  tone?: 'light' | 'dark';
  columns?: 1 | 2;
  className?: string;
}

export function CheckList({ items, tone = 'dark', columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-4', columns === 2 && 'md:grid-cols-2', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5">
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 grid size-6 shrink-0 place-items-center',
              tone === 'light' ? 'bg-accent text-primary' : 'bg-primary text-accent',
            )}
          >
            <Icon name="check" className="size-3.5" strokeWidth={3} />
          </span>
          <span className={cn('leading-relaxed', tone === 'light' ? 'text-white/90' : 'text-primary')}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
