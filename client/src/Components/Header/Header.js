/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from "./images/logo.png";
import "./styles/header.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";

export const Header = ({ cartClicked }) => {
  const { username, isAuthenticated, userId } = useAuthContext();
  let { total } = useCartContext();
  return (
    <header id="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="nav-list" role="list">
        <li className="list">
          <Link to="/">HOME</Link>
        </li>
        <li className="list">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="list">
          <Link to="/why-us">WHY US</Link>
        </li>

        <li className="list">
          <Link to="/products">PRODUCTS</Link>
        </li>
        {isAuthenticated && (
          <li className="list">
            <Link to="/create-equipment">CREATE PRODUCT</Link>
          </li>
        )}
      </ul>
      <ul className="user-info" role="list">
        {isAuthenticated && <li data-testid="userTest">Welcome {username}!</li>}
        <li>
          <Link className="user">
            <i className="fa-regular fa-user"></i>
          </Link>
          <div className="dropdown-user">
            {!isAuthenticated ? (
              <ul role="list">
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link to="/register">REGISTER</Link>
                </li>
              </ul>
            ) : (
              <ul role="list">
                <li>
                  <Link to="/logout">LOGOUT</Link>
                </li>
                <li>
                  <Link to={`/profile/${userId}`}>PROFILE</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="total-Price">
          <Link onClick={cartClicked}>
            <i className="fa-solid fa-cart-shopping"></i>
            {isAuthenticated && <span>${total?.toFixed(2)}</span>}
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};
