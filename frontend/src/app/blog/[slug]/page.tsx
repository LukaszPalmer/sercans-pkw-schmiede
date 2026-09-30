import { notFound } from 'next/navigation';
import { BlogArticle } from '@/components/sections/BlogArticle';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageBanner } from '@/components/sections/PageBanner';
import { Icon } from '@/components/ui/Icon';
import { JsonLd } from '@/components/ui/JsonLd';
import { blogPosts, formatDate, getPost } from '@/lib/content/blog';
import { getService } from '@/lib/content/services';
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  const service = post && getService(post.service);
  if (!post || !service) notFound();

  const crumbs = [
    { label: 'Start', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.category, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(crumbs)]} />
      <PageBanner
        image={post.image}
        eyebrow={`Ratgeber · ${post.category}`}
        title={post.title}
        breadcrumbs={crumbs}
        meta={
          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Icon name="calendar" className="size-4 text-accent" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="clock" className="size-4 text-accent" />
              {post.readingMinutes} Min. Lesezeit
            </span>
          </p>
        }
        primary={{ label: 'Artikel lesen', href: '#artikel', icon: 'book' }}
        secondary={{ label: `Zur Leistung: ${service.navTitle}`, href: `/leistungen/${service.slug}` }}
      />
      <BlogArticle post={post} service={service} />
      <BlogGrid
        id="weitere-artikel"
        posts={blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)}
        eyebrow="Weiterlesen"
        title="Das könnte Sie auch interessieren."
        showAllLink
      />
      <CtaBand />
    </>
  );
}
