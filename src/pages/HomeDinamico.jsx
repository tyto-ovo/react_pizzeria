import Header from "../components/Header";
import { pizzas } from "../assets/pizzas";
import { Col, Container, Row } from "react-bootstrap";
import CardPizzaDinamico from "../components/CardPizzaDinamico";
import Cart from "./Cart";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function HomeDinamico({ /* setListaPizzas, */ listaPizzas }) {
  /* const { cart, agregar, quitar, total } = useCart() */
  /*  function agregar(comun) {
    const copiaLista = [...listaPizzas];
    let encontrado = copiaLista.findIndex((obj) => obj.id === comun.id);

    copiaLista[encontrado].cantidad += 1;

    setListaPizzas(copiaLista);
  }
  function quitar(comun) {
    const copiaLista = [...listaPizzas];
    let encontrado = copiaLista.findIndex((obj) => obj.id === comun.id);

    copiaLista[encontrado].cantidad -= 1;

    setListaPizzas(copiaLista);
  } */
  const mapPizzas = listaPizzas.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizzaDinamico productInfo={pizza} /* agregar={agregar}  */ />;
      </Col>
    );
  });

  /*   console.log(mapPizzas); */
  return (
    <div>
      <Header />
      <Container>
        <Row className="g-4" xs={1} md={2} lg={3}>
          {mapPizzas}
        </Row>
      </Container>
      <Cart listaPizzas={listaPizzas} /* agregar={agregar} quitar={quitar} */ />
    </div>
  );
}

export default HomeDinamico;
