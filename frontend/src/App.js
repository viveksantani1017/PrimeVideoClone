import {Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import AdminPages from "./pages/AdminPages"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Admin from "./admin/admin";
function App() {
  const navigate = useNavigate()
  const { user,isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if(!user){
      navigate('/login')
    }
    
  }, [user, navigate]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1a242e",
      },
      secondary: {
        main: "#252e39",
      },
    },
  });
  if(isLoading)
  {
    return(
      <h1>Loading</h1>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
              <Header />
              <Pages />
              <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
