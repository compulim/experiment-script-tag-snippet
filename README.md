## Script tag snippet experiment

Goal: a minimal `<script>` code snippet to load a widget and offers:

- Asynchronous and deferred loading
- Initialization options
   - Simple options
      - Via `data-*` attributes
   - Complex options
      - Via CSS variables
- Content Security Policy (CSP)

```html
<script async data-var="some-var" defer src="code-snippet.min.js"></script>
```
