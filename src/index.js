import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalContextProvider } from './context/AuthContext';

ReactDOM.render(

  <React.StrictMode>

    <GlobalContextProvider >
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);


reportWebVitals();




