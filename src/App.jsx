import React from "react";

import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";




export const App = () =>{

  return(
    <>
       <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      

    </>
    
  )
}