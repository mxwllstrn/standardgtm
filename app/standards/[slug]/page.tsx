// app/standards/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getStandardBySlug, getAllStandardSlugs } from '@/lib/content-parser';

// Placeholder for a simple Markdown renderer
const SimpleMarkdownRenderer = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

// Define the interface for the props this page component expects
interface StandardDetailPageProps {
  params: {
    slug: string;
  };
}

// Generates static params for SSG (pre-renders pages at build time)
export async function generateStaticParams() {
  const slugs = await getAllStandardSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Use the defined interface for the component's props
export default async function StandardDetailPage({
  params,
}: StandardDetailPageProps) { // <--- UPDATED THIS LINE
  const standard = await getStandardBySlug(params.slug);

  if (!standard) {
    notFound(); // Renders Next.js's 404 page if content is not found
  }

  const { frontmatter, content } = standard;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {frontmatter.shortDescription}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {frontmatter.tags.map((tag: string) => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose lg:prose-xl text-gray-800 leading-relaxed max-w-none">
          <SimpleMarkdownRenderer content={content} />
        </div>

        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Explore Related Solutions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Dive into specific, actionable workflows that implement this standard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Prospect & Account Enrichment</h3>
                <p className="text-gray-600 mb-3">Leverage Clay to automatically pull comprehensive prospect data directly into your CRM.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">View Workflow & Demo &rarr;</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Meeting Prep & Summaries</h3>
                <p className="text-gray-600 mb-3">Use Gong and OpenAI to generate instant pre-call briefs and post-call summaries.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">View Workflow & Demo &rarr;</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}