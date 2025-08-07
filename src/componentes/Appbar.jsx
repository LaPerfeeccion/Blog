import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import "./appbar.css"; // Asegúrate que esté el CSS anterior
import { MdExpandLess } from "react-icons/md";

export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <div className="appbar">
      <FaHome
        size={24}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        title="Inicio"
      />
      <FaUserAlt
        size={24}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/perfil")}
        title="Perfil"
      />
      <MdExpandLess
        size={24}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/actividades")}
        title="Actividades"
      />
    </div>
  );
};