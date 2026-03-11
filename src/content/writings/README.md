# Writings content

Each post lives in its own folder. The folder name is the URL slug (e.g. `weight-tying` → `/writings/weight-tying`).

## Structure

```
writings/
  <slug>/
    index.mdx     ← Post content and metadata
    *.png, *.jpg  ← Images for this post only
```

## Adding a new post

1. Create a folder: `writings/my-post/`
2. Add `index.mdx` with frontmatter-style metadata:

```mdx
export const metadata = {
  title: "My Post Title",
  description: "Short description for listings and SEO.",
  date: "2025-02-10",
};

# My Post Title

Content here…
```

3. Put any images in the same folder. In the MDX, **import** them so Next.js bundles them, then use JSX:

```mdx
import diagram from './diagram.png';

…

<img src={diagram.src} alt="Diagram" />
```

Images get the `writing-image` class automatically from the MDX component.
