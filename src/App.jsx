import React from "react";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About"
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function App() {


  return (
    <>
   

      <BrowserRouter>
      <Layout/>
      
      <Routes>
      
      
          <Route path="Home" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Portfolio" element={<Portfolio/>}/>
          <Route path="Contact" element={ <Contact/>} />
        
    
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
