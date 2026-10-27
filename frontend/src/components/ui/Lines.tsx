import { Fragment } from 'react';

/** Text mit „\n“ an den Zeilenumbrüchen des Designs – als <br>, ohne HTML im Inhalt. */
export function Lines({ text }: { text: string }) {
  return text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
