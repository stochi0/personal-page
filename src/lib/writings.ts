import { readdirSync } from "fs";
import path from "path";

const WRITINGS_DIR = path.join(process.cwd(), "src", "content", "writings");

export function getWritingSlugs(): string[] {
  const names = readdirSync(WRITINGS_DIR);
  return names.filter((n) => n.endsWith(".mdx")).map((n) => n.replace(/\.mdx$/, "")).sort();
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
      const mod = await import(`@/content/writings/${slug}.mdx`);
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
