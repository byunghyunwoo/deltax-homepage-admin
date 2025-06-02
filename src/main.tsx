import { createRoot } from 'react-dom/client';
import './css/global.css';
import './css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>,
);
