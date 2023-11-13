import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../Services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [serverErrors, setServerErrs] = useState({});
  let errors = {};
  const navigate = useNavigate();

  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/products");
      setServerErrs(null)
    } catch (error) {
      errors.login = error
      setServerErrs(errors)
    }
  };
  const onRegisterSubmit = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword !== registerData.password) {
      setServerErrs(state => ({...state, error: 'Passwords must match!'}))
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);
      setServerErrs(null)
      navigate("/products");
    } catch (error) {
      errors.register = error
      setServerErrs(errors)
      
    }
  };
  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    phoneNumber: auth.phoneNumber,
    username: auth.username,
    serverErrors
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
