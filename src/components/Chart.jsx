import 'chart.js/auto';
import { Line } from 'react-chartjs-2'


const Chart = ({forecastWeather}) => {
    
    return (
        <>
            <Line
                data={{
                    labels: ['red', 'blue', 'yellow', 'green', 'black', 'purple'],
                    datasets: [
                        {
                            label: 'temperature',
                            data: forecastWeather.map((day)=>{
                                return day.temp.day
                            }),
                            fill: 'stack',
                            backgroundColor: '#eef4fe',
                            borderColor: '#5596f6',
                            borderWidth: 2,
                            tension: 0.3,
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                                borderWidth: 0,
                            },
                            ticks: {
                                display: false,
                            },

                        },
                        y: {
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
        </>
    )
}

export default Chart