import {Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminPages from './pages/AdminPages'
import Login from "./components/login";
function App() {
  const navigate = useNavigate()
  const { user,isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    
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
    {!user ? (
    <>
    {/* <Header/> */}
      <ThemeProvider theme={theme}>
              <Header />
    <Login/>
    <Footer/>
      </ThemeProvider>
    </>
    ):
      user['isAdmin'] ?(<>
      <ThemeProvider theme={theme}>
              <Header />
        <AdminPages/>
              <Footer />
      </ThemeProvider>
      </>):(<>
      <ThemeProvider theme={theme}>
              <Header />
              <Pages />
              <Footer />
      </ThemeProvider>
      </>)
      }
      
    </>
  );
}

export default App;
