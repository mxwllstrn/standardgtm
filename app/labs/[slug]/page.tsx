// app/labs/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getLabBySlug, getAllLabSlugs } from '@/lib/content-parser';
// REMOVE: import dynamic from 'next/dynamic'; // Ensure this line is still removed if you fixed it previously

// Placeholder for a simple Markdown renderer
const SimpleMarkdownRenderer = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

// Define the interface for the props this page component expects
interface LabDetailPageProps {
  params: {
    slug: string;
  };
}

// Generates static params for SSG (pre-renders pages at build time)
export async function generateStaticParams() {
  const slugs = await getAllLabSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Use the defined interface for the component's props
export default async function LabDetailPage({
  params,
}: LabDetailPageProps) { // <--- UPDATED THIS LINE
  const lab = await getLabBySlug(params.slug);

  if (!lab) {
    notFound();
  }

  const { frontmatter, content } = lab;

  const InteractiveLabComponent = ({ slug }: { slug: string }) => {
    if (slug === 'linkedin-insights-analyzer') {
      return (
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Interactive Demo Placeholder</h3>
          <p className="text-blue-700 mb-4">
            This is where the live &quot;LinkedIn Insights Analyzer&quot; will go.
            You&apos;ll build this interactive component in `components/labs/linkedin-insights-analyzer.tsx` (or similar)
            and dynamically import it here.
          </p>
          <p className="text-blue-700">Currently displaying static content.</p>
        </div>
      );
    }
    return (
      <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Demo Placeholder</h3>
        <p className="text-gray-700">No specific interactive component for this lab yet.</p>
      </div>
    );
  };

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

        {frontmatter.techStack && frontmatter.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-gray-700 font-semibold">Tech Stack:</span>
            {frontmatter.techStack.map((tech: string) => (
              <span key={tech} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="prose lg:prose-xl text-gray-800 leading-relaxed max-w-none mb-10">
          <SimpleMarkdownRenderer content={content} />
        </div>

        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            The Live Lab: {frontmatter.title}
          </h2>
          <InteractiveLabComponent slug={frontmatter.slug} />
        </section>
      </div>
    </div>
  );
}