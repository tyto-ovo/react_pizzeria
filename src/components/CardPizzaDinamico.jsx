import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const CardPizzaDinamico = ({ productInfo }) => {
  const ingredientsMap = productInfo.ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  return (
    
    <Card /* style={{ width: "18rem" }} */>
      <Card.Img variant="top" src={productInfo.image} />
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
        <Button variant="primary" className="sepbu">
          Ver Mas
        </Button>
        <Button variant="primary" className="sepbu">
          Añadir al Carro
        </Button>
      </Card.Body>
    </Card>
  );
};
CardPizzaDinamico.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.array,
    image: PropTypes.string,
  }),
};
export default CardPizzaDinamico;
