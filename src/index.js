import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
