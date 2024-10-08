import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

/* import Home from "./components/Home"; */
/* import Register from "./components/Register"; */
import HomeDinamico from "./components/HomeDinamico";
import { useState } from "react";

function App() {
 
  }
  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Home /> */}
      <HomeDinamico />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
