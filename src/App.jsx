
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Address from "./pages/Address";
import Home from "./pages/Home";

  const App = () =>{
   

  return(
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/address" element={<Address/>} />
    </Routes>
    <Footer />
</Router>
  );
};

export default App;  


