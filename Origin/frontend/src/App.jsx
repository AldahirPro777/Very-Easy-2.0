import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubPagesRoutes from "./SubPages.routes.jsx";

//* MAIN
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

//* Not Found pages
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/others/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/*"
          element={<ProtectedRoute element={<SubPagesRoutes />} />}
        /> */}
        <Route path="/*" element={<SubPagesRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
