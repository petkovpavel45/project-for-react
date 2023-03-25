/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section id="products">
      <h2 className="products-title">PRODUCTS</h2>
      <div className="no-items">
        <p>There is no equipments in products</p>
      </div>
      <div className="products-cards">
        <div className="product-card">
          <div className="img-wrapper">
            <img className="product-img" src="images/p1.png" alt="p1" />
            <button className="btn-cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <span className="ratings">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <h3 className="card-title">Gym Equipment</h3>
          <div className="price-details-wrapper">
            <p className="card-price">$140</p>
            <Link to="/products/:productId" className="btn btn-detail">
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
