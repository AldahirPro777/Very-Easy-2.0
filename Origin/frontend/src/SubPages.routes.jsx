import { Routes, Route } from "react-router-dom";

//* Sub-pages
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/sub-pages/Dashboard.jsx";
import Calendar from "./pages/sub-pages/Calendar.jsx";
import Blog from "./pages/sub-pages/Blog.jsx";
import StudyResources from "./pages/sub-pages/StudyResources.jsx";
import Classroom from "./pages/sub-pages/Classroom.jsx";
import Frases from "./pages/sub-pages/Frases.jsx";
import AdminPanel from "./pages/sub-pages/AdminPanel.jsx";
import Profile from "./pages/sub-pages/Profile.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/sub-pages/dashboard" element={<Dashboard />} />
      <Route path="/sub-pages/calendario" element={<Calendar />} />
      <Route path="/sub-pages/studyResources" element={<StudyResources />} />
      <Route path="/sub-pages/classroom" element={<Classroom />} />
      <Route path="/sub-pages/blog" element={<Blog />} />
      <Route path="/sub-pages/frases" element={<Frases />} />
      <Route path="/sub-pages/adminPanel" element={<AdminPanel />} />
      <Route path="/sub-pages/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
