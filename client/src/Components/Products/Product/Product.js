import { Link } from "react-router-dom";

export const Product = ({
  title,
  // description,
  imageUrl,
  price
}) => {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img className="product-img" src={imageUrl} alt="p1" />
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
      <h3 className="card-title">{title}</h3>
      <div className="price-details-wrapper">
        <p className="card-price">{price}$</p>
        <Link to="/products/:productId" className="btn btn-detail">
          DETAILS
        </Link>
      </div>
    </div>
  );
};
