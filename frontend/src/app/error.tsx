'use client';

import { useEffect } from 'react';
import { PageTitle } from '@/components/sections/PageTitle';
import { Button, ButtonLink } from '@/components/ui/Button';

/** Fehlerseite im Stil der Titelzeile – eigenständig, damit die Bild-Registry nicht ins Client-Bundle wandert. */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageTitle kicker="Unerwarteter Fehler" title="Da ist etwas schiefgelaufen." lead="Bitte versuchen Sie es erneut – oder kontaktieren Sie uns direkt.">
      <div className="flex flex-wrap gap-3">
        <Button onClick={reset}>Erneut versuchen</Button>
        <ButtonLink href="/kontakt" variant="outline">
          Kontakt
        </ButtonLink>
      </div>
    </PageTitle>
  );
}
