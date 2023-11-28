import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/HomePage';
import TextEditor from './components/TextEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:fileId" element={<TextEditor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
