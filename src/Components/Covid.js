import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import MediaCard from './MediaCard'
export default function Covid() {
    const [confirmed, setConfirmed] = useState()
    const [recovered, setRecovered] = useState()
    const [deaths, setDeaths] = useState()
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then(res=>{
            console.log(res.data)
            setConfirmed(res.data.confirmed.value)
            setRecovered(res.data.recovered.value)
            setDeaths(res.data.deaths.value)
        })
    }

    ,[])
    return (
        <div>
            <MediaCard text='confirmed cases' value={confirmed} color='pink'/>
            <MediaCard text='recovered cases' value={recovered} color='beige'/>
            <MediaCard text='deaths cases' value={deaths} color='blue'/>
        </div>
    )
}
