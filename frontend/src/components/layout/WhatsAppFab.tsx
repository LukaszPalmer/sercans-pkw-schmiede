import { Icon } from '@/components/ui/Icon';
import { whatsappUrl } from '@/lib/whatsapp';

/** Schwebender WhatsApp-Button ab Tablet – mobil übernimmt die MobileActionBar. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-Chat öffnen"
      className="chamfer group fixed right-6 bottom-6 z-40 hidden h-14 items-center gap-3 px-4 text-primary shadow-glow [--btn-bg:var(--color-accent)] [--chamfer:0.625rem] hover:[--btn-bg:var(--color-accent-300)] md:inline-flex 3xl:right-10 3xl:bottom-10"
    >
      <Icon name="whatsapp" className="size-6" />
      <span className="max-w-0 overflow-hidden font-semibold whitespace-nowrap transition-[max-width] duration-500 ease-forge group-hover:max-w-40 group-focus-visible:max-w-40">
        WhatsApp-Chat
      </span>
    </a>
  );
}
