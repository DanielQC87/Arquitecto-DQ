import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Polyfill para evitar errores de process.env en navegador (CSP friendly)
(window as any).process = (window as any).process || { env: { NODE_ENV: 'production' } };

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);