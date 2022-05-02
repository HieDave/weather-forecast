import { Paper } from '@mui/material'
import HumidityCardList from './HumidityCardList';
import Chart from './Chart';



const CardItem2 = ({forecastWeather}) => {
  return (
    <>
        <Paper elevation={0} sx={{
            p: 1,
            height: 250
        }}>
            <Chart forecastWeather={forecastWeather} />
        </Paper>
        <HumidityCardList forecastWeather={forecastWeather}/>
    </>
  )
}

export default CardItem2