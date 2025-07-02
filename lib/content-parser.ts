// lib/content-parser.ts
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter'; // npm install gray-matter

// Define a more specific interface for Frontmatter
export interface Frontmatter { // <--- ENSURE 'export' IS HERE
  [key: string]: any; // Allow any string key with any value for now for flexibility
  title?: string;
  slug?: string;
  shortDescription?: string;
  image?: string;
  tags?: string[];
  order?: number;
  // Add other common frontmatter fields here as you define them in MDX files
  // e.g., techStack?: string[];
  // e.g., problem?: string;
}

// Define a basic interface for your content data
export interface ContentData { // <--- ENSURE 'export' IS HERE
  frontmatter: Frontmatter;
  content: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

// Helper to get all slugs from a content type directory
export async function getAllSlugs(contentType: string): Promise<string[]> { // <--- ENSURE 'export' IS HERE
  const directoryPath = path.join(contentDirectory, contentType);
  try {
    const files = await fs.readdir(directoryPath);
    return files
      .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx?$/, ''));
  } catch (error) {
    console.warn(`Warning: Could not read content directory ${directoryPath}. It might be empty or missing. Error: ${error}`);
    return []; // Return empty array if directory doesn't exist or is unreadable
  }
}

// Helper to get content by slug for a specific content type
export async function getContentBySlug( // <--- ENSURE 'export' IS HERE
  contentType: string,
  slug: string
): Promise<ContentData | null> {
  const filePath = path.join(contentDirectory, contentType, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    return { frontmatter: frontmatter as Frontmatter, content, slug }; // Cast to Frontmatter
  } catch (error) {
    console.error(`Error loading content for ${contentType}/${slug}:`, error);
    return null;
  }
}

// Helper to get frontmatter for all items of a content type (for listing pages)
export async function getAllContentFrontmatter( // <--- ENSURE 'export' IS HERE
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
  // Optional: Sort by 'order' if defined in frontmatter, or alphabetically by title
  return allContent.sort((a, b) => {
    if (typeof a.frontmatter.order === 'number' && typeof b.frontmatter.order === 'number') {
      return a.frontmatter.order - b.frontmatter.order;
    }
    return (a.frontmatter.title || '').localeCompare(b.frontmatter.title || '');
  });
}

// --- Specific functions for your content types ---

export async function getStandardBySlug(slug: string): Promise<ContentData | null> { // <--- ENSURE 'export' IS HERE
  return getContentBySlug('standards', slug);
}

export async function getAllStandardSlugs(): Promise<string[]> { // <--- ENSURE 'export' IS HERE
  return getAllSlugs('standards');
}

export async function getAllStandardsFrontmatter(): Promise<ContentData[]> { // <--- ENSURE 'export' IS HERE
  return getAllContentFrontmatter('standards');
}

export async function getLabBySlug(slug: string): Promise<ContentData | null> { // <--- ENSURE 'export' IS HERE
  return getContentBySlug('labs', slug);
}

export async function getAllLabSlugs(): Promise<string[]> { // <--- ENSURE 'export' IS HERE
  return getAllSlugs('labs');
}

export async function getAllLabsFrontmatter(): Promise<ContentData[]> { // <--- ENSURE 'export' IS HERE
  return getAllContentFrontmatter('labs');
}

// For your data files (tags, tools)
export async function getYamlData(fileName: string): Promise<Record<string, any>> { // <--- ENSURE 'export' IS HERE
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