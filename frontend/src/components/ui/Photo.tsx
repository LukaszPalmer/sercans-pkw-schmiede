import Image from 'next/image';
import { images } from '@/lib/content/images';
import type { ImageKey } from '@/types/image';

interface PhotoProps {
  image: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Dekoratives Bild (z. B. Banner-Hintergrund) → leerer Alt-Text für Screenreader. */
  decorative?: boolean;
}

/** Registry-gebundenes next/image: AVIF/WebP, responsive srcset, Blur-Placeholder, CLS 0. */
export function Photo({ image, sizes, className = 'object-cover', priority = false, decorative = false }: PhotoProps) {
  const { src, width, height, alt, blurDataURL } = images[image];
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={decorative ? '' : alt}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      quality={80}
      className={className}
    />
  );
}
