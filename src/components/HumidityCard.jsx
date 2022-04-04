import { Paper, Typography } from '@mui/material'
import React from 'react'

const HumidityCard = (props) => {
  const {date, humidity, index} = props;

  console.log(index)
  return (
    <Paper elevation={0} sx={{
        p: 3,
        mt: 2,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: index === 0 ? "#5596f6" : "white",
        color: index === 0 ? "white" : "text.secondary"
    }}>
        <Typography variant='h6'>
            {date}
        </Typography>
        <Typography gutterBottom>
            Humidity
        </Typography>
        <Typography fontSize={30}>
            {`${humidity}%`}
        </Typography>
    </Paper>
  )
}

export default HumidityCard