## Script tag snippet experiment

Goal: a minimal `<script>` code snippet to load a widget and offers:

- Asynchronous loading
- Initialization options
   - Simple options (primitives)
   - Complex options (CSS or JSON primitive property bag)
- Content Security Policy (CSP)

```html
<script async data-var="some-var" src="code-snippet.min.js"></script>
```
