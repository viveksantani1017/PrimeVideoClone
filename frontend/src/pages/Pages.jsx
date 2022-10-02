import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import MovieFilter from "./MovieFilter";
import Login from "../components/login";
import Register from "../components/register";
import ProductUpdate from "./productUpdate";
import Search from "./Search";
import Content from "./Content";
import AddOperation from "./addOperation";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<MovieFilter />}></Route>
        <Route path="/movies" element={<MovieFilter />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/shows" element={<MovieFilter />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Content />} />
        <Route path="/insert" element={<AddOperation />} />
        <Route path="admin/productUpdate" element={<ProductUpdate />} />
      </Routes>
    </>
  );
}

export default Pages;
