import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module';

const root = ReactDOM.createRoot(document.getElementById('root'));

const tagManagerArgs = { gtmId: 'GTM-WV45BL3'}
// console.log('tagManagerArgs  ---  ',tagManagerArgs)
TagManager.initialize(tagManagerArgs)

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
