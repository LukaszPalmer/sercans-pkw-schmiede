'use client';

import { useEffect } from 'react';
import { Button, ButtonLink } from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-forge flex min-h-[70dvh] items-center pt-28 pb-16 text-white">
      <div className="container-site flex flex-col items-center text-center">
        <p className="text-eyebrow font-semibold text-accent uppercase">Unerwarteter Fehler</p>
        <h1 className="text-h1 mt-6 max-w-3xl font-extrabold">Da ist etwas schiefgelaufen.</h1>
        <p className="text-lead mt-6 max-w-xl text-white/80">Bitte versuchen Sie es erneut – oder kontaktieren Sie uns direkt.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset} size="lg" icon="arrow-right">
            Erneut versuchen
          </Button>
          <ButtonLink href="/kontakt" variant="light" size="lg">
            Kontakt
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
