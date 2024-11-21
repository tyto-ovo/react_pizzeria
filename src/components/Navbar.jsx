import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { total } = useCart();

  const token = false;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 sep">
              <li className="nav-item ">
                <button className="bordes">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </button>
              </li>
              <li className="nav-item  bordes">
                {token ? (
                  <Link className="nav-link active" to="/profile">
                    {" "}
                    Profile{" "}
                  </Link>
                ) : (
                  <Link className="nav-link active" to="/login">
                    {" "}
                    Login{" "}
                  </Link>
                )}
              </li>
              <li className="nav-item  bordes">
                {token ? (
                  <Link className="nav-link active" to="#">
                    {" "}
                    Logout{" "}
                  </Link>
                ) : (
                  <Link className="nav-link active" to="/registro">
                    {" "}
                    Register{" "}
                  </Link>
                )}
              </li>
            </ul>

            <Link to="/cart" className="modificadorLink">
              <span className="navbar-text">
                Total: ${total.toLocaleString("es")}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
