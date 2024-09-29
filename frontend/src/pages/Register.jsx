import { useState } from "react";
import axios from "axios";
import "../scss/register/register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [genero, setGenero] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:7777/api/users/register", {
        name,
        userName,
        password,
        password2,
        genero,
      });

      setResponse(res.data);
      setError(null);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error en el Registro");
      setResponse(null);
    }
  };

  return (
    <div className="register-div-body">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div className="inps">
          <input
            type="text"
            value={name}
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={userName}
            placeholder="Usuario"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value={password2}
            placeholder="**********"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        {/* Botones para seleccionar género */}
        <h2>Selecciona tu género:</h2>
        <div className="gender-selection">
          <button type="button" onClick={() => setGenero(true)}>
            Hombre
          </button>
          <button type="button" onClick={() => setGenero(false)}>
            Mujer
          </button>
        </div>

        <button type="submit">Register</button>

        <a className="btn-login" href="/login">
          Login
        </a>

        {response && <p>{JSON.stringify(response.message)}</p>}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
