import { createRoot } from 'react-dom/client';

import App from './ui/App';

const { currentScript } = document;

if (currentScript) {
  const rootElement = document.getElementById('root');
  const style = getComputedStyle(currentScript);

  rootElement &&
    createRoot(rootElement).render(
      <App
        fontSize={style.getPropertyValue('--var-font-size')}
        site={currentScript.getAttribute('data-site') || undefined}
      />
    );
}
