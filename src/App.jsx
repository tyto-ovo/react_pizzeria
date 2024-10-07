import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeDinamico from "./components/HomeDinamico";

/* import Home from "./components/Home"; */
/* import Register from "./components/Register"; */

function App() {

  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Home /> */}
      <HomeDinamico />
      <Footer />
    </>
  );
}

export default App;
