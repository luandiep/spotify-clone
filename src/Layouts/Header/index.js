import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './Header.css'
import { useDataLayerValue } from '../../DataLayer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function Header({spotify}) {
    const [{user,scrollPosition,playlist},dispatch]=useDataLayerValue();
    const [isClickInfo,setClickInfo]=useState(false)
    const [ischeckSearch,setCheckSearch]=useState(false)
    {console.log(scrollPosition)}
    return (
        <div className={ scrollPosition>=400?'header active':'header'}>
            <div className='header__left'>
                <div className='top-bar-button'>
                <div className="top-bar-back-button">
                    <ChevronLeftIcon fontSize='medium'/>
                </div>
                <div className="top-bar-next-button">
                    <ChevronRightIcon fontSize='medium'/>
                </div>
                </div>
                {scrollPosition>=400&&(
                      <div className='topbar-content'>
                        <span className='play-action-btn'><PlayArrowIcon fontSize='large'/></span>
                        <h4>{playlist?.name}</h4>
                      </div>
                )
                }
                {
                    ischeckSearch&&(
                        <div className="search-bar" >
                        <SearchIcon/>
                        <input type="text" placeholder='Search for Artists, Song, Album' />   
                    </div>
                    )
                }
              
            </div>
            <div className='header__right'>
                <div className='box__user' onClick={()=>setClickInfo(!isClickInfo)}>
                    <Avatar style={{ height: '24px', width: '24px' }} src={user?.images[0]?.url} alt='' />
                    <h4 className='user__name'>{user?.display_name}</h4>
                    
                         {!isClickInfo ? (
                           <>
                            <ArrowDropDownIcon />
                            <div className='popup__name'>  
                            <span>{user?.display_name}</span>
                            </div>
                           </>
                          ) : (
                            <>
                            <ArrowDropUpIcon />
                            <ul className="list-option-user">
                            <li>Tài khoản</li>
                            <li>Hồ sơ</li>
                            <li>Cài đặt</li>
                            <li onClick={()=>{localStorage.removeItem('access_token')}} >Đăng xuất</li>      
                            </ul>   
                            </>  
                          )}
                         
                           
                         
                </div>
               
            </div>
        </div>
    )
}

export default Header
