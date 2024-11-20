import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { pizzas } from "./assets/pizzas";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./pages/Register";
import HomeDinamico from "./pages/HomeDinamico";
import { useState } from "react";
import { useEffect } from "react";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import NotFound from "./pages/NotFound";

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

      <Routes>
        <Route
          path="/"
          element={
            <HomeDinamico
              listaPizzas={listaPizzas}
              setListaPizzas={setListaPizzas}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
