import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { DataLayer } from './DataLayer';
import reducer,{ initialState } from './reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />
    </DataLayer>
  
);

serviceWorkerRegistration.unregister();
