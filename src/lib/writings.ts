import { readdirSync, existsSync } from "fs";
import path from "path";

const WRITINGS_DIR = path.join(process.cwd(), "src", "content", "writings");

/** Entry point for each post; the folder name is the slug. */
const POST_ENTRY = "index.mdx";

/**
 * Writings are organized as one folder per post:
 *   writings/
 *     weight-tying/
 *       index.mdx      ← post content
 *       *.png, *.jpg   ← images (use relative paths in MDX, e.g. ![](./figure.png) with import)
 */
export function getWritingSlugs(): string[] {
  const entries = readdirSync(WRITINGS_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("."))
    .filter((e) => existsSync(path.join(WRITINGS_DIR, e.name, POST_ENTRY)))
    .map((e) => e.name)
    .sort();
  return slugs;
}

export type WritingMeta = {
  title: string;
  description?: string;
  date?: string;
};

export async function getAllWritingsMeta(): Promise<{ slug: string; metadata: WritingMeta }[]> {
  const slugs = getWritingSlugs();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/writings/${slug}/${POST_ENTRY}`);
      const metadata = (mod as { metadata?: WritingMeta }).metadata ?? { title: slug };
      return { slug, metadata };
    })
  );
  return entries.sort((a, b) => {
    const dA = a.metadata.date ?? "";
    const dB = b.metadata.date ?? "";
    return dB.localeCompare(dA);
  });
}
