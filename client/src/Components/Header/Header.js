/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const Header = () => {
  const { username, isAuthenticated } = useContext(AuthContext);

  return (
    <header id="header">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" className="logo" />
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
                  <Link to="/profile">PROFILE</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link to="/payment">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};
