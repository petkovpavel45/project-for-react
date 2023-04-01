/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/cart.css";
import { Item } from "./Item";
import { useCartContext } from "../../contexts/CartContext";
import { useAuthContext } from "../../contexts/AuthContext";
export const Payment = () => {
  const { items, total } = useCartContext();
  const { userId } = useAuthContext();
  const ownerItems = items.filter((x) => x._ownerId === userId);
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
          <button className="order-btn">ORDER NOW</button>
        </section>
      </div>
    </div>
  );
};
