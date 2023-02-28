import React from 'react';
import './Body.css'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
export default function Body({spotify}) {
  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <Outlet/>
    </div>
  );
}
