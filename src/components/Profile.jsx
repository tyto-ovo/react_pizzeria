import React from "react";
import { Button } from "react-bootstrap";
import { useUser } from "../context/UserContext";

function Profile() {
  const { email, signOut } = useUser();
  return (
    <div className="error404">
      <h2>{email} email@ejemplo.cl</h2>
      <Button onClick={signOut}>Cerrar sesion</Button>
    </div>
  );
}

export default Profile;
