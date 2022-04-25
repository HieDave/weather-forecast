import { Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'


const CardItem1 = ({currentWeather}) => {

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
                <Typography color="text.secondary" mt={4}>
                    5:05 PM, Mon, Nov 23, 2020
                </Typography>
                <Stack direction="row" spacing={2} sx={{
                    mt: 4,
                }}>
                    <Typography variant="h2" fontWeight={700}>
                        {currentWeather === null ? "...loading" : currentWeather.main.temp}
                    </Typography>
                </Stack>
                <Typography variant="h4" fontWeight={700} mt={4}>
                    Cloudy
                </Typography>
                <Stack direction="row" spacing={4} sx={{
                    mt: 4,
                    textAlign: "center"
                }}>
                    <Box>
                        <Typography color="text.secondary">
                            Humidity
                        </Typography>
                        <Typography fontSize={18} mt={2}>
                            45%
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary">
                            Wind speed
                        </Typography>
                        <Typography fontSize={18} mt={2}>
                            19.2 km/j
                        </Typography>
                    </Box>
                </Stack>
        </Paper>
    )
}

export default CardItem1