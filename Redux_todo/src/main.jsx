import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './context/authcontext'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider as Reduxprovider } from 'react-redux';
import { Store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reduxprovider store={Store}>

    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Reduxprovider>
 
    
    
  </React.StrictMode>
)
