import 'chart.js/auto';
import { Paper } from '@mui/material'
import { Line } from 'react-chartjs-2'



const CardItem2 = () => {
  return (
    <Paper elevation={0} sx={{
        p:1,
        height: 250
        }}>
        <Line
            data={{
                labels: ['red', 'blue', 'yellow', 'green', 'black', 'purple'],
                datasets: [
                    {
                        label: 'temperature',
                        data: [65, 59, 80, 81, 56, 75],
                        fill: 'stack',
                        backgroundColor: '#eef4fe',
                        borderColor: '#5596f6',
                        borderWidth: 2,
                        tension: 0.3,
                    }
                ]
            }}
            // height={100}
            // width={400}
            options={{
                maintainAspectRatio: false,
                scales: {
                    x:{
                        grid: {
                            display: false,
                            borderWidth: 0,
                        },
                        ticks: {
                            display: false,
                        },
                        
                    },
                    y:{
                        grid: {
                            display: false,
                            borderWidth: 0,
                        },
                        ticks: {
                            display: false,
                        },
                        
                    },  
                },
                elements: {
                    point: {
                        radius: 1,
                        hoverRadius: 10,
                        borderColor: '#fff',
                        backgroundColor: '#5596f6',
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                }     
            }}
        />
    </Paper>
  )
}

export default CardItem2