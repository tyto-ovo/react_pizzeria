import React from "react";
import { useState } from "react";
import Login from "./Login";
import { useUser } from "../context/UserContext";

function Register() {
  const { register } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleSubmit = async (e) => {
    if (!email.includes("@")) {
      alert("No es un correo.");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    const result = await register(email, password);
    if (result.succes) {
      console.log("registro exitoso");
    } else {
      console.log("erroneo");
    }
  };

  /*   const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  }; */
  /*   const handleInputEmail = (evento) => {
    setInputEmail(evento.target.value);
  };
  const handleInputPassword = (evento) => {
    setInputPassword(evento.target.value);
  };
  const handleInputPasswordConfirmation = (evento) => {
    setInputPasswordConfirmation(evento.target.value);
  };
 */
  const handleClick = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    });
    const data = await res.json();
  };
  /*   const handleForm = () => {
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
  }; */
  return (
    <>
      <div className="container">
        <h2>Registro</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPasswordConfirmation" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordConfirmation"
              onChange={(e) => {
                setConfirmar(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
        <hr />
      </div>
    </>
  );
}
export default Register;
