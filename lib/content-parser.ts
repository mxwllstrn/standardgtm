// lib/content-parser.ts
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter'; // npm install gray-matter

// Define a basic interface for your content data
export interface ContentData {
  frontmatter: Record<string, any>;
  content: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

// Helper to get all slugs from a content type directory
export async function getAllSlugs(contentType: string): Promise<string[]> {
  const directoryPath = path.join(contentDirectory, contentType);
  const files = await fs.readdir(directoryPath);
  return files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx?$/, ''));
}

// Helper to get content by slug for a specific content type
export async function getContentBySlug(
  contentType: string,
  slug: string
): Promise<ContentData | null> {
  const filePath = path.join(contentDirectory, contentType, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    return { frontmatter, content, slug };
  } catch (error) {
    console.error(`Error loading content for ${contentType}/${slug}:`, error);
    return null;
  }
}

// Helper to get frontmatter for all items of a content type (for listing pages)
export async function getAllContentFrontmatter(
  contentType: string
): Promise<ContentData[]> {
  const slugs = await getAllSlugs(contentType);
  const allContent: ContentData[] = [];
  for (const slug of slugs) {
    const content = await getContentBySlug(contentType, slug);
    if (content) {
      allContent.push(content);
    }
  }
  return allContent;
}

// --- Specific functions for your content types ---

export async function getStandardBySlug(slug: string): Promise<ContentData | null> {
  return getContentBySlug('standards', slug);
}

export async function getAllStandardSlugs(): Promise<string[]> {
  return getAllSlugs('standards');
}

export async function getAllStandardsFrontmatter(): Promise<ContentData[]> {
  return getAllContentFrontmatter('standards');
}

export async function getLabBySlug(slug: string): Promise<ContentData | null> {
  return getContentBySlug('labs', slug);
}

export async function getAllLabSlugs(): Promise<string[]> {
  return getAllSlugs('labs');
}

export async function getAllLabsFrontmatter(): Promise<ContentData[]> {
  return getAllContentFrontmatter('labs');
}

// For your data files (tags, tools)
export async function getYamlData(fileName: string): Promise<Record<string, any>> {
  const filePath = path.join(contentDirectory, 'data', `${fileName}.yml`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    // Using gray-matter to parse YAML directly
    const { data } = matter(fileContent);
    return data;
  } catch (error) {
    console.error(`Error loading YAML data from ${fileName}.yml:`, error);
    return {};
  }
}