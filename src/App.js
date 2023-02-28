
import React,{ useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import Player from './Layouts/Player/Player';
import setToken from './Services/Actions/SetToken';
import setUser from './Services/Actions/SetUser';
import setPlayLists from './Services/Actions/SetPlayLists';

const  spotify=new SpotifyWebApi();
function App() {
  const [{token},dispatch]=useDataLayerValue();
  useEffect(()=>{
    const access_token=localStorage.getItem('access_token');
    if(access_token){
      initSpotify(JSON.parse(access_token))
    }else{
      const hash =getTokenFromUrl();
      window.location.hash=""
      const _token=hash.access_token||token;
     if(_token){
      localStorage.setItem('access_token',JSON.stringify(_token))
      initSpotify(_token)
     }
    }
   
   
    
  },[]);

const  initSpotify=(_token)=>{
  spotify.setAccessToken(_token);
  dispatch(setToken('SET_TOKEN',_token))
  spotify.getMe().then(user=>{
    dispatch(setUser('SET_USER',user))
  })

  spotify.getUserPlaylists().then((playlist)=>{
    dispatch(setPlayLists('SET_PLAYLISTS',playlist))  
  })
}

  return (
    <div className="App">
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
    </div>
  );
}

export default App;
