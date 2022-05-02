import { Box, Grid } from '@mui/material'
import React from 'react'
import CardItem1 from './CardItem1'
import CardItem2 from './CardItem2'

const CardList = ({ currentWeather, forecastWeather, timezone }) => {
  return (
    <Box sx={{
        borderRadius: 2,
        // backgroundColor:"primary.light",
    }}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CardItem1 currentWeather={currentWeather} timezone={timezone} />
            </Grid>
            <Grid item xs={9}>
                <CardItem2 forecastWeather={forecastWeather} />
            </Grid>
        </Grid>
    </Box>
  )
}

export default CardList