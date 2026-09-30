import type { ReactNode } from 'react';

/** Gemeinsame Control-Optik: 16 px Schrift (kein iOS-Zoom), ≥ 48 px Höhe, klarer Fokus. */
export const controlClass =
  'block w-full min-h-12 bg-white px-4 py-3 text-base text-primary ring-1 ring-line ring-inset outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-accent aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-accent-700';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function Field({ id, label, required, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
        {required ? (
          <span className="text-accent-700" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-accent-700">
          {error}
        </p>
      )}
    </div>
  );
}
