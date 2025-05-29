import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Panel de administración</h1>
      <button onClick={logout}>Cerrar sesión</button>
      {/* Aquí puedes agregar los formularios para prensa e investigación */}
    </div>
  );
};

export default Admin;