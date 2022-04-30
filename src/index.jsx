import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/Context';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
