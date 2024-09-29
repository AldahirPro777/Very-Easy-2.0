/* eslint-disable react/prop-types */
import { useState } from "react";
import formatDate from "../../../../utils/formatDate.js";

function Task({ tasks }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {tasks.map((task, i) => (
        <div key={i} className="card card-task">
          <div className="card-head">
            <h2>- {task.title} -</h2>
          </div>
          <div className="card-body">
            <p className="descripcion">
              <span>Descripción:</span> {task.descripcion}
            </p>
            <p>
              <span>Materia:</span> {task.materia}
            </p>
            <p>
              <span>Fecha de entrega:</span> {formatDate(task.date)}
            </p>

            {visible[i] && (
              <div className="datos-extra">
                <p>
                  <span>Maestro:</span> {task.teacher}
                </p>
                <p>
                  <span>Link de recursos:</span> <br />
                  {task.resourceUrls.join(", ")}
                </p>
                <p>
                  <span>Nivel de importancia:</span> {task.importanceLevel}
                </p>
                <p>
                  <span>Etiquetas:</span> {task.tags.join(", ")}
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

export default Task;
