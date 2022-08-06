import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'


function Pages() {
  return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='/api/media/filter' element={<MovieFilter/>}></Route>
          <Route path='/api/media/movies' element={<MovieList/>}></Route>
          <Route path='/api/media/shows' element={<MovieList/>}></Route>
        </Routes>
        </>
    )
}

export default Pages