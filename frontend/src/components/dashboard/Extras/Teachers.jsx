import imgProfe from "../../../assets/dashboard/profe.jpeg";
import imgProfa from "../../../assets/dashboard/profa.jpeg";

function Teachers() {
  return (
    <div className="wrapper">
      {/* Modulo */}
      <div className="card">
        <div className="poster">
          <img src={imgProfe} alt="IMAGEN" />
        </div>

        <div className="details">
          <h3>Hector Covarrubias</h3>
          <h4>K1, Lab. Int, O2, Biblioteca • Módulo</h4>

          <div className="tags">
            <span className="tag">00/00</span>
            <span className="tag">EASY</span>
          </div>

          <p className="desc">Descripción</p>
        </div>
      </div>

      {/* Inglés */}
      <div className="card">
        <div className="poster">
          <img src={imgProfa} alt="IMAGEN" />
        </div>

        <div className="details">
          <h3>Yesenia Ibarra Rosas</h3>
          <h4>D2 • Inglés</h4>

          <div className="tags">
            <span className="tag">00/00</span>
            <span className="tag">EASY</span>
          </div>

          <p className="desc">Thursday of movie 🤑</p>
        </div>
      </div>

      {/* Matematicas */}
      <div className="card">
        <div className="poster">
          <img src={imgProfe} alt="IMAGEN" />
        </div>

        <div className="details">
          <h3>Efrain Rios Zavala</h3>
          <h4>C4 • Cálculo Diferencial</h4>

          <div className="tags">
            <span className="tag">00/00</span>
            <span className="tag">EASY</span>
          </div>

          <p className="desc">Suavecito: Solo la verdad los hará libres</p>
        </div>
      </div>

      {/* Valores */}
      <div className="card">
        <div className="poster">
          <img src={imgProfa} alt="IMAGEN" />
        </div>

        <div className="details">
          <h3>Elizabeth García Juárez</h3>
          <h4>G2 • CTSyV</h4>

          <div className="tags">
            <span className="tag">00/00</span>
            <span className="tag">EASY</span>
          </div>

          <p className="desc">Descripción</p>
        </div>
      </div>

      {/* Física II */}
      <div className="card">
        <div className="poster">
          <img src={imgProfe} alt="IMAGEN" />
        </div>

        <div className="details">
          <h3>Sergio Sánchez Sánchez</h3>
          <h4>C2 • Física II</h4>

          <div className="tags">
            <span className="tag">00/00</span>
            <span className="tag">EASY</span>
          </div>

          <p className="desc">Descripción</p>
        </div>
      </div>

      <div className="otherPeople">
        {/* Información de  sandi, subdirectora, coordinador, director, secretaria,etc*/}
      </div>
    </div>
  );
}

export default Teachers;
