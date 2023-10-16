# Simple Themes

Drop in dark mode with 2 lines of code with `prefers-color-scheme` and no flash of unstyled content (FOUC)!

## Set up

CDN link to NPM package

```html
<script src="
https://cdn.jsdelivr.net/npm/simple-themes@0.0.1/src/theme-toggle.min.js
"></script>
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <script src="
https://cdn.jsdelivr.net/npm/simple-themes@0.0.1/src/theme-toggle.min.js
"></script>
  </head>
  <body>
    <button id="theme-btn">Toggle Theme</button>
  </body>
</html>
```

```css
/* styles.css */
:root,
html[data-theme='light'] {
  background-color: white;
  color: black;
}

html[data-theme='dark'] {
  background-color: black;
  color: white;
}
```

This project has so far only best tested in Astro and HTML apps.
