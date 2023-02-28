import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TableList from '../../components/Table/TableList';
import {useParams } from 'react-router-dom'
import './PlaylistId.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../DataLayer';
const  spotify=new SpotifyWebApi();
function PlaylistId() {
  let { id } = useParams();
  const [{token},dispatch]=useDataLayerValue();
  const [playlist,setPlaylist]=useState()
  useEffect(()=>{
    if(token){
      spotify.setAccessToken(token)
    } 
    spotify.getPlaylist(id).then((playlist)=>{
      setPlaylist(playlist);
    })
  },[id])
  console.log(playlist)
    return (
        <>
       <div className="body__info">
          <img src={playlist?.images?.[1]?.url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>{playlist?.name}</h2>
            <p>50 bài hát, khoảng 2 giờ 45 phút</p>
          </div>
        </div>
        <div className="body__playlist">
          <div className="action-bar-row">
              <span className='play-action-btn'><PlayArrowIcon fontSize='large'/></span>
              <span className='heart-action-btn'><FavoriteBorderIcon fontSize='large'/></span>
              <span className='menu-action-btn'><MoreHorizIcon fontSize='large'/></span>
          </div>
          <div className="playlist">
         <TableList tracks={playlist&&playlist.tracks&&playlist.tracks.items?playlist.tracks.items:[]}  />
          </div>
        </div>
        </>
    )
}

export default PlaylistId
