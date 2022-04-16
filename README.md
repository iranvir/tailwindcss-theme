# How to use this theme?
Since TailWind 3.0 has its own watch mode, and so does Hugo I wasn't able to
link them together. This means you won't be able to see changes made to the CSS
live as they happen.

For production use, however, the procedure is simple:
1. Run `npm install` to install dev dependencies listed in `package.json`
2. Run `npx tailwindcss -i ./static/input.css -o ./static/main.css`
3. Run `hugo` to build the website, or `hugo server` to run a live server on
localhost:1313

# How the theme works?
* The theme has html templates used by hugo in the `layouts` directory and the
`content` directory has the markdown formatted content (like pages, blog posts,
etc).
* These two directories have all tailwind styles in them
* tailwind.config.js is configured to scan the above two directories and generate css only being used by them.
* `npx tailwindcss -i ./static/input.css -o ./static/main.css` command takes all the base, utilities and other components of tailwind from `static/input.css`, scans all the `content` and `layouts` directory for styles that are actually being used and spits out `static/main.css` which is tiny, minimal and production ready
* `static/main.css` is the final CSS that is included in `layouts/partial/head.html` which adds it to the HTML tag of all the generated pages 
