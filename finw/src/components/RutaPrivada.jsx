// components/RutaPrivada.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RutaPrivada = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RutaPrivada;
