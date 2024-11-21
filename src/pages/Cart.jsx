import { Button, Container, Row } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = ({ listaPizzas }) => {
  const { cart, agregar, quitar, total } = useCart();
  const encontrarId = (obj) => {
    const copy = [...listaPizzas];
    let enc = copy.findIndex((e) => e.id === obj.id);

    return enc;
  };
  const carritoMap = listaPizzas.map((info) => {
    return (
      <>
      
        {cart[`${encontrarId(info)}`].cantidad != 0 ? (
          <div className="carro">
            <img src={info.img} />
            <div className="carrito">
              <h5>{info.name}</h5>
              <div className="modCant">
                <Button
                  onClick={() => {
                    quitar(info);
                  }}
                >
                  -
                </Button>
                <p>Cantidad: {cart[`${encontrarId(info)}`].cantidad}</p>
                <Button
                  onClick={() => {
                    agregar(info);
                  }}
                >
                  +
                </Button>
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
          }).format(`${total}`)}
        </h3>
        <Button>Pagar</Button>
      </Container>
      <hr />
    </div>
  );
};

export default Cart;
