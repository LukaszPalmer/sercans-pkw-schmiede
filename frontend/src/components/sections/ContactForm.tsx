'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef, useState, type ChangeEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Field, controlClass } from '@/components/ui/FormField';
import { Icon } from '@/components/ui/Icon';
import { sendContactRequest } from '@/lib/actions/contact';
import { cn } from '@/lib/cn';
import { PHOTO_LIMITS } from '@/lib/validation/photos';
import type { ContactField, ContactFormState } from '@/types/contact';

const initialState: ContactFormState = { status: 'idle', message: '', fieldErrors: {} };

/** Einzeilige Felder: 56 px hoch wie im Design. */
const inputClass = cn(controlClass, 'h-14');

interface ContactFormProps {
  /** Auswahl „Gewünschte Leistung“ – vom Server übergeben, damit der Leistungskatalog nicht ins Client-Bundle wandert. */
  services: { value: string; label: string }[];
}

/** Verkleinert ein Foto im Browser auf die längste Kante `maxEdge` (JPEG) – hält die Anfrage unter dem Upload-Limit. */
async function shrink(file: File): Promise<File> {
  if (!file.type.startsWith('image/') || file.type === 'image/gif') return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, PHOTO_LIMITS.maxEdge / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', PHOTO_LIMITS.jpegQuality));
    if (!blob || (scale === 1 && blob.size >= file.size)) return file;
    return new File([blob], `${file.name.replace(/\.[^.]+$/, '') || 'foto'}.jpg`, { type: 'image/jpeg' });
  } catch {
    return file;
  }
}

/**
 * Terminanfrage wie im Design – Interaktions-Insel: Server Action + useActionState, funktioniert auch ohne JavaScript.
 * Fotos werden vor dem Senden im Browser verkleinert; `?leistung=<slug>` in der Adresse wählt die Leistung vor.
 */
export function ContactForm({ services }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContactRequest, initialState);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  /** Vorbereitete Fotos – überstehen den Formular-Remount nach einem Fehler (Dateifelder lassen sich nicht per Wert vorbelegen). */
  const photosRef = useRef<File[]>([]);
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const [photoNote, setPhotoNote] = useState<string | null>(null);
  const [preparing, setPreparing] = useState(false);

  const errors = state.fieldErrors;
  const value = (key: ContactField) => state.values?.[key] ?? '';
  const a11y = (key: ContactField | 'photos') => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `kf-${key}-error` : undefined,
  });

  // Leistung aus dem Link der Leistungsseite übernehmen („Termin anfragen“ → /kontakt?leistung=…)
  useEffect(() => {
    const select = serviceRef.current;
    const wanted = new URLSearchParams(window.location.search).get('leistung');
    if (select && !select.value && wanted && services.some((s) => s.value === wanted)) select.value = wanted;
  }, [services, state.attempt]);

  // Nach einem Fehler wird das Formular neu aufgebaut – die gewählten Fotos wieder ins neue Dateifeld legen
  useEffect(() => {
    const input = photoRef.current;
    if (!input || photosRef.current.length === 0) return;
    const transfer = new DataTransfer();
    photosRef.current.forEach((file) => transfer.items.add(file));
    input.files = transfer.files;
  }, [state.attempt]);

  const onPhotos = async (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const picked = Array.from(input.files ?? []);
    setPreparing(true);
    const prepared = await Promise.all(picked.slice(0, PHOTO_LIMITS.maxFiles).map(shrink));
    const kept: File[] = [];
    let total = 0;
    for (const file of prepared) {
      if (total + file.size > PHOTO_LIMITS.maxTotalBytes) break;
      total += file.size;
      kept.push(file);
    }
    const transfer = new DataTransfer();
    kept.forEach((file) => transfer.items.add(file));
    input.files = transfer.files;
    photosRef.current = kept;
    setPhotoNames(kept.map((file) => file.name));
    setPhotoNote(kept.length < picked.length ? `Es werden ${kept.length} von ${picked.length} Fotos gesendet.` : null);
    setPreparing(false);
  };

  const clearPhotos = () => {
    if (photoRef.current) photoRef.current.value = '';
    photosRef.current = [];
    setPhotoNames([]);
    setPhotoNote(null);
  };

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-5 border border-line bg-white p-8">
        <span className="grid size-12 place-items-center text-primary ring-1 ring-primary ring-inset">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="text-h3">Anfrage gesendet</h3>
        <p className="max-w-md text-base leading-[1.6] text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    // Neuer key je Versuch → Remount mit den zurückgegebenen Werten (React 19 setzt Formulare nach Actions zurück).
    <form key={state.attempt ?? 0} action={formAction} className="flex flex-col gap-7" aria-describedby="kf-status" aria-labelledby="kf-title">
      <div className="flex items-center justify-between gap-4">
        <h3 id="kf-title" className="text-h3">
          Terminanfrage
        </h3>
        <p className="text-xs leading-[1.21] text-muted">* Pflichtangaben</p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 md:gap-x-6">
        <Field id="kf-name" label="Name" required error={errors.name}>
          <input
            id="kf-name"
            name="name"
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="next"
            required
            minLength={2}
            maxLength={120}
            placeholder="Vor- und Nachname"
            defaultValue={value('name')}
            className={inputClass}
            {...a11y('name')}
          />
        </Field>
        <Field id="kf-email" label="E-Mail" required error={errors.email}>
          <input
            id="kf-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            enterKeyHint="next"
            required
            maxLength={200}
            placeholder="Ihre E-Mail-Adresse"
            defaultValue={value('email')}
            className={inputClass}
            {...a11y('email')}
          />
        </Field>
        <Field id="kf-phone" label="Telefon · optional" error={errors.phone}>
          <input
            id="kf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            enterKeyHint="next"
            maxLength={40}
            placeholder="Für eine telefonische Rückfrage"
            defaultValue={value('phone')}
            className={inputClass}
            {...a11y('phone')}
          />
        </Field>
        <Field id="kf-vehicle" label="Fahrzeug" error={errors.vehicle}>
          <input
            id="kf-vehicle"
            name="vehicle"
            autoComplete="off"
            enterKeyHint="next"
            maxLength={120}
            placeholder="Marke, Modell, Baujahr"
            defaultValue={value('vehicle')}
            className={inputClass}
            {...a11y('vehicle')}
          />
        </Field>
        <Field id="kf-engine" label="Motorisierung · optional" error={errors.engine}>
          <input
            id="kf-engine"
            name="engine"
            autoComplete="off"
            enterKeyHint="next"
            maxLength={120}
            placeholder="Motor / Antrieb"
            defaultValue={value('engine')}
            className={inputClass}
            {...a11y('engine')}
          />
        </Field>
        <Field id="kf-mileage" label="Kilometerstand · optional" error={errors.mileage}>
          <input
            id="kf-mileage"
            name="mileage"
            inputMode="numeric"
            autoComplete="off"
            enterKeyHint="next"
            maxLength={40}
            placeholder="Aktueller Stand"
            defaultValue={value('mileage')}
            className={inputClass}
            {...a11y('mileage')}
          />
        </Field>
        <Field id="kf-service" label="Gewünschte Leistung" required error={errors.service} className="md:col-span-2">
          <div className="relative">
            <select
              ref={serviceRef}
              id="kf-service"
              name="service"
              required
              defaultValue={value('service')}
              className={cn(inputClass, 'cursor-pointer appearance-none pr-12 invalid:text-muted [&_option]:text-ink')}
              {...a11y('service')}
            >
              <option value="" disabled>
                Bitte Leistung auswählen
              </option>
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {/* „⌄“ aus dem Design (Inter, 15 px) als Kontur */}
            <svg
              aria-hidden="true"
              viewBox="0 0 6.15 5.64"
              fill="currentColor"
              className="pointer-events-none absolute top-1/2 right-[1.125rem] h-[0.3525rem] w-[0.384rem] -translate-y-1/2 text-muted"
            >
              <path d="M2.925 5.64 0 0h1.215l1.86 3.69L4.935 0H6.15L3.225 5.64h-.3Z" />
            </svg>
          </div>
        </Field>
        <Field id="kf-message" label="Ihr Anliegen" required error={errors.message} className="md:col-span-2">
          <textarea
            id="kf-message"
            name="message"
            required
            maxLength={4000}
            rows={4}
            placeholder="Was ist Ihnen aufgefallen? Was möchten Sie machen lassen? Gibt es einen bevorzugten Zeitraum?"
            defaultValue={value('message')}
            className={cn(controlClass, 'min-h-[9.375rem] resize-y py-[1.125rem]')}
            {...a11y('message')}
          />
        </Field>
      </div>

      <div className="dashed-frame flex flex-col gap-2.5 p-6 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="kf-photos" className="cursor-pointer text-[0.9375rem] leading-[1.21] text-primary transition-colors hover:text-ink">
            Fotos hinzufügen +
          </label>
          <span className="text-xs leading-[1.21] text-muted">optional</span>
        </div>
        <input
          ref={photoRef}
          id="kf-photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={onPhotos}
          className="sr-only"
          {...a11y('photos')}
        />
        <p className="text-[0.8125rem] leading-[1.6] text-muted">
          Nahaufnahme und Gesamtansicht helfen. Bitte keine Ausweise oder sensiblen Dokumente hochladen.
        </p>
        {(preparing || photoNames.length > 0) && (
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[0.8125rem] leading-[1.6]">
            <p className="min-w-0 break-all text-ink">{preparing ? 'Fotos werden vorbereitet …' : photoNames.join(', ')}</p>
            {!preparing && (
              <button type="button" onClick={clearPhotos} className="text-primary transition-colors hover:text-ink">
                Entfernen
              </button>
            )}
          </div>
        )}
        {photoNote && <p className="text-[0.8125rem] leading-[1.6] text-muted">{photoNote}</p>}
        {errors.photos && (
          <p id="kf-photos-error" className="text-xs text-error">
            {errors.photos}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="kf-website">Website</label>
        <input id="kf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-[0.875rem] text-[0.8125rem] leading-[1.6] text-muted">
          <span className="relative grid size-[1.1875rem] shrink-0 place-items-center">
            <input
              type="checkbox"
              name="privacy"
              required
              defaultChecked={value('privacy') === 'on'}
              className="peer size-full cursor-pointer appearance-none border border-muted bg-transparent transition-colors checked:border-primary checked:bg-primary"
              {...a11y('privacy')}
            />
            <Icon name="check" strokeWidth={2} className="pointer-events-none absolute size-3 text-white opacity-0 peer-checked:opacity-100" />
          </span>
          <span>
            Ich habe die{' '}
            <Link href="/datenschutz" className="underline decoration-1 underline-offset-2 transition-colors hover:text-primary">
              Datenschutzhinweise
            </Link>{' '}
            gelesen. Meine Angaben dürfen zur Bearbeitung der Anfrage verwendet werden. *
          </span>
        </label>
        {errors.privacy && (
          <p id="kf-privacy-error" className="mt-2 text-xs text-error">
            {errors.privacy}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4">
        <Button type="submit" disabled={pending || preparing} aria-disabled={pending || preparing}>
          {pending ? 'Wird gesendet …' : 'Anfrage senden'}
        </Button>
        <p id="kf-status" role="status" aria-live="polite" className={cn('text-xs', state.status === 'error' ? 'font-medium text-error' : 'sr-only')}>
          {state.status === 'error' ? state.message : ''}
        </p>
      </div>
    </form>
  );
}
