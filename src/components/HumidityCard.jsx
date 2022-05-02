import { Paper, Typography } from '@mui/material'


const HumidityCard = (props) => {
  const {unix_date, humidity, icon, index} = props;
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const getFullDate = (dt) => {
    const date = new Date(dt * 1000)
    return date
  }

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
            {getFullDate(unix_date).toLocaleDateString('en-GB', options)}
        </Typography>
        <img 
          src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`}
          alt="img"
        />
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