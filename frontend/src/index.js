import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root element
const rootElement = document.getElementById('root');

// Use React 18's new API for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
