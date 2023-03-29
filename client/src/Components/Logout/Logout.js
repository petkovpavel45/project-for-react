import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

export const Logout = () => {
  const { onLogout } = useAuthContext()

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to={"/"} />;
};
