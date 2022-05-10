import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider as Reduxprovider } from 'react-redux';
import { store } from './store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reduxprovider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </Reduxprovider>
  </React.StrictMode>
)
