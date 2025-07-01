// app/labs/page.tsx
import Link from 'next/link';
import { getAllLabsFrontmatter } from '@/lib/content-parser';

export const metadata = {
  title: 'GTM Labs - StandardGTM',
  description: 'Explore our GTM Labs: live, interactive demonstrations of automated workflows and AI-powered tools for B2B SaaS.',
};

export default async function LabsPage() {
  const labs = await getAllLabsFrontmatter();

  if (!labs || labs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our GTM Labs</h1>
        <p className="text-lg text-gray-700">No labs found yet. Our engineers are busy building! Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        GTM Labs: Building the Future of Automated GTM
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        Dive into our live experiments and interactive tools. This is where we showcase cutting-edge Go-to-Market automation and AI in action.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labs.map((lab) => (
          <div key={lab.slug} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {lab.frontmatter.image && (
              <img
                src={lab.frontmatter.image}
                alt={lab.frontmatter.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                <Link href={`/labs/${lab.slug}`} className="hover:text-blue-600 transition-colors">
                  {lab.frontmatter.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4 text-md">
                {lab.frontmatter.shortDescription}
              </p>
              {lab.frontmatter.techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.frontmatter.techStack.map((tech: string) => (
                    <span key={tech} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <Link href={`/labs/${lab.slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                View Lab &rarr;
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}