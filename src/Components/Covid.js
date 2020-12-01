import Axios from 'axios'
import React, {useState, useEffect} from 'react'
export default function Covid() {
    const [covid, setCovid] = useState()
    useEffect(()=>{
        Axios.get('https://api.covid19api.com/').then(res=>{
            console.log(res)
        })
    }

    ,[])
    return (
        <div>
            
        </div>
    )
}
