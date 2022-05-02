import React from "react";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY


function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState(null)
    
    const fetchData = async (latitude, longitude) => {
      const res = await axios(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
      setCurrentWeather(res.data)
      setIsLoading(false)
    }

    
    useEffect(() => {
      const defaultLocation = {
        latitude: 51.50853, 
        longitude: -0.12574
      }
  
      const getData = async () => {
        if ("geolocation" in navigator){
          navigator.geolocation.getCurrentPosition((position) => {
            fetchData(position.coords.latitude, position.coords.longitude)            
          },
          (err) => {
            if (err.code === err.PERMISSION_DENIED){
              fetchData(defaultLocation.latitude, defaultLocation.longitude)
            }
          }
          )
        } else {
          fetchData(defaultLocation.latitude, defaultLocation.longitude)
        }
      }  
      getData()
    }, [])

  return (
    <Box sx={{
      p: 4,
      backgroundColor: "#f3f6fa",
    }}>
      <CssBaseline />
      {isLoading 
      ?
      <Box sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CircularProgress />
      </Box>
      :
      <CardList currentWeather={currentWeather} />
      }
    </Box>
  );
}

export default App;
