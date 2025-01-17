import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

if (module.hot) {
    module.hot.accept();
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />)