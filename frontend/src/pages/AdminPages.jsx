import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from "../components/login"
import Register from "../components/register"
import Admin from "../admin/admin"
import ProductUpdate from "../admin/productUpdate";

function Pages() {
  return (
        <>
        <Routes>
          <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/" element={<Admin />} />
                    <Route
                      path="/admin/productUpdate"
                      element={<ProductUpdate />}
                    />
        </Routes>
        </>
    )
}

export default Pages