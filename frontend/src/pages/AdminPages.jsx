import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "../components/login";
import Register from "../components/register";
import ProductUpdate from "./productUpdate";
import Content from "./Content";
import AddOperation from "./addOperation";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productUpdate" element={<ProductUpdate />} />
        <Route path="/insert" element={<AddOperation />} />
      </Routes>
    </>
  );
}

export default Pages;
