import Table from 'react-bootstrap/Table';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import React from 'react'
import './TableList.css'
import CpnTimeAgo from '../CpnTimeAgo/CpnTimeAgo';

function TableList({tracks}) {
    console.log(tracks)
const convertTimePlay=(ms)=>{
   let min = Math.floor((ms/1000/60) << 0);
    let  sec = Math.floor((ms/1000) % 60);
    return `${min}:${sec<10?'0'+sec:sec}`;
}
    return (
        <Table className='text-white' variant="">
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Ngày thêm</th>
            <th>Album</th>
            <th><AccessTimeIcon/></th>
          </tr>
        </thead>
        <tbody>
            {tracks.length>0&&tracks.map((item,index)=>{
                return(
                    <tr>
                    <td><span className='standalone-ellipsis-one-line'>{index+1}</span></td>
                    <td><span className='standalone-ellipsis-one-line'>{item?.track?.name}</span></td>
                    <td><span className='standalone-ellipsis-one-line'></span><CpnTimeAgo date={item?.added_at}/></td>
                    <td><span className='standalone-ellipsis-one-line'>{item?.track?.album?.name}</span></td>
                    <td><span className='standalone-ellipsis-one-line'>{convertTimePlay(item?.track?.duration_ms)}</span></td>
                  </tr>
                )
            })}
         
          
        </tbody>
        </Table>
    )
}

export default React.memo(TableList)


