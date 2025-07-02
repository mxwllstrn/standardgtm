// app/services/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';

// Placeholder for a simple Markdown renderer
const SimpleMarkdownRenderer = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default async function ServicesPage() {
  let content = '';
  let data: Record<string, any> = {};

  try {
    const filePath = path.join(process.cwd(), 'content', 'services', 'offerings.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content: markdownContent } = matter(fileContent);
    content = markdownContent;
    data = frontmatter;
  } catch (error) {
    console.error("Error loading services page content:", error);
    notFound(); // Display 404 if content file is not found
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          {data.title || "Our Services"}
        </h1>
        {data.shortDescription && (
            <p className="text-xl text-gray-600 mb-8 text-center">
                {data.shortDescription}
            </p>
        )}
        <div className="prose lg:prose-xl text-gray-800 leading-relaxed">
          <SimpleMarkdownRenderer content={content} />
        </div>
        <div className="mt-10 text-center">

        </div>
      </div>
    </div>
  );
}