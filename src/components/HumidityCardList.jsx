import { Box, Grid } from '@mui/material'
import React from 'react'
import HumidityCard from './HumidityCard'

const data = [
    {
        date: 'Today', 
        humidity: 30,
    },
    {
        date: 'Nov 24', 
        humidity: 36,
    },
    {
        date: 'Nov 25', 
        humidity: 20,
    },
    {
        date: 'Nov 26', 
        humidity: 15,
    },
]


const HumidityCardList = () => {
  return (
    <Box>
        <Grid container spacing={2}>
            {data.map((object, index)=>{
                return (
                <Grid item xs={3} key={index}>
                    <HumidityCard date={object.date} humidity={object.humidity} index={index}/>
                </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default HumidityCardList