import React from "react";

function Navbar() {
  const total = 25000;
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </button>
              </li>
              <li className="nav-item  bordes">
                {token ? (
                  <a className="nav-link active" href="#">
                    {" "}
                    Profile{" "}
                  </a>
                ) : (
                  <a className="nav-link active" href="#">
                    {" "}
                    Login{" "}
                  </a>
                )}
              </li>
              <li className="nav-item  bordes">
                {token ? (
                  <a className="nav-link active" href="#">
                    {" "}
                    Logout{" "}
                  </a>
                ) : (
                  <a className="nav-link active" href="#">
                    {" "}
                    Register{" "}
                  </a>
                )}
              </li>
            </ul>
            <button className="tot">
              <span className="navbar-text">
                Total: ${total.toLocaleString("es")}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
