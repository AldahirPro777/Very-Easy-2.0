import "../../scss/dashboard/infoEscolar/infoEscolar.css";

import horario from "../../assets/dashboard/horario.png";

import Teachers from "../dashboard/Extras/Teachers.jsx";

function InfoEscolar() {
  return (
    <section id="InfoEscolar">
      <h1>Info Escolar</h1>
      <h2 className="sub-tema">Horario</h2>
      <figure>
        <img src={horario} alt="Horario" />
      </figure>
      <h2 className="sub-tema">Info de Profes</h2>

      <Teachers />
    </section>
  );
}

export default InfoEscolar;
