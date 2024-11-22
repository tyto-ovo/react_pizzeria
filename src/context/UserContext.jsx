import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  const signIn = () => {
    setToken(true);
    navigate("/");
  };
  const signOut = () => {
    setToken(false);
    navigate("/login");
  };
  return (
    <UserContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
export default UserProvider;
