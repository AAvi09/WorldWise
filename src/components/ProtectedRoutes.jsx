import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuthentication";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};
export default ProtectedRoutes;
