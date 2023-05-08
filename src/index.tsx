import { createRoot } from 'react-dom/client';

import App from './ui/App';

console.log(document.currentScript?.getAttribute('data-site'));

const rootElement = document.getElementById('root');

rootElement && createRoot(rootElement).render(<App site={document.currentScript?.getAttribute('data-site') || undefined} />);
