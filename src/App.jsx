import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Register />
      {/*       <Home /> */}
      <Footer />
    </>
  );
}

export default App;
