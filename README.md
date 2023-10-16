# Simple Themes

Drop in dark mode with 2 lines of code with `prefers-color-scheme` and no flash of unstyled content (FOUC)!

> [!WARNING]
> This project is a WIP, and should not be used in a production environment yet.

## HTML Set up

CDN link to be used in your project

```html
<script src="
https://cdn.jsdelivr.net/npm/simple-themes@0.0.1/src/theme-toggle.min.js
"></script>
```

index.html
```html
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

styles.css
```css
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

## [Astro](https://github.com/withastro/astro) Set Up

src/pages/index.astro
```astro
---
import '../styles/globals.css'
---

<html lang="en">
  <head>
    <script is:inline src="
https://cdn.jsdelivr.net/npm/whitmore-toggle@1.0.34/src/theme-toggle.min.js
"></script>
  </head>
  <body>
    <button id="theme-btn">Click me</button>
  </body>
</html>
```

src/styles/globals.css
```css
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
