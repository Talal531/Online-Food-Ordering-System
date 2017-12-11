import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicExample from './playground/react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
