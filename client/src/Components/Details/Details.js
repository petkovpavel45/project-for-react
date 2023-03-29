import './styles/details.css'

import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useService } from "../../hooks/useService";

import { AuthContext } from "../../contexts/AuthContext";
import { productServiceFactory } from "../../Services/productService";
export const Details = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const productService = useService(productServiceFactory);
  const { isAuthenticated, userId } = useContext(AuthContext);
  const isOwner = userId === product._ownerId;
  useEffect(() => {
    productService.getOne(productId).then((result) => setProduct(result));
  }, [productId]);

  const onDeleteClick = async () => {
    await productService.deleteProduct(product._id);
    
    navigate("/products");
  };
  return (
    <section id="details">
      <h2 className="details-heading">Product Detail</h2>
      <div className="details-container">
        <div className="img-wrapper">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="details-img"
          />
        </div>
        <div className="details-info">
          <h3 className="details-title">{product.title}</h3>
          <p className="details-desc">{product.description}</p>
          <p className="details-price">Product price: {product.price}$</p>
          {isOwner && (
            <>
              <Link to={`/products/${productId}/edit`} className="btn">EDIT</Link>
              <button className="btn remove-btn" onClick={onDeleteClick}>REMOVE</button>
            </>
          )}
          {!isOwner && isAuthenticated && (
            <button className="btn">ADD TO CART</button>
          )}
        </div>
      </div>
    </section>
  );
};
