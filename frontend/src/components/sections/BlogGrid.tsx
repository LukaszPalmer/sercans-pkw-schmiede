import { ButtonLink } from '@/components/ui/Button';
import { PostCard } from '@/components/ui/PostCard';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  featureFirst?: boolean;
  showAllLink?: boolean;
  tone?: 'white' | 'paper';
  id?: string;
}

export function BlogGrid({
  posts,
  eyebrow = 'Ratgeber',
  title = 'Wissen aus der Werkstatt.',
  lead,
  featureFirst = false,
  showAllLink = false,
  tone = 'paper',
  id = 'ratgeber',
}: BlogGridProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} />
        {showAllLink && (
          <ButtonLink href="/blog" variant="outline" icon="arrow-right" className="self-start md:self-auto">
            Alle Artikel
          </ButtonLink>
        )}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} featured={featureFirst && i === 0} />
        ))}
      </div>
    </Section>
  );
}
