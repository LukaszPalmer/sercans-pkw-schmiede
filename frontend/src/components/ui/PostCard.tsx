import Link from 'next/link';
import { formatDate } from '@/lib/content/blog';
import { cn } from '@/lib/cn';
import type { BlogPost } from '@/types/blog';
import { Icon } from './Icon';
import { Photo } from './Photo';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={cn(
        'group reveal relative flex flex-col bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-card',
        featured && 'lg:col-span-2 lg:grid lg:grid-cols-2',
      )}
    >
      <div className={cn('relative overflow-hidden bg-primary', featured ? 'aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]')}>
        <Photo
          image={post.image}
          sizes={featured ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw'}
          className="size-full object-cover transition-transform duration-700 ease-forge group-hover:scale-105 lg:absolute lg:inset-0"
          decorative
        />
        <span className="absolute top-0 left-0 bg-accent px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" className="size-4" />
            {post.readingMinutes} Min. Lesezeit
          </span>
        </p>
        <h3 className={cn('mt-4 font-bold', featured ? 'text-h2' : 'text-h3')}>
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-3 focus-visible:after:outline-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{post.excerpt}</p>
        <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
          Weiterlesen
          <Icon name="arrow-right" className="size-4 text-accent-700 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
