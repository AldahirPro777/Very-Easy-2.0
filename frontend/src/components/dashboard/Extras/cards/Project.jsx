/* eslint-disable react/prop-types */
import { useState } from "react";
import formatDate from "../../../../utils/formatDate.js";

function Project({ projects }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {projects.map((project, i) => (
        <div key={i} className="card card-project">
          <div className="card-head">
            <h2>- {project.title} -</h2>
          </div>
          <div className="card-body">
            <p className="descripcion">
              <span>Descripción:</span> {project.descripcion}
            </p>
            <p>
              <span>Materia:</span> {project.materia}
            </p>
            <p>
              <span>Fecha de entrega: </span>
              {formatDate(project.date)}
            </p>
            {visible[i] && (
              <div className="datos-extra">
                <p>
                  <span>Maestro:</span> {project.teacher}
                </p>
                <p>
                  <span>Link de recursos:</span>{" "}
                  {project.resourceUrls.join(", ")}
                </p>
                <p>
                  <span>Nivel de importancia:</span> {project.importanceLevel}
                </p>
                <p>
                  <span>Etiquetas:</span> {project.tags.join(", ")}
                </p>
              </div>
            )}

            <div className="button">
              <button onClick={() => toggleVisibility(i)}>
                {visible[i] ? "Ocultar datos extras" : "Mostrar datos extras"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
