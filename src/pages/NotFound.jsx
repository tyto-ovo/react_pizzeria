import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <Button>
        {" "}
        <Link className="modificadorLink" to={"/"}>
          Volver a Inicio
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
