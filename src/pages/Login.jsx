import React from "react";
import { useState } from "react";
import { useUser } from "../context/UserContext";

function Login() {

  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("No es un correo válido");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    const result = await signIn(email, password);
    if (result.succes) {
      console.log("log in correcto");
    } else {
      console.log("erroneo");
    }
  };


  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };


  const handleClick = async (e) => {
    e.preventDefault();
    await signIn(formInfo);
  };
  return (
    <>
      <div className="container">
        <hr />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEmail1Registrado" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmailRegistrado"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPasswordRegistrado" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPasswordRegistrado"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary" type="submit">
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
