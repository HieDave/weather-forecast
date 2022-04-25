import { Box, Grid } from '@mui/material'
import React from 'react'
import CardItem1 from './CardItem1'
import CardItem2 from './CardItem2'

const CardList = ({ currentWeather }) => {
  return (
    <Box sx={{
        borderRadius: 2,
        // backgroundColor:"primary.light",
    }}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CardItem1 currentWeather={currentWeather}/>
            </Grid>
            <Grid item xs={9}>
                <CardItem2 />
            </Grid>
        </Grid>
    </Box>
  )
}

export default CardList