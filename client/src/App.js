import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <main className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-equipment" element={<Create />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Details />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
