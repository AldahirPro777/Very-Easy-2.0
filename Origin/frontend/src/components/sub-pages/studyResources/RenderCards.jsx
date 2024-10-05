/* eslint-disable react/prop-types */
function RenderCards({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="card">
          <div className="card-head">
            <h2>{item.title}</h2>
          </div>
          <div className="card-body">
            <p>
              <span>Descripción: </span>
              {item.description}
            </p>
            <p>
              <span>Tipo: </span>
              {item.type}
            </p>
            <p>
              <span>Etiquetas: </span>
              {item.tags.join(", ")}
            </p>
            <div className="links">
              {item.url.map((url, j) => (
                <a key={j} href={url} target="_blank">
                  {url}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RenderCards;
