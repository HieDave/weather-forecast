import { Paper } from '@mui/material'
import HumidityCards from './HumidityCards';
import Chart from './Chart';



const CardItem2 = () => {
  return (
    <>
        <Paper elevation={0} sx={{
            p: 1,
            height: 250
        }}>
            <Chart />
        </Paper>
        <HumidityCards />
    </>
  )
}

export default CardItem2