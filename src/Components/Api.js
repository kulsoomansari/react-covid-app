import Axios from 'axios'
import React, {useState, useEffect} from 'react'
export default function Api() {
    const [post, setPost] = useState({})
    useEffect(()=>{
        Axios.get('https://api.covid19api.com/')
        .then(res=>{
            console.log(res.data)
            setPost(res.data.liveCountryRoute)
        })
    }
        ,[])
    console.log(post)
    return (
        <div>
      <h1>{post.Description}</h1>
        </div>
    )
}
