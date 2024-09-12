import React from "react";

function CardPizza({ name, price, ingridients, imagen }) {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: $ {price.toLocaleString("es")}</p>
        <ul>
          {ingridients.map((e, index) => {
            return <li key={index}> {e}</li>;
          })}
        </ul>
        <div className="separador">
          <a href="#" className="btn btn-primary">
            Ver Mas
          </a>
          <a href="#" className="btn btn-primary">
            Añadir
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
