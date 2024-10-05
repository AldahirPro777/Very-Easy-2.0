import "../scss/home/home.scss";

function Home() {
  return (
    <div className="home-div-body">
      <main>
        {/* Bienvenida a todos */}
        <section className="welcome">
          <h1>Bienvenid@</h1>

          <div className="blur">
            <p>
              ¡Hola! 🎉 Bienvenidos a <strong>Very Easy</strong>, un espacio
              diseñado para ayudarte a organizar tus estudios y maximizar tu
              rendimiento académico. Con herramientas como un calendario, lista
              de trabajos pendientes y un blog lleno de recursos útiles. Únete y
              aprovecha al maximo esta pagina que te salvara de los Rs. <br />
              ¡La exelencia empieza aquí! 🚀
            </p>
          </div>
        </section>

        {/* Información de Very Easy */}
        <section className="info">
          <div className="custom-shape-divider-top-1725409287">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill"
              ></path>
            </svg>
            <div className="triangle-left"></div>
            <div className="triangle-right"></div>
          </div>

          {/* Visión y misión */}
          <div className="card">
            <div className="card-head">
              <h3>Visión y Misión</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <strong>Misión: </strong>Mi misión es motivar y ayudar a todos
                  mis compañeros para que alcancen la excelencia a través de una
                  plataforma innovadora y compleja. Very Easy centraliza
                  recursos, tareas y colaboración, creando un entorno de
                  aprendizaje que promueve el desarrollo personal y gestion de
                  tiempo.
                </li>
                <li>
                  <strong>Visión: </strong>Veo al proyecto como una herramienta
                  esencial para mis compañeros que puede ayudarlos en su camino,
                  facilitando y centralizando recursos de alto valor en un solo
                  lugar.
                </li>
              </ul>
            </div>
          </div>

          {/* Que ofrece */}
          <div className="card">
            <div className="card-head">
              <h3>¿Qué características ofrece?</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <strong>Gestión De Tareas: </strong>Organiza todas las tareas
                  y proyectos con fechas de vencimiento, prioridades y
                  recordatorios.
                </li>
                <li>
                  <strong>Pagina De Recursos: </strong>En esta pagina se
                  encuentran recursos de muy alto valor como videos, paginas,
                  documentos entre otro tipo de contenido que te ayudara en
                  diferentes momentos.
                </li>
                <li>
                  <strong>Calendario: </strong>Visualiza y organiza tareas,
                  exámenes y eventos escolares con facilidad.
                </li>
                <li>
                  <strong>Panel de Control para Administradores: </strong>
                  Gestión de contenido de la plataforma especial y unicamente
                  para personas con permisos superiores.
                </li>
              </ul>
            </div>
          </div>

          {/* Ventajas */}
          <div className="card">
            <div className="card-head">
              <h3>¿Cómo puede beneficiarte?</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <strong>Organizar y Priorizar:</strong> Mantén tus tareas y
                  proyectos claros con fechas y prioridades.
                </li>
                <li>
                  <strong>Reducir el Estrés:</strong> Recibe recordatorios y
                  alertas para no olvidar fechas importantes.
                </li>
                <li>
                  <strong>Información personalizada:</strong> Con la gran
                  variedad de los recursos disponibles no tendars que gastar
                  tiempo buscando mas
                </li>
              </ul>
            </div>
          </div>

          {/* Apoyo opcional */}
          <div className="card">
            <div className="card-head">
              <h3>¿Cómo puedes contribuir?</h3>
            </div>
            <div className="card-body contribuir">
              <p>
                Te invito a explorar este bonito espacio de trabajo, utilizar
                sus funcionalidades y compartir tus ideas y sugerencias. Tu
                participación es crucial para mejorar la plataforma y adaptarla
                a tus necesidades. Estoy seguro de que este proyecto será una
                herramienta invaluable en tu camino académico.
              </p>
            </div>
          </div>

          {/* Planes a futuro */}
          <div className="card">
            <div className="card-head">
              <h3>¿Qué planes a futuro hay?</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <strong>Nuevos estilos:</strong> Pronto se añadirán nuevos
                  estilos e imágenes para que el proyecto tenga una vista más
                  agradable.
                </li>
                <li>
                  <strong>Configuración de Accesibilidad:</strong> Se
                  habilitarán diversas opciones para mejorar la accesibilidad,
                  como el ajuste del tamaño de fuente, la selección del tipo de
                  fuente, y más. Estas opciones están diseñadas para adaptar la
                  plataforma a tus necesidades específicas.
                </li>
                <li>
                  <strong>Modo Oscuro:</strong> Personaliza la apariencia de la
                  plataforma con un tema oscuro.
                </li>
                <li>
                  <strong>Calendario Completo:</strong> Visualiza tus eventos
                  académicos en vistas semanales y mensual.
                </li>
                <li>
                  <strong>Recursos Educativos:</strong> Recomendación de
                  tutoriales y materiales de estudio.
                </li>
                <li>
                  <strong>Blog Personalizado:</strong> Creación de un blog
                  adaptado a tus gustos e intereses, con contenido relevante y
                  recomendaciones personalizadas.
                </li>
                <li>
                  <strong>Calendario avanzado:</strong> Mejora en la integración
                  y personalización del calendario para ofrecer una vista más
                  detallada y flexible de tus eventos y tareas.
                </li>
                <li>
                  <strong>Aplicación móvil:</strong> Desarrollar una versión
                  móvil de la plataforma para acceder a las funcionalidades
                  desde cualquier lugar y en cualquier momento.
                </li>
                <li>
                  <strong>Medallas y Logros:</strong> Un sistema de gamificación
                  que premia tus éxitos académicos.
                </li>
              </ul>
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1725404578">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(234, 56, 141)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(123, 91, 199)", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                fill="url(#grad1)"
              ></path>
            </svg>
          </div>
        </section>

        {/* Rutas de registro y login */}
        <section className="routes">
          <div className="login">
            <h2>ㅤ ¡Qué gusto verte! 👋😊ㅤ</h2>
            <p>
              Si ya eres parte del proyecto, solo <strong>inicia sesión</strong>{" "}
              para seguir disfrutando de todas las{" "}
              <strong>herramientas y recursos</strong> 📚 que tengo para ti 🚀.
            </p>
            <a href="/login" className="btn-login">
              👉 Iniciar Sesión 🔓
            </a>
          </div>
          <div className="register">
            <h2>ㅤ🎉 ¡Únete a la Exelencia!ㅤ</h2>
            <p>
              Si aún no eres parte del proyecto, te invito a{" "}
              <strong>registrarte</strong> ✍️. Así podrás acceder a todas las{" "}
              <strong>funcionalidades</strong> 🚀 que tengo para ti y hacer que
              la escuela sea aún más easy 4 u.
            </p>
            <a href="/register" className="btn-register">
              ✨ Registrarse 👈
            </a>
          </div>
        </section>
      </main>

      <footer className="footer-home">
        <a href="#" className="logo">
          EASY
        </a>

        <p className="copy">
          &copy; {new Date().getFullYear()} Very Easy. Todos los derechos
          reservados.
        </p>

        <p className="name">Aldahir M²</p>
      </footer>
    </div>
  );
}

export default Home;
