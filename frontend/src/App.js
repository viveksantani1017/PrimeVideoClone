import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import AdminPages from "./pages/AdminPages"
function App() {
  const admin = true;
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {admin ? (
            <>
              <AdminPages/>
            </>
          ) : (
            <>
              <Header />
              <Pages />
              <Footer />
            </>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
