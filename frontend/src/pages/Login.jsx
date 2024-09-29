import { useState } from "react";
import axios from "axios";
import "../scss/login/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("Aldahir");
  const [password, setPassword] = useState("1234567");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:7777/api/users/login", {
        userName,
        password,
      });

      localStorage.setItem("token", res.data.token);

      setResponse(res.data);
      setError(null);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
      setResponse(null);
    }
  };

  return (
    <div className="login-div-body">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputs">
            <input
              type="text"
              value={userName}
              placeholder="Nombre de Usuario"
              onChange={(e) => setUserName(e.target.value)}
              className="inp1"
            />

            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>

          <a className="btn-register" href="/register">
            Registarse
          </a>

          {response && <p>{JSON.stringify(response.message)}</p>}

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
