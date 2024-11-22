import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardText, CardTitle } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Pizza() {
  const [pizzaBanner, setPizzaBanner] = useState({});
  const { idPizzas } = useParams();
  /*   const navigate = useNavigate(); */

  useEffect(() => {
    consultaBannerApi();
  }, []);
  const consultaBannerApi = async () => {
    const url = `http://localhost:5000/api/pizzas/${idPizzas}`;
    const response = await fetch(url);
    const data = await response.json();
    setPizzaBanner(data);
  };

  /*   console.log(pizzaBanner.desc); */
  return (
    <div>
      <Card>
        <br />
        <Card.Img variant="top" src={pizzaBanner.img} className="banner" />
        <Card.Body>
          <CardTitle>{pizzaBanner.name}</CardTitle>
          <Card.Text>{pizzaBanner.desc}</Card.Text>
          <ul>
            {pizzaBanner?.ingredients?.map((ingredientes) => {
              return <li key={ingredientes}> {ingredientes}</li>;
            })}
          </ul>
          <CardText>
            {new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0,
            }).format(`${pizzaBanner.price}`)}
          </CardText>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default Pizza;
