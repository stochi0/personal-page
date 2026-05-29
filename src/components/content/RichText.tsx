import { renderBold, renderHighlights } from "@/lib/text-utils";

type RichTextProps = {
  text: string;
  variant?: "highlights" | "bold";
};

export function RichText({ text, variant = "highlights" }: RichTextProps) {
  return <>{variant === "bold" ? renderBold(text) : renderHighlights(text)}</>;
}
