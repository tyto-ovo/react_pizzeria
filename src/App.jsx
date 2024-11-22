import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { pizzas } from "./assets/pizzas";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./pages/Register";
import HomeDinamico from "./pages/HomeDinamico";
import { useState } from "react";
import { useEffect } from "react";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import NotFound from "./pages/NotFound";
import CartProvider, { CartContext } from "./context/CartContext";
import { useUser } from "./context/UserContext";

function App() {
  /*   const [listaPizzas, setListaPizzas] = useState(pizzas); */
  const [listaPizzas, setListaPizzas] = useState([]);
  const navigate = useNavigate();
  const { token } = useUser();

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
      <CartProvider>
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
          <Route path="/cart" element={<Cart listaPizzas={listaPizzas} />} />
          <Route path="/pizza/:idPizzas" element={<Pizza />} />
          <Route
            path="/profile"
            element={!token ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
