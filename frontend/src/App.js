import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import MovieList from './MovieList';
function App() {
  return (
    <>
      <BrowserRouter>
      <Link to={'/api/media/filter'} state={{'lang':'English','genre':''}}>English</Link>
      <Link to={'/api/media/filter'} state={{'lang':'','genre':'Action'}}>Action</Link>
        <Routes>
          <Route path='/api/media/filter' element={<MovieList/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
    );
}

export default App;
