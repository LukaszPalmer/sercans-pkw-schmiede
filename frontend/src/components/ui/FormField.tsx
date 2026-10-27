import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Control-Optik wie im Design: weiße Fläche, Haarlinie, 18 px Innenabstand, 15 px Schrift (mobil 16 px – kein iOS-Zoom). */
export const controlClass =
  'block w-full border border-line bg-white px-[1.125rem] text-base leading-[1.5] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted hover:border-muted focus:border-primary focus:ring-1 focus:ring-primary focus:ring-inset md:text-[0.9375rem] aria-[invalid=true]:border-error aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-error aria-[invalid=true]:ring-inset';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

/** Feldname über dem Feld (13 px, 12 px Abstand); Pflichtfelder tragen ein Sternchen. */
export function Field({ id, label, required, error, className, children }: FieldProps) {
  return (
    <div className={cn('min-w-0', className)}>
      <label htmlFor={id} className="mb-3 block text-[0.8125rem] leading-[1.21]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
