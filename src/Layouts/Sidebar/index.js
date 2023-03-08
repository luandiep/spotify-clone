import React from 'react';
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './Components/SidebarOption';
import { Link } from 'react-router-dom';
 function Sliderbar({playlists}) {
  return (
   
    <div className='sliderbar'>
        <img
        className='sidebar__logo'
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        >
        </img>
        <SidebarOption title='Home' Icon={HomeIcon}/>
        <SidebarOption title='Search' Icon={SearchIcon}/>
        <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr/>
        { console.log(playlists)}
        {playlists?playlists?.items?.map((item)=>{
           return( 
            <Link to={'playlist/'+item?.id} >
              
            <SidebarOption to='a' params='ddd'   key={item.id} title={item.name} />
            </Link>
           )
        }):''}
      
      

    </div>
  );
}
export default React.memo(Sliderbar)