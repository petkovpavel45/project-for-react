/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/cart.css'
export const Payment = () => {
  return (
    <div className="overlay-payment">
      <div className="backdrop"></div>
      <div className="modal">
        <section id="cart">
          <h2 className="cart-title">
            YOUR BASKET <span className="total-price">$168.00</span>
          </h2>
          {/* <div className="no-items">There is no items in basket</div> */}
          <div className="cart-items">
            <div className="item-info">
              <div className="item-img-wrapper">
                <img src="images/p1.png" alt="" className="cart-img" />
              </div>
              <div className="item-wrapper">
                <p className="item-name">Treadmill</p>
                <p className="item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, facilis.
                </p>
                <p className="item-price">$100.00</p>
                <a href="#" className="trash">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <hr />
            </div>
            <div className="item-info">
              <div className="item-img-wrapper">
                <img src="images/p3.png" alt="" className="cart-img" />
              </div>
              <div className="item-wrapper">
                <p className="item-name">Treadmill</p>
                <p className="item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, facilis.
                </p>
                <p className="item-price">$100.00</p>
                <a href="#" className="trash">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <hr />
            </div>
            <div className="item-info">
              <div className="item-img-wrapper">
                <img src="images/p3.png" alt="" className="cart-img" />
              </div>
              <div className="item-wrapper">
                <p className="item-name">Treadmill</p>
                <p className="item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, facilis.
                </p>
                <p className="item-price">$100.00</p>
                <a href="#" className="trash">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <hr />
            </div>
          </div>
          <button className="order-btn">ORDER NOW</button>
        </section>
      </div>
    </div>
  );
};
