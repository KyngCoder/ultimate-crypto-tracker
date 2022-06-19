import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchContext from './Helpers/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SearchContext>
    <App />
  </SearchContext>
  
  </React.StrictMode>
);


