import "./styles/reset.css";
import "./styles/style.css";
import "./styles/responsive.css";

import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";

import { RouteGuard } from "./Components/Guards/RouteGuard";
import { ProductOwner } from "./Components/Guards/ProductOwner";

import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { WhyUs } from "./Components/WhyUs/WhyUs";

import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Profile } from "./Components/Profile/Profile";
import { Logout } from "./Components/Logout/Logout";
import { Payment } from "./Components/Payment/Payment";

import { Products } from "./Components/Products/Products";
import { Create } from "./Components/Create/Create";
import { Details } from "./Components/Details/Details";
import { Edit } from "./Components/Edit/Edit";

import { Footer } from "./Components/Footer/Footer";
import { CartProvider } from "./contexts/CartContext";
import { Completed } from "./Components/Completed/Completed";
import { LoggedGuard } from "./Components/Guards/LoggedGuard";
import { useState } from "react";
function App() {
  const [isCartClicked, setCartClicked] = useState(false);
  const cartClicked = () => {
    setCartClicked(true);
  };
  const cartClosed = () => {
    setCartClicked(false);
  }
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <main className="container">
            {isCartClicked && <Payment cartClosed={cartClosed} />}
            <Header cartClicked={cartClicked} />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route element={<LoggedGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<Details />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route element={<RouteGuard />}>
                <Route path="/profile/:profileId" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/create-equipment" element={<Create />} />
                <Route path="/completed" element={<Completed />} />
                <Route
                  path="/products/:productId/edit"
                  element={
                    <ProductOwner>
                      <Edit />
                    </ProductOwner>
                  }
                />
              </Route>
              <Route path="*" element={<Hero />} />
            </Routes>
            <Footer />
          </main>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
