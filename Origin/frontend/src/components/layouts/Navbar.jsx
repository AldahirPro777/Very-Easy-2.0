import { useNavigate } from "react-router-dom";
import "../../scss/layouts/navbar/navbar.css";
import profileImg from "../../assets/sub-pages/dashboard/foto.png";
import menuIcon from "../../assets/sub-pages/dashboard/menu.png";
import closeIcon from "../../assets/sub-pages/dashboard/x.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="blur"></div>
      <a className="a-img">
        <img
          src={profileImg}
          onClick={() => navigate("/sub-pages/profile")}
          alt="Foto de Perfil"
        />
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <img src={menuIcon} alt="Menu" id="menu-icon" />
        <img src={closeIcon} alt="Cerrar" id="close-icon" />
      </label>

      <nav>
        <a target="" onClick={() => navigate("/sub-pages/dashboard")}>
          Dashboard
        </a>
        <a onClick={() => navigate("/sub-pages/calendario")}>Calendario</a>
        <a onClick={() => navigate("/sub-pages/studyResources")}>Recursos</a>
        <a onClick={() => navigate("/sub-pages/classroom")}>Classroom</a>
        <a onClick={() => navigate("/sub-pages/blog")}>Blog</a>
        <a onClick={() => navigate("/sub-pages/frases")}>Frases</a>
        <a onClick={() => navigate("/sub-pages/AdminPanel")}>Panel del ADMIN</a>
      </nav>
    </header>
  );
}

export default Navbar;
