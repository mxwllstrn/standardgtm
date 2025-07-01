// lib/content-parser.ts

// ... (existing imports and content up to this point) ...

// Define a more specific interface for Frontmatter
export interface Frontmatter {
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
export interface ContentData {
  frontmatter: Frontmatter; // Use the more specific Frontmatter interface
  content: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

// ... (rest of the file remains the same) ...

// For your data files (tags, tools)
export async function getYamlData(fileName: string): Promise<Record<string, any>> { // Keep any here for generic YAML
  const filePath = path.join(contentDirectory, 'data', `${fileName}.yml`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data;
  } catch (error) {
    console.error(`Error loading YAML data from ${fileName}.yml:`, error);
    return {};
  }
}