import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
// If you are using React 17 or below, use `import ReactDOM from 'react-dom';`
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Use ReactDOM.createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
