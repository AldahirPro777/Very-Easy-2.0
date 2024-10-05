import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//* Components
import Welcome from "../components/dashboard/Welcome.jsx";
import CardsPendientes from "../components/dashboard/CardsPendientes.jsx";
import InfoEscolar from "../components/dashboard/InfoEscolar.jsx";
import CalendarAux from "../components/dashboard/CalendarAux.jsx";

//* Layouts
import Navbar from "../components/layouts/Navbar.jsx";
import Footer from "../components/layouts/Footer.jsx";

//* Css
import "../scss/dashboard/dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No se encontró el token. Por favor, inicia sesión");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:7777/api/users/getDataUser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        setError(null);
      } catch (err) {
        setError("Error al cargar los datos del dashboard.");
        console.error(err);
      }
    };

    fetchUserData();
  }, [navigate]);

  const { name, genero } = user ? user.user : { name: "", genero: "" };

  return (
    <div className="dashboard-div-body">
      <main id="dashboard">
        {error ? (
          <p className="error">{error}</p>
        ) : user ? (
          <>
            <Navbar />
            <Welcome name={name} genero={genero} />
            <CardsPendientes />
            <InfoEscolar />
            <CalendarAux />
            <Footer />
          </>
        ) : (
          <p>Cargando datos del usuario...</p>
        )}
      </main>
      
    </div>
  );
}

export default Dashboard;
