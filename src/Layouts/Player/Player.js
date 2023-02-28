import React from 'react';
import Body from '../Body';

import "./Player.css"
import Sliderbar from '../Sidebar';
import Footer from '../Footer';

export default function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player__body'>
         <Sliderbar/>
          <Body/>
      </div>
         <Footer/>
    </div>
    
  );
}
