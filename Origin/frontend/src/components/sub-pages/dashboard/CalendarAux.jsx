import "../../../scss/sub-pages/dashboard/calendarAux/calendarAux.css";
//! import CalendarioPDF from "../docs/Calendar.jsx";

function CalendarAux() {
  return (
    <section id="calendarAux">
      <h1>Calendario</h1>
      <div className="container">
        <div className="tabla">
          <h3>Octubre</h3>

          <ol>
            <li className="day-name">D</li>
            <li className="day-name">L</li>
            <li className="day-name">M</li>
            <li className="day-name">M</li>
            <li className="day-name">J</li>
            <li className="day-name">V</li>
            <li className="day-name">S</li>

            <li className="firts-day">
              1 <br />
              🌟🎂
            </li>
            <li>2 <br />📚📚📚📝</li>
            <li>3 <br />📝</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10 <br />🎂</li>
            <li>11 <br />🎂</li>
            <li>12 <br />🎂</li>
            <li>13 <br />🎂</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>
              ✨🌠
              <br /> 1 <br />
              ⭐🌠
            </li>
          </ol>
        </div>

        <div className="simbologia">
          <h3>Simbologia</h3>
          <p>
            <span>HOY: </span>🌟
          </p>
          <p>
            <span>Tarea: </span>📚
          </p>
          <p>
            <span>Proyecto: </span>🛠️
          </p>
          <p>
            <span>Examen: </span>📝
          </p>
          <p>
            <span>Evento: </span>📅
          </p>
          <p>
            <span>Cumpleaños: </span>🎂
          </p>
          <p>
            <span>NO hay clases: </span>🚫
          </p>
          {/* <a target="_blank" href="../../docs/Calendario.pdf">
            Mas Información
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default CalendarAux;
