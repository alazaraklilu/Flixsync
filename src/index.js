import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.css';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('app'));