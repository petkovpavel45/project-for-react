import "../styles/products.css";

import { Link } from "react-router-dom";
import { cartServiceFactory } from "../../../Services/cartService";
import { useService } from "../../../hooks/useService";
import { useCartContext } from "../../../contexts/CartContext";
import { useAuthContext } from "../../../contexts/AuthContext";

export const Product = ({
  title,
  imageUrl,
  price,
  _id,
  description,
  _ownerId,
}) => {
  const { setItems, setTotal } = useCartContext();
  const cartService = useService(cartServiceFactory);
  const { userId } = useAuthContext();
  const onAddItem = async () => {
    if (_ownerId === userId) {
      return;
    }
    const result = await cartService.addInCart({
      title,
      imageUrl,
      price,
      description,
    });
    setItems((state) => [...state, result]);
    setTotal((oldPrice) => (oldPrice += Number(result.price)));
  };

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img className="product-img" src={imageUrl} alt="p1" />
        <button onClick={onAddItem} className="btn-cart">
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
        <Link to={`/products/${_id}`} className="btn btn-detail">
          DETAILS
        </Link>
      </div>
    </div>
  );
};
