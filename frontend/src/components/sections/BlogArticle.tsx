import { ButtonLink } from '@/components/ui/Button';
import { serviceGraphics } from '@/components/ui/graphics';
import { Section } from '@/components/ui/Section';
import type { BlogPost } from '@/types/blog';
import type { Service } from '@/types/service';
import { ArticleBody } from './ArticleBody';

/** Artikel-Layout: Lesespalte (max. 70 Zeichen) + Sticky-Sidebar mit Inhaltsverzeichnis und Leistungsbezug. */
export function BlogArticle({ post, service }: { post: BlogPost; service: Service }) {
  const toc = post.body.filter((b): b is Extract<typeof b, { type: 'h2' }> => b.type === 'h2');
  const Graphic = serviceGraphics[service.slug];
  return (
    <Section id="artikel">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <article className="max-w-[44rem] lg:col-span-7 xl:col-span-8">
          <p className="text-lead font-medium text-primary">{post.excerpt}</p>
          <div className="mt-10">
            <ArticleBody blocks={post.body} />
          </div>
        </article>
        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="space-y-8 lg:sticky lg:top-28">
            {toc.length > 0 && (
              <nav aria-label="Inhaltsverzeichnis" className="bg-paper p-6 ring-1 ring-line">
                <p className="text-eyebrow font-semibold text-accent-700 uppercase">In diesem Artikel</p>
                <ol className="mt-4 space-y-1">
                  {toc.map((h, i) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="flex min-h-10 items-start gap-3 py-1 text-sm font-semibold hover:text-secondary">
                        <span className="w-6 shrink-0 text-muted">{String(i + 1).padStart(2, '0')}</span>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="bg-forge p-6 text-white sm:p-8">
              <Graphic />
              <p className="text-eyebrow mt-8 font-semibold text-accent uppercase">Passende Leistung</p>
              <p className="mt-3 font-display text-2xl font-bold">{service.title}</p>
              <p className="mt-3 leading-relaxed text-muted-dark">{service.summary}</p>
              <ButtonLink href={`/leistungen/${service.slug}`} className="mt-6 w-full" icon="arrow-right">
                Zur Leistung
              </ButtonLink>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
