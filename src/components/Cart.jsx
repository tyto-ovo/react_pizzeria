import { Button, Container, Row } from "react-bootstrap";
import { pizzas } from "../assets/pizzas";

const Cart = ({ agregar, quitar }) => {
  const carritoMap = pizzas.map((info) => {
    return (
      <>
        {info.cantidad != 0 ? (
          <div className="carro">
            <img src={info.image} />
            <div className="carrito">
              <h5>{info.name}</h5>
              <div className="modCant">
                <Button onClick={() => quitar(info)}>-</Button>
                <p>Cantidad: {info.cantidad}</p>
                <Button onClick={() => agregar(info)}>+</Button>
              </div>
              <p>
                Precio:{" "}
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                  minimumFractionDigits: 0,
                }).format(info.price)}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  });
  const pizzaTotal = pizzas.filter((pizza) => pizza.cantidad > 0);
  let total = 0;
  function calcTotal(p) {
    pizzaTotal.forEach((e) => (total += e.price * e.cantidad));
    return total;
  }
  return (
    <div>
      <Container>
        <h4>Tu Carrito de Compras </h4>
        {carritoMap}
        <h3>
          Total:{" "}
          {new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            minimumFractionDigits: 0,
          }).format(calcTotal(pizzaTotal))}
        </h3>
        <Button>Pagar</Button>
      </Container>
      <hr />
    </div>
  );
};

export default Cart;
