import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={`/${user.role}`} /> : children;
};

export default PublicRoute;
