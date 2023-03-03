
import React,{useEffect} from 'react'
import TimeAgo from 'javascript-time-ago'
import vi from 'javascript-time-ago/locale/vi.json'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(vi)
TimeAgo.addLocale(en)
function CpnTimeAgo({timeStyle,date,locale}) {
    
    return (
        <ReactTimeAgo timeStyle={timeStyle?timeStyle:'twitter'} date={new Date(date)} locale={locale?locale:'vi'}/>
    )
}

export default CpnTimeAgo




