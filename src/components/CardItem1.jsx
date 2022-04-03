import { Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CardItem1 = () => {
  return (
    <Paper elevation={0} sx={{ p: 4 }}>
        <TextField label="Your City" size="small"/>
        <Typography color="text.secondary" mt={2}>
            5:05 PM, Mon, Nov 23, 2020
        </Typography>
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <Typography>
                Cloud
            </Typography>
            <Typography variant="h1" fontWeight={700}>
                72
            </Typography>
        </Box>
        <Stack direction="row" spacing={4} sx={{mt:2}}>
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