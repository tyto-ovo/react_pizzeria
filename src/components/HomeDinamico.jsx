import Header from "./Header";
import { pizzas } from "../assets/pizzas";
import { Col, Container, Row } from "react-bootstrap";
import CardPizzaDinamico from "./CardPizzaDinamico";

function HomeDinamico() {
  const mapPizzas = pizzas.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizzaDinamico  productInfo={pizza}/>;
      </Col>
    );
  });

  console.log(mapPizzas);
  return (
    <div>
      <Header />
      <Container>
        <Row className="g-4" xs={1} md={2} lg={3}>
          {mapPizzas}
        </Row>
      </Container>
    </div>
  );
}

export default HomeDinamico;
