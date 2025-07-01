// app/about/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
// Import the Frontmatter interface from your content parser utility
import { Frontmatter } from '@/lib/content-parser'; // <--- ADD THIS LINE

// Placeholder for a simple Markdown renderer.
const SimpleMarkdownRenderer = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default async function AboutPage() {
  let content = '';
  // Use the imported Frontmatter interface for the data variable
  let data: Frontmatter = {}; // <--- CHANGE THIS LINE: from Record<string, any> to Frontmatter

  try {
    const filePath = path.join(process.cwd(), 'content', 'about', 'maxwell-stern.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content: markdownContent } = matter(fileContent);
    content = markdownContent;
    data = frontmatter as Frontmatter; // <--- ADD 'as Frontmatter' type assertion here
  } catch (error) {
    console.error("Error loading about page content:", error);
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          {data.title || "About Us"}
        </h1>
        {data.image && (
          <img
            src={data.image}
            alt={data.title || "About StandardGTM"}
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-md"
          />
        )}
        <div className="prose lg:prose-xl text-gray-800 leading-relaxed">
          <SimpleMarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
}