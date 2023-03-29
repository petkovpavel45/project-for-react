import './styles/why-us.css'

export const WhyUs = () => {
  return (
    <section id="why-us">
      <h2 className="why-us-title">WHY CHOOSE US</h2>
      <div className="cards">
        <div className="card">
          <i className="fa-solid fa-truck-fast"></i>
          <h3 className="card-title">FREE DELIVERY</h3>
          <p className="card-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            repellat error asperiores qui iure explicabo?
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-dolly"></i>
          <h3 className="card-title">EASY RETURN</h3>
          <p className="card-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            repellat error asperiores qui iure explicabo?
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-headset"></i>
          <h3 className="card-title">24/7 Support</h3>
          <p className="card-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            repellat error asperiores qui iure explicabo?
          </p>
        </div>
      </div>
    </section>
  );
};
