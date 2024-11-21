import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const cantPizzas = [
  { id: "p001", cantidad: 0, price: 5950 },
  { id: "p002", cantidad: 0, price: 7250 },
  { id: "p003", cantidad: 0, price: 5990 },
  { id: "p004", cantidad: 0, price: 9590 },
  { id: "p005", cantidad: 0, price: 6450 },
  { id: "p006", cantidad: 0, price: 8500 },
];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cantPizzas);
  const [total, setTotal] = useState(0);

  const agregar = (item) => {
    const copiaLista = [...cart];
    const encontrado = copiaLista.findIndex((obj) => obj.id === item.id);

    copiaLista[encontrado].cantidad += 1;
    setCart(copiaLista);
  };
  const quitar = (item) => {
    const copiaLista = [...cart];
    const encontrado = copiaLista.findIndex((obj) => obj.id === item.id);

    copiaLista[encontrado].cantidad -= 1;
    setCart(copiaLista);
  };

  useEffect(() => {
    const calcTotal = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.cantidad;
    }, 0);

    setTotal(calcTotal);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, agregar, quitar, total }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
