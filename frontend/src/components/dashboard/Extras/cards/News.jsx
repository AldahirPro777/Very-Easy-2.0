/* eslint-disable react/prop-types */
import formatDate from "../../utils/formatDate.js";

function News({ news }) {
  return (
    <div>
      {news.map((newss, i) => (
        <div key={i} className="card-newss">
          <div className="card-head">
            <h2>{newss.title}</h2>
          </div>
          <div className="card-body">
            <p>Autor: {newss.autor}</p>
            <p>Descripcción: {newss.description}</p>
            <p>Fecha: {formatDate(newss.date)}</p>
            <p>Fuente: {newss.fuente}</p>
            <p>Etiquetas: {newss.archivosAdjuntos.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
