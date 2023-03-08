import React, { useEffect } from 'react';
import './Body.css'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';
import setScrollPosition from '../../Services/Actions/setScrollPosition';
export default function Body({spotify}) {
  const [{scrollPosition}, dispatch] =useDataLayerValue();
  const handleScroll = () => {
      const position = document.getElementById('body').scrollTop;
      if(position){
         dispatch(setScrollPosition('SET_SCROLLPOSITION',position))
      }
  };
  useEffect(() => {
    let body=document.getElementById('body');
    body.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      body.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div id='body' className='body'>
      
        <Header spotify={spotify}/>
        <Outlet/>
    </div>
  );
}
