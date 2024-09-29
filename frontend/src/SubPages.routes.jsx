import { Routes, Route } from "react-router-dom";

//* Sub-pages
import Dashboard from "./pages/Dashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
