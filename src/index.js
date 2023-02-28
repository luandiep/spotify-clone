import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { DataLayer } from './DataLayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reducer, { initialState } from './Services/Reducers';
import { RouterProvider } from 'react-router-dom';
import Routers from './Routers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <DataLayer initialState={initialState} reducer={reducer}>
    <RouterProvider router={Routers}></RouterProvider>
    </DataLayer>
  
);

serviceWorkerRegistration.unregister();
