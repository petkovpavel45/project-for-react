export const Hero = () => {
  return (
    <section id="hero">
      <div className="overlay"></div>
      <div className="hero-img-container">
        <img src="images/slider-bg.jpg" alt="" className="hero-img" />
      </div>
      <div className="hero-card">
        <h1 className="hero-title">BEST FITNESS EQUIPMENTS</h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi iste
          modi quod illo deleniti ratione!
        </p>
        <button className="btn">READ MORE</button>
      </div>
    </section>
  );
};
