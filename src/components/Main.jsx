import React from "react";
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { Toaster } from "react-hot-toast";

function Main() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default Main;
