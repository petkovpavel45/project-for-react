export const Details = () => {
  return (
    <section id="details">
      <h2 className="details-heading">Product Detail</h2>
      <div className="details-container">
        <div className="img-wrapper">
          <img src="../../../public/images/p1.png" alt="p1" className="details-img" />
        </div>
        <div className="details-info">
          <h3 className="details-title">Treadmill X784-K2</h3>
          <p className="details-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            ratione iste quibusdam voluptatum facere aperiam vel, voluptatem
            dolor consectetur saepe.
          </p>
          <p className="details-price">Product price: 120$</p>
          <button className="btn">EDIT</button>
          <button className="btn remove-btn">REMOVE</button>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};
