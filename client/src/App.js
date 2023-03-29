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

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <main className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:productId" element={<Details />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route element={<RouteGuard />}>
                <Route path="/profile/:profileId" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/create-equipment" element={<Create/>}/>
                <Route path="/products/:productId/edit" element={
                  <ProductOwner>
                    <Edit />
                  </ProductOwner>
                }/>
                <Route path="/payment" element={<Payment />} />
            </Route>
            <Route path="*" element={<Hero />} />
          </Routes>
          <Footer />
        </main>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
