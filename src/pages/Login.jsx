import React from "react";
import { useState } from "react";

function Login() {
  const [inputEmailRegistrado, setInputEmailRegistrado] = useState("");
  const [inputPasswordRegistrado, setInputPasswordRegistrado] = useState("");

  const handleInputEmailRegistrado = (evento) => {
    setInputEmailRegistrado(evento.target.value);
  };
  const handleInputPasswordRegistrado = (evento) => {
    setInputPasswordRegistrado(evento.target.value);
  };

  const handleFormLogin = () => {
    if (!inputEmailRegistrado.includes("@")) {
      alert("No es un correo válido");
      return;
    }
    if (inputPasswordRegistrado.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    alert("Tu datos son válidos");
  };

  return (
    <>
      <div className="container">
        <hr />
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="inputEmail1Registrado" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmailRegistrado"
              aria-describedby="emailHelp"
              onChange={handleInputEmailRegistrado}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPasswordRegistrado" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordRegistrado"
              onChange={handleInputPasswordRegistrado}
            />
          </div>

          <button className="btn btn-primary" onClick={handleFormLogin}>
            Iniciar Sesion
          </button>
        </form>
        <hr />
      </div>
      ;
    </>
  );
}

export default Login;
