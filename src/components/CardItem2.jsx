import { Paper } from '@mui/material'
import HumidityCardList from './HumidityCardList';
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
        <HumidityCardList />
    </>
  )
}

export default CardItem2