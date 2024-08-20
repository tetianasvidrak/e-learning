import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, role }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return !isLoggedIn ? (
    <Navigate to="/signin" />
  ) : role === user.role || role === "all" ? (
    children
  ) : (
    <Navigate to={`/${user.role}`} />
  );
};

export default ProtectedRoute;
