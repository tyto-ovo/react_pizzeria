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
import { useEffect } from "react";
import Pizza from "./components/Pizza";

function App() {
  /*   const [listaPizzas, setListaPizzas] = useState(pizzas); */
  const [listaPizzas, setListaPizzas] = useState([]);

  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();

    setListaPizzas(data);
  };
  return (
    <>
      <Navbar />
      {/* <Register /> */}
      {/* <Home /> */}

      <Pizza />
      {/* <HomeDinamico listaPizzas={listaPizzas} setListaPizzas={setListaPizzas} /> */}
      <Footer />
    </>
  );
}

export default App;
