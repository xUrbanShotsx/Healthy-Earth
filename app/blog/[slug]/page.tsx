import type { Metadata } from "next";
import Link from "next/link";
import OpenEllaButton from "@/components/OpenEllaButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Healthy Earth Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

const categoryColor: Record<string, string> = {
  "Soil Health":  "#2d7a3a",
  "Lawn Care":    "#3a7d6e",
  "Gardening":    "#6a7d2d",
  "Farming":      "#7d5a2d",
  "Product Tips": "#2d5a7d",
  "News":         "#5a2d7d",
};

/** Convert plain-text content with **bold** and • bullets to JSX */
function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);

  return paragraphs.map((para, i) => {
    const trimmed = para.trim();

    // Section heading: entire paragraph is **text**
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      const text = trimmed.replace(/^\*\*|\*\*$/g, "");
      return (
        <h2 key={i} className="text-xl font-bold text-gray-900 mt-10 mb-3 leading-snug">
          {text}
        </h2>
      );
    }

    // Bullet list
    if (trimmed.split("\n").every((l) => l.trim().startsWith("•"))) {
      const items = trimmed.split("\n").map((l) => l.trim().slice(1).trim());
      return (
        <ul key={i} className="my-4 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2d7a3a" }} />
              <span dangerouslySetInnerHTML={{ __html: inlineBold(item) }} />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="text-gray-600 leading-[1.85] my-4"
        dangerouslySetInnerHTML={{ __html: inlineBold(trimmed) }}
      />
    );
  });
}

function inlineBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const accentColor = categoryColor[post.category] ?? "#2d7a3a";

  return (
    <div style={{ background: "#fafaf8" }}>

      {/* ── Breadcrumb + meta bar ─────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-green-700 transition-colors font-medium">Blog</Link>
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: accentColor + "18", color: accentColor }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* ── Article header ───────────────────────────────────── */}
      <header className="bg-white pt-10 pb-8 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: accentColor }}
            >
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-700 text-sm">{post.author}</p>
              <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Optional hero image */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      )}

      {/* ── Body + sidebar ───────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* Article */}
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <div className="text-base">{renderContent(post.content)}</div>

            {/* Divider + author */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ background: accentColor }}
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-400">BioCare Fertilisers · Healthy Earth</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24">

            {/* Ask Ella */}
            <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(145deg, #1a5227, #2d7a3a)" }}>
              <p className="text-xs font-bold uppercase tracking-widest text-green-300 mb-1">Get personalised advice</p>
              <h3 className="text-lg font-bold mb-2">Ask Ella</h3>
              <p className="text-sm text-white/65 mb-4 leading-relaxed">
                Describe your plant problem and Ella will recommend the right product.
              </p>
              <OpenEllaButton
                className="block text-center px-4 py-2.5 rounded-xl bg-white text-sm font-semibold transition-all hover:bg-green-50"
                style={{ color: "#1a5227" }}
              >
                Start chatting →
              </OpenEllaButton>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Related articles</p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-1 h-full rounded-full flex-shrink-0 mt-1" style={{ background: accentColor, minHeight: "2.5rem" }} />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">
                          {r.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(r.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Browse products */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <p className="text-sm font-semibold text-gray-800 mb-1">Shop the range</p>
              <p className="text-xs text-gray-500 mb-4">Find the products mentioned in this article.</p>
              <Link
                href="/products"
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#2d7a3a" }}
              >
                Browse Products
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ── More articles ─────────────────────────────────────── */}
      {more.length > 0 && (
        <section className="border-t border-gray-100 py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-bold text-gray-900">More from the Blog</h2>
              <Link href="/blog" className="text-sm font-semibold hover:underline" style={{ color: "#2d7a3a" }}>
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {more.map((p) => {
                const color = categoryColor[p.category] ?? "#2d7a3a";
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-green-200 transition-all bg-white"
                  >
                    <div className="h-1.5 w-full" style={{ background: color }} />
                    {p.image && (
                      <div className="relative h-40">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="p-5">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: color + "18", color }}
                      >
                        {p.category}
                      </span>
                      <h3 className="mt-2 text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-400">{formatDate(p.date)}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
