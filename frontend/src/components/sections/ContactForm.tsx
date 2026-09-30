'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { Button } from '@/components/ui/Button';
import { Field, controlClass } from '@/components/ui/FormField';
import { Icon } from '@/components/ui/Icon';
import { sendContactRequest } from '@/lib/actions/contact';
import { cn } from '@/lib/cn';
import type { ContactField, ContactFormState } from '@/types/contact';

const initialState: ContactFormState = { status: 'idle', message: '', fieldErrors: {} };

interface ContactFormProps {
  services: { slug: string; title: string }[];
  defaultService?: string;
}

/** Interaktions-Insel: Server Action + useActionState, funktioniert auch ohne JavaScript. */
export function ContactForm({ services, defaultService = '' }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContactRequest, initialState);
  const errors = state.fieldErrors;
  const value = (key: ContactField, fallback = '') => state.values?.[key] ?? fallback;
  const a11y = (key: ContactField) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `kf-${key}-error` : undefined,
  });

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-5 py-6">
        <span className="grid size-14 place-items-center bg-accent text-primary">
          <Icon name="check" className="size-7" strokeWidth={2.5} />
        </span>
        <h3 className="text-h3 font-bold">Anfrage gesendet</h3>
        <p className="max-w-md leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    // Neuer key je Versuch → Remount mit den zurückgegebenen Werten (React 19 setzt Formulare nach Actions zurück).
    <form key={state.attempt ?? 0} action={formAction} className="grid gap-6 md:grid-cols-2" aria-describedby="kf-status">
      <Field id="kf-name" label="Name" required error={errors.name}>
        <input id="kf-name" name="name" autoComplete="name" required minLength={2} maxLength={120} defaultValue={value('name')} className={controlClass} {...a11y('name')} />
      </Field>
      <Field id="kf-email" label="E-Mail" required error={errors.email}>
        <input id="kf-email" name="email" type="email" autoComplete="email" required maxLength={200} defaultValue={value('email')} className={controlClass} {...a11y('email')} />
      </Field>
      <Field id="kf-phone" label="Telefon" error={errors.phone}>
        <input id="kf-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} defaultValue={value('phone')} className={controlClass} {...a11y('phone')} />
      </Field>
      <Field id="kf-service" label="Leistung" error={errors.service}>
        <select id="kf-service" name="service" defaultValue={value('service', defaultService)} className={cn(controlClass, 'appearance-none bg-[url(/images/chevron.svg)] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12')} {...a11y('service')}>
          <option value="">Allgemeine Anfrage</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>
      <Field id="kf-vehicle" label="Fahrzeug (Marke, Modell, Baujahr)" error={errors.vehicle}>
        <input id="kf-vehicle" name="vehicle" maxLength={120} placeholder="z. B. VW Golf 8, 2021" defaultValue={value('vehicle')} className={controlClass} {...a11y('vehicle')} />
      </Field>
      <Field id="kf-date" label="Wunschtermin" error={errors.date}>
        <input id="kf-date" name="date" type="date" defaultValue={value('date')} className={controlClass} {...a11y('date')} />
      </Field>
      <Field id="kf-message" label="Ihr Anliegen" required error={errors.message} className="md:col-span-2">
        <textarea id="kf-message" name="message" required minLength={10} maxLength={4000} rows={5} defaultValue={value('message')} className={cn(controlClass, 'resize-y')} {...a11y('message')} />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="kf-website">Website</label>
        <input id="kf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="md:col-span-2">
        <label className="flex cursor-pointer items-start gap-3.5 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            name="privacy"
            required
            defaultChecked={value('privacy') === 'on'}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-accent"
            {...a11y('privacy')}
          />
          <span>
            Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Details in der{' '}
            <Link href="/datenschutz" className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-2">
              Datenschutzerklärung
            </Link>
            . <span className="text-accent-700">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p id="kf-privacy-error" className="mt-2 text-sm font-semibold text-accent-700">
            {errors.privacy}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p id="kf-status" role="status" aria-live="polite" className={cn('text-sm font-semibold', state.status === 'error' ? 'text-accent-700' : 'text-muted')}>
          {state.status === 'error' ? state.message : '* Pflichtfelder'}
        </p>
        <Button type="submit" size="lg" icon={pending ? 'clock' : 'arrow-right'} disabled={pending} aria-disabled={pending}>
          {pending ? 'Wird gesendet …' : 'Anfrage senden'}
        </Button>
      </div>
    </form>
  );
}
