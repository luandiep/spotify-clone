import React from 'react';
import Body from './Body';
import "./Player.css"
import Sliderbar from './Sliderbar';
export default function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player__body'>
         {/*Sliderbar */}
         <Sliderbar/>
         {/*Body */}
         <Body/>
      </div>
   
    {/*Footer */}
    </div>
    
  );
}
