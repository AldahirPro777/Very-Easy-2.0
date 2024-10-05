//* Layouts
import Navbar from "../../components/layouts/Navbar.jsx";
import Footer from "../../components/layouts/Footer.jsx";

function AdminPanel() {
  return (
    <div>
      <Navbar />
      <div className="sub-pages-body">AdminPanel</div>

      <Footer />
    </div>
  );
}

export default AdminPanel;
