import { Button, Container, Row } from "react-bootstrap";
import { pizzas } from "../assets/pizzas";

const Cart = () => {
  console.log(pizzas);
  const carritoMap = pizzas.map((info) => {
    return (
        
      <div className="carro">
        <img src={info.image} />
        <div className="carrito">
          <h5>{info.name}</h5>
          <div className="modCant">
            <Button>-</Button>
            <p>Cantidad: {info.cantidad}</p>
            <Button>+</Button>
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
    );
  });
  return (
    <div>
      <Container>
        <h4>Tu Carrito de Compras </h4>
        {carritoMap}
        <h3>Total: </h3>
        <Button>Pagar</Button>
      </Container>
      <hr />
    </div>
  );
};

export default Cart;
