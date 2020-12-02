import Axios from 'axios'
import { Doughnut } from 'react-chartjs-2';
import React, {useState, useEffect} from 'react'
import MediaCard from './MediaCard'
import { Grid } from '@material-ui/core';
export default function Covid() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeaths] = useState(0)
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
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <MediaCard text='confirmed cases' value={confirmed} color='pink'/>
            <MediaCard text='recovered cases' value={recovered} color='beige'/>
            <MediaCard text='deaths cases' value={deaths} color='blue'/>
            </Grid>
            <Grid item xs={12} md={6}>
            <Doughnut data={{
            labels: ['confirmed', 'Recovered', 'Deaths'],
            datasets: [
              { backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5'],
                data: [confirmed, recovered, deaths],
              },
            ],
        }
        } />
            </Grid>
        </Grid>
    </>
    )
}
