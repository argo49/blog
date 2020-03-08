---
pageTitle: Adding draft support in 11ty
date: "2020-03-07"
---

Sometimes you want to write things down without publishing it for the world to see. The easiest way to add support for draft posts is to use the `.eleventyignore` file to ignore all of your draft posts in the build process. This file sits at the root of your project and uses the same ruleset as `.gitignore` files to decide which things should not be used to generate output for your website.

Here's how you might do it:

1. Crete a folder called `drafts` for your draft posts
2. Create a new file called `.eleventyignore` at the root of your project
3. Inside that file add the line `drafts/` to ignore all files in the drafts folder
4. Create as many draft posts as your want in that folder and they will never have html generated for them!

Just remember if you host your blog's git repository publicly, people will still be able to read the raw files.

For more information on ignoring things in 11ty, [check this out](https://www.11ty.dev/docs/ignores/).
