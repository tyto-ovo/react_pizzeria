import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { pizzas } from "./assets/pizzas";

/* import Home from "./components/Home"; */
/* import Register from "./components/Register"; */
import HomeDinamico from "./components/HomeDinamico";
import { useState } from "react";

function App() {
  const [listaPizzas, setListaPizzas] = useState(pizzas);
  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Home /> */}
      <HomeDinamico listaPizzas = {listaPizzas} setListaPizzas={setListaPizzas}/>
      <Footer />
    </>
  );
}

export default App;
