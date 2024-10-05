//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

function Classroom() {
  return (
    <div>
      {/* 
      {error ? (
        <p className="error">{error}</p>
      ) : user ? (
        <> */}
      <Navbar />
      <div className="sub-pages-body">Classroom</div>
      <Footer />
      {/* </>
      ) : (
        <p>Cargando datos del usuario...</p>
      )} */}
    </div>
  );
}

export default Classroom;
