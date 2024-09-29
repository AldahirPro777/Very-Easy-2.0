import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
