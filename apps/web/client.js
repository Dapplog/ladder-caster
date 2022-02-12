import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import 'core/language/i18n';

const app = (
  <HashRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </HashRouter>
);

ReactDOM.render(app, document.getElementById('app'));
