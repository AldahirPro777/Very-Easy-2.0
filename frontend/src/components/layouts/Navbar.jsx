import { useNavigate } from "react-router-dom";
import "../../scss/layouts/navbar/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <a onClick={() => handleLogout()} className="a-img">
        <img src="src/assets/dashboard/foto.png" alt="Foto de Perfil" />
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <img src="src/assets/dashboard/menu.png" alt="Menu" id="menu-icon" />
        <img src="src/assets/dashboard/x.png" alt="Menu" id="close-icon" />
      </label>

      <nav>
        <a href="/">Calendario</a>
        <a href="/">Recursos</a>
        <a href="/">Classroom</a>
        <a href="/">Blog</a>
        <a href="/">Panel del ADMIN</a>
      </nav>
    </header>
  );
}

export default Navbar;
