/* eslint-disable react/prop-types */
import "../../scss/dashboard/welcome/welcome.css";

function Welcome({ name, genero }) {
  return (
    <div id="welcome">
      <p>
        {genero ? "Bienvenido " : "Bienvenida "} {name || "Invitado"}
      </p>
    </div>
  );
}

export default Welcome;
