import type { Metadata } from "next";
import Link from "next/link";
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

/** Convert plain-text content with **bold** and • bullets to JSX */
function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);

  return paragraphs.map((para, i) => {
    // Heading — lines starting with **text** followed only by more **
    if (/^\*\*[^*]+\*\*$/.test(para.trim())) {
      const text = para.trim().replace(/^\*\*|\*\*$/g, "");
      return (
        <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {text}
        </h2>
      );
    }

    // Bullet list — every line starts with •
    if (para.trim().split("\n").every((l) => l.trim().startsWith("•"))) {
      const items = para.trim().split("\n").map((l) => l.trim().replace(/^•\s*/, ""));
      return (
        <ul key={i} className="list-none space-y-2 my-4 pl-0">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2d7a3a" }} />
              <span dangerouslySetInnerHTML={{ __html: inlineBold(item) }} />
            </li>
          ))}
        </ul>
      );
    }

    // Normal paragraph
    return (
      <p key={i} className="text-gray-600 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: inlineBold(para.trim()) }} />
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

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="py-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center gap-1 text-green-300 text-sm mb-6 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "#a5d6a7" }}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
              {post.author.charAt(0)}
            </span>
            <span className="text-white/80">{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Post image (if present) */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

            {/* Article body */}
            <article className="prose-container">
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-6 pb-6 border-b border-gray-100">
                {post.excerpt}
              </p>
              <div>{renderContent(post.content)}</div>

              {/* Author card */}
              <div className="mt-12 p-6 rounded-2xl border border-gray-100" style={{ background: "#f7f4ef" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: "#2d7a3a" }}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                    <p className="text-xs text-gray-500 mt-0.5">BioCare Fertilisers · Healthy Earth</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Ask Ella CTA */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-green-300 mb-2">Get personalised advice</p>
                <h3 className="text-lg font-bold mb-2">Ask Ella</h3>
                <p className="text-sm text-white/70 mb-4">Describe your plant problem and Ella will recommend the right product for your situation.</p>
                <Link href="/chat-assistant" className="block text-center px-4 py-2.5 rounded-xl bg-white text-sm font-semibold transition-all hover:bg-green-50" style={{ color: "#2d7a3a" }}>
                  Start chatting →
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Related articles</p>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group block p-4 rounded-xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-sm transition-all">
                        <span className="text-xs font-medium text-green-700">{r.category}</span>
                        <h4 className="text-sm font-semibold text-gray-800 mt-1 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{r.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(r.date)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse products */}
              <div className="p-5 rounded-2xl border border-gray-100 bg-white text-center">
                <p className="text-sm font-semibold text-gray-800 mb-1">Shop the range</p>
                <p className="text-xs text-gray-500 mb-4">Find the products mentioned in this article.</p>
                <Link href="/products" className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "#2d7a3a" }}>
                  Browse Products
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More articles */}
      {blogPosts.filter((p) => p.slug !== post.slug).length > 0 && (
        <section className="py-12" style={{ background: "#f7f4ef" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">More from the Blog</h2>
              <Link href="/blog" className="text-sm font-semibold hover:underline" style={{ color: "#2d7a3a" }}>View all →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-green-200">
                    <div className="h-40 relative" style={{ background: "linear-gradient(135deg, #1a5227, #4caf50)" }}>
                      {p.image && <Image src={p.image} alt={p.title} fill className="object-cover" />}
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ background: "#e8f5e9", color: "#2d7a3a" }}>{p.category}</span>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">{p.title}</h3>
                      <p className="text-xs text-gray-400 mt-2">{formatDate(p.date)}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
