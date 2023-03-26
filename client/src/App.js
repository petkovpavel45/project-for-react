import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "./contexts/AuthContext";
import { authServiceFactory } from "./Services/authService";
import { productServiceFactory } from "./Services/productService";

import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { WhyUs } from "./Components/WhyUs/WhyUs";

import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Profile } from "./Components/Profile/Profile";
import { Logout } from "./Components/Logout/Logout";
import { Payment } from "./Components/Payment/Payment";

import { Create } from "./Components/Create/Create";
import { Details } from "./Components/Details/Details";
import { Products } from "./Components/Products/Products";

import { Footer } from "./Components/Footer/Footer";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [products, setProducts] = useState([])
  const authService = authServiceFactory(auth.accessToken);
  const productService = productServiceFactory(auth.accessToken);
  
  useEffect(() => {
    productService.getAll().then((result) => {
      setProducts(result);
    });
  }, []);

  const onCreateSubmit = async (data) => {
    const newProduct = await productService.create(data);
    setProducts(state => [...state, newProduct]);
    navigate('/products')
  }

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
          <Route path="/payment" element={<Payment />} />

          <Route path="/create-equipment" element={<Create onCreateSubmit={onCreateSubmit}/>} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/products/:productId" element={<Details />} />

          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
