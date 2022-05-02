import { Box, Grid } from '@mui/material'
import React from 'react'
import HumidityCard from './HumidityCard'


const HumidityCardList = ({forecastWeather}) => {
  const items = []

  for (let index = 0;index < forecastWeather.length; index++){
    if (index === 4) break;
    items.push(
      <Grid item xs={3} key={index}>
        <HumidityCard 
          unix_date={forecastWeather[index].dt} 
          humidity={forecastWeather[index].humidity} 
          icon={forecastWeather[index].weather[0].icon}
          index={index}
        />
      </Grid>
    )
  }

  return (
    <Box>
        <Grid container spacing={2}>
            {items}
        </Grid>
    </Box>
  )
}

export default HumidityCardList