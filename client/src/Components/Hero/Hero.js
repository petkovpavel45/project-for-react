import { Link } from "react-router-dom";
import './styles/hero.css'
import heroImg from './images/slider-bg.jpg'
export const Hero = () => {
  return (
    <section id="hero">
      <div className="overlay"></div>
      <div className="hero-img-container">
        <img src={heroImg} alt="heroImg" className="hero-img" />
      </div>
      <div className="hero-card">
        <h1 className="hero-title">BEST FITNESS EQUIPMENTS</h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi iste
          modi quod illo deleniti ratione!
        </p>
        <Link to={'/products'} className="btn">READ MORE</Link>
      </div>
    </section>
  );
};
