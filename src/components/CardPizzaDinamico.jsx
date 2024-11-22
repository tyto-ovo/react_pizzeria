import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

const CardPizzaDinamico = ({ productInfo }) => {
  const { agregar } = useCart();
  /*   const { idPizzas } = useParams(); */
  const navigate = useNavigate();
  const ingredientsMap = productInfo.ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  const goToPizza = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };
  return (
    <Card /* style={{ width: "18rem" }} */>
      <Card.Img variant="top" src={productInfo.img} />
      <Card.Body>
        <Card.Title>{productInfo.name}</Card.Title>
        <Card.Text>
          {new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            minimumFractionDigits: 0,
          }).format(productInfo.price)}
        </Card.Text>
        <ul>{ingredientsMap}</ul>
        <Button
          variant="primary"
          className="sepbu"
          onClick={() => goToPizza(productInfo.id)}
        >
          Ver Mas
        </Button>
        <Button
          variant="primary"
          className="sepbu"
          onClick={() => {
            agregar(productInfo);
          }}
        >
          Añadir al Carro
        </Button>
      </Card.Body>
    </Card>
  );
};
CardPizzaDinamico.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.array,
    img: PropTypes.string,
  }),
};
export default CardPizzaDinamico;
