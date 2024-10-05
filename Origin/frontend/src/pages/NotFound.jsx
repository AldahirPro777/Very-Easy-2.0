import "../scss/notFound/notFound.css";

function NotFound() {
  return (
    <div className="notFound-div-body">
      <h1 className="err404">404</h1>

      <p className="text">Pagina No encontrada</p>

      <a className="back" href="/">
        VOLVER AL INICIO
      </a>
    </div>
  );
}

export default NotFound;
