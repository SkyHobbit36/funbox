import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import Cards from './components/Cards/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="greeting">Ты сегодня покормил кота?</h1>
      <Cards />
    </div>
  </React.StrictMode>
);
