---
# -----------------------------------------------------------------------
# 📝 Frontmatter Configuration (Metadata)
# -----------------------------------------------------------------------

title: 'How to Write a Post: Mastering Content & Images for the AI Era'
publishDate: 2026-01-02
author: Recomby.ai Team

# 👇 [IMPORTANT] Cover Image Settings
# Method A (Recommended): Local Image.
# Place images in 'src/assets/images/'. Astro will automatically optimize & compress them.
image: '~/assets/images/default.png'

# Method B (Optional): Remote URL.
# Use a direct link. Convenient, but no automatic optimization.
# image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'

excerpt: 'A complete template and guide on how to structure your content for GEO (Generative Engine Optimization) and handle images correctly in this blog template.'

tags:
  - Tutorial
  - Astro
  - Writing Guide
  - GEO

metadata:
  canonical: https://recomby.ai/blog/markdown-style-guide
---

Welcome to your new blog!

This article serves as both a **demo** and a **user manual**. You can duplicate this file to start writing your next post.

As stated in the Recomby.ai philosophy: **"In the age of AI search, we help the 'best match' defeat the 'loudest voice'."**

Therefore, our writing is not just for humans, but also for AI agents. Structured, clear content is more likely to be cited and recommended by AI models.

## I. Image Handling Guide (Crucial)

In this template, images are handled in two places: the **Cover Image** and **Body Images**.

### 1. The Cover Image

The cover image is defined in the `Frontmatter` at the top of this file. We support two methods:

#### ✅ Method A: Local Images (Recommended)

1.  Save your image file in the project folder: `src/assets/images/`.
2.  Reference it using the `~/` alias.
    - Example: `image: '~/assets/images/my-photo.jpg'`
3.  **Why?** Astro automatically compresses, resizes, and converts formats (like WebP) for superior performance.

#### ⚡ Method B: Remote URLs

1.  Just paste the full image link.
    - Example: `image: 'https://images.unsplash.com/photo-123...'`
2.  **Pros:** No need to upload files locally.
3.  **Cons:** Loading speed depends on the external server; no automatic optimization.

---

### 2. Images Inside the Body

Here is how to insert images directly into your text.

#### Example 1: Remote Image (Copy & Paste)

**Code:**

    ![Remote Image](https://images.unsplash.com/photo-1555066931-4365d14bab8c)

**Result (What you see):**

![Remote Image](https://images.unsplash.com/photo-1555066931-4365d14bab8c)

<br>

#### Example 2: Local Image (Optimized)

**Code:**

    ![My Local Image](~/assets/images/default.png)

**Result (What you see):**
_(This will render your local 'default.png' file)_

![My Local Image](~/assets/images/default.png)

## II. Writing for AI (GEO Strategy)

To ensure your content is selected as an answer by AI engines (like ChatGPT, Perplexity), follow these rules:

1.  **Clear Structure:** Use clear H2 (`##`) and H3 (`###`) headings.
2.  **Modularity:** Break down long paragraphs into bullet points (like this list).
3.  **Accuracy:** Carefully fill in the `tags` and `excerpt` in the file header.

> "We don't mine gold, we sell shovels. We build the authority that AI trusts." — Recomby.ai

## III. Markdown Syntax Quick Reference

### Typography

You can make text **bold**, _italic_, or use `code style` for emphasis.

### Blockquotes

> This is a blockquote, perfect for highlighting core ideas or quotes.

### Lists

1.  First point
2.  Second point
    - Sub-point A
    - Sub-point B

## IV. Conclusion

Now you are ready.
Duplicate this file, rename it, and start creating high-quality content that is **"worthy of being recommended by AI"**!
