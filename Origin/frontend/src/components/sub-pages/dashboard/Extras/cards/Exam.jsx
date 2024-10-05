/* eslint-disable react/prop-types */
import { useState } from "react";
import formatDate from "../../../../../utils/formatDate.js";

function Exam({ exams }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (index) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <>
      {exams.map((exam, i) => (
        <div key={i} className="card card-exam">
          <div className="card-head">
            <h2>- {exam.title} -</h2>
          </div>
          <div className="card-body">
            <p>
              <span>Materia:</span> {exam.materia}
            </p>
            <p>
              <span>Fecha de aplicación:</span> {formatDate(exam.date)}
            </p>
            <p>
              <span>Link de recursos: </span>
              {exam.resourceUrls.join(", ")}
            </p>
            <p>
              <span>Guia de estudio:</span> {exam.studyGuideUrls.join(", ")}
            </p>

            {visible[i] && (
              <div className="datos-extra">
                <p>
                  <span>Maestro:</span> {exam.teacher}
                </p>
                <p>
                  <span>Nivel de importancia:</span> {exam.importanceLevel}
                </p>
                <p>
                  <span>Etiquetas:</span> {exam.tags.join(", ")}
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

export default Exam;
