import Image from 'next/image';
import { images } from '@/lib/content/images';
import type { ImageKey } from '@/types/image';

interface PhotoProps {
  image: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
}

/** Registry-gebundenes next/image: AVIF/WebP, responsive srcset, Blur-Placeholder, CLS 0. */
export function Photo({ image, sizes, className = 'object-cover', priority = false }: PhotoProps) {
  const { src, width, height, alt, blurDataURL, position } = images[image];
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      quality={80}
      className={className}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
