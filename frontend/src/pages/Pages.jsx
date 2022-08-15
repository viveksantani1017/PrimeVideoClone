import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'


function Pages() {
  return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='/category' element={<MovieFilter/>}></Route>
          <Route path='/movies' element={<MovieFilter/>}></Route>
          <Route path='/shows' element={<MovieFilter/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
        </>
    )
}

export default Pages