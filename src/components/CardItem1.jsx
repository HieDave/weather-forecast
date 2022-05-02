import { LocationOn } from '@mui/icons-material'
import { Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'


const CardItem1 = ({currentWeather, timezone}) => {

    return (
        <Paper elevation={0} sx={{
            p: 6,
            border: "1px solid #ccc",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
        }}>
                <TextField label="Your City" size="small" />
                <Box sx={{
                    mt: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <LocationOn sx={{color: "#960A0A"}} />
                    <Typography color="text.secondary" sx={{ml:1}}>
                        {`${timezone}` }
                    </Typography>
                </Box>
                <Box sx={{
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                }}>
                    <img 
                      src={`${process.env.REACT_APP_ICON_URL}/${currentWeather.weather[0].icon}@2x.png`}
                      alt="img"
                    />
                    <Typography variant="h3" display="inline" fontWeight={700} sx={{ml: 1}}>
                        {Math.round(currentWeather.temp)} 
                    </Typography>
                    <Typography 
                      display="inline-block" 
                      variant="primary" 
                      fontSize={20} 
                      fontWeight={800} 
                      sx={{mb: 3}} 
                    >
                        ℃
                    </Typography> 
                </Box>
                <Typography variant="h4" fontWeight={700} mt={1}>
                    {currentWeather.weather[0].description}
                </Typography>
                <Stack direction="row" spacing={4} sx={{
                    mt: 6,
                    textAlign: "center"
                }}>
                    <Box>
                        <Typography color="text.secondary">
                            Humidity
                        </Typography>
                        <Typography fontSize={18} mt={2}>
                            {currentWeather.humidity}%
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary">
                            Wind speed
                        </Typography>
                        <Typography fontSize={18} mt={2}>
                            {currentWeather.wind_speed} km/j
                        </Typography>
                    </Box>
                </Stack>
        </Paper>
    )
}

export default CardItem1