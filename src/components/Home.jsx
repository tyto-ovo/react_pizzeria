import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row row-cols-3 g-4">
          <div className="col">
            <CardPizza
              name="Napolitana"
              price="5950"
              ingridients={["mozzarella", "tomates", "jamón", "orégano"]}
              imagen={
                "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
              }
            />
          </div>
          <div className="col">
            <CardPizza
              name="Española"
              price="6950"
              ingridients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              imagen={
                "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
              }
            />
          </div>
          <div className="col">
            <CardPizza
              name="Pepperoni"
              price="6950"
              ingridients={["mozzarella", "pepperoni", "orégano"]}
              imagen={
                "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
