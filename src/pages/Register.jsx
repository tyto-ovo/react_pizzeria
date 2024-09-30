import React from "react";
import { useState } from "react";
import Login from "./Login";

function Register() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirmation, setInputPasswordConfirmation] =
    useState("");

  const [registrado, setRegistrado] = useState(false);

  const handleInputEmail = (evento) => {
    setInputEmail(evento.target.value);
  };
  const handleInputPassword = (evento) => {
    setInputPassword(evento.target.value);
  };
  const handleInputPasswordConfirmation = (evento) => {
    setInputPasswordConfirmation(evento.target.value);
  };

  const handleForm = () => {
    if (!inputEmail.includes("@")) {
      alert("No es un correo.");
      return;
    }
    if (inputPassword.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (inputPassword !== inputPasswordConfirmation) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Te has registrado con éxito");
    setRegistrado(true);
  };
  return (
    <>
      {!registrado ? (
        <>
          {" "}
          <div className="container">
            <hr />
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  onChange={handleInputEmail}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  onChange={handleInputPassword}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="inputPasswordConfirmation"
                  className="form-label"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordConfirmation"
                  onChange={handleInputPasswordConfirmation}
                />
              </div>

              <button className="btn btn-primary" onClick={handleForm}>
                Enviar
              </button>
            </form>
            <hr />
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Register;
