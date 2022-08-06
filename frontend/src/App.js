import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import {ThemeProvider,createTheme} from '@mui/material'
import Pages from './pages/Pages';
import Footer from './components/Footer';
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#1a242e',
    },
    secondary:{
      main:'#252e39',
    }
    },
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Pages/>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
    );
}

export default App;
