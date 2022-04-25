import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import axios from 'axios'

const API_KEY = 'f5c90966fc4a353b2f07d395e175a8a7'


function App() {
    const [currentWeather, setCurrentWeather] = useState(null)

    const getCurrentWeather = (city) => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => {
          setCurrentWeather(res.data)
          }
        )
      .catch(err =>
          console.log(err)
      )
    }

    useEffect(() => { 
      getCurrentWeather('Bulawayo')
    }, [])
    useEffect(() => { 
      console.log(currentWeather)
    }, [currentWeather])

  return (
    <Box sx={{
      p: 4,
      backgroundColor: "#f3f6fa",
    }}>
      <CssBaseline />
      <CardList currentWeather={currentWeather} />
    </Box>
  );
}

export default App;
