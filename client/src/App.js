import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Create } from "./Components/Create/Create";
import { Details } from "./Components/Details/Details";

import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Login } from "./Components/Login/Login";
import { Products } from "./Components/Products/Products";
import { Register } from "./Components/Register/Register";
import { WhyUs } from "./Components/WhyUs/WhyUs";
import { Payment } from "./Components/Payment/Payment";
import { Profile } from "./Components/Profile/Profile";
import { authServiceFactory } from "./Services/authService";
import { Logout } from "./Components/Logout/Logout";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/products");
    } catch (error) {
      console.log(`Error => ${error}`);
    }
  };
  const onRegisterSubmit = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/products");
    } catch (error) {
      console.log(`Error => ${error}`);
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
  };

  return (
    <AuthContext.Provider value={context}>
      <main className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create-equipment" element={<Create />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Details />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
