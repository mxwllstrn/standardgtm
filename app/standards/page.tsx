// app/standards/page.tsx
import Link from 'next/link';
import { getAllStandardsFrontmatter } from '@/lib/content-parser';

export const metadata = {
  title: 'Our GTM Engineering Standards - StandardGTM',
  description: 'Explore the engineered standards for predictable Go-to-Market growth in B2B SaaS.',
};

export default async function StandardsPage() {
  const standards = await getAllStandardsFrontmatter();

  if (!standards || standards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our GTM Engineering Standards</h1>
        <p className="text-lg text-gray-700">No standards found yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our GTM Engineering Standards
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        We transform Go-to-Market into a predictable science. Discover our core standards for building robust, financially sound GTM foundations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {standards.map((standard) => (
          <div key={standard.slug} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {standard.frontmatter.image && (
              <img
                src={standard.frontmatter.image}
                alt={standard.frontmatter.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                <Link href={`/standards/${standard.slug}`} className="hover:text-blue-600 transition-colors">
                  {standard.frontmatter.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4 text-md">
                {standard.frontmatter.shortDescription}
              </p>
              {standard.frontmatter.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {standard.frontmatter.tags.map((tag: string) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link href={`/standards/${standard.slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}