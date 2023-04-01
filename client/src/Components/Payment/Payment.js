/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/cart.css";
import { Item } from "./Item";
import { useCartContext } from "../../contexts/CartContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export const Payment = () => {
  const { items, total, setItems, setTotal } = useCartContext();
  const { userId } = useAuthContext();
  let ownerItems = items.filter((x) => x._ownerId === userId);
  const navigate = useNavigate();
  const onOrderClick = () => {
    setItems([]);
    setTotal(0)
    navigate('/completed')
  }
  // ownerItems.push(total);
  return (
    <div className="overlay-payment">
      <div className="backdrop"></div>
      <div className="modal">
        <section id="cart">
          <h2 className="cart-title">
            YOUR BASKET <span className="total-price">${total.toFixed(2)}</span>
          </h2>
          {ownerItems.length === 0 && (
            <div className="no-items">There is no items in basket</div>
          )}
          <div className="cart-items">
            {ownerItems.map((x) => (
              <Item key={x._id} {...x} />
            ))}
          </div>
          <button onClick={onOrderClick} className="order-btn">ORDER NOW</button>
        </section>
      </div>
    </div>
  );
};
