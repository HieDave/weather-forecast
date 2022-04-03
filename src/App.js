import { Box, CssBaseline } from "@mui/material";
import Cards from "./components/Cards";


function App() {
  return (
    <Box sx={{
      p: 4,
      backgroundColor: "#f3f6fa",
    }}>
      <CssBaseline />
      <Cards />
    </Box>
  );
}

export default App;
