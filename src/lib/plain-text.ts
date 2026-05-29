/** Strips `{highlight}` markers for metadata and plain-text use. */
export function plainTextFromRichText(text: string): string {
  return text.replace(/\{([^}]+)\}/g, "$1");
}
