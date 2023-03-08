import React from 'react';
import Body from '../Body';

import "./Player.css"
import Sliderbar from '../Sidebar';
import Footer from '../Footer';
import { useDataLayerValue } from '../../DataLayer';

export default function Player({spotify}) {
  const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className='player'>
      <div className='player__body'>
         <Sliderbar playlists={playlists}/>
          <Body/>
      </div>
         <Footer/>
    </div>
    
  );
}
