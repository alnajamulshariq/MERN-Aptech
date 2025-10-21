import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-rmfgn0wj0mm1nd7e.us.auth0.com"
    // clientId="XZVOhLPeWLrhlduFaOpBjEPfSTNJHKOu"
    clientId="i1bZ2wwJtYalwLytyrf298vveNTRCbd0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);