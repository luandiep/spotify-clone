import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './Header.css'
import { useDataLayerValue } from '../../DataLayer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
function Header({spotify}) {
    const [{user},dispatch]=useDataLayerValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <div className="top-bar-back-button">
                    <ChevronLeftIcon fontSize='large'/>
                </div>
                <div className="search-bar">
                    <SearchIcon/>
                    <input type="text" placeholder='Search for Artists, Song, Album' />   
                </div>
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt='' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
