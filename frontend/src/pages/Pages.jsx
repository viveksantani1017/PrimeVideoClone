import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'
import MovieFilter from './MovieFilter'
import Login from "../components/login"
import Register from "../components/register"
import Admin from "../admin/admin"
import ProductUpdate from "../admin/productUpdate";
import Search from './Search'

function Pages() {
  return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='/category' element={<MovieFilter/>}></Route>
          <Route path='/movies' element={<MovieFilter/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/shows' element={<MovieFilter/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/admin" element={<Admin />} />
                    <Route
                      path="/admin/productUpdate"
                      element={<ProductUpdate />}
                    />
        </Routes>
        </>
    )
}

export default Pages