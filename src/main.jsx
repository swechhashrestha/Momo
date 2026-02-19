import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartProvider.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-pie1as6e63eeb3wz.us.auth0.com"
      clientId="pHFBWJSciqGSwpbP4OzYQPQjeIw3xhhq"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
  <CartProvider>
  <BrowserRouter>
      <App />
      </BrowserRouter>
      </CartProvider>
      </Auth0Provider>
)
