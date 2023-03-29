import profileLogo from './images/profile.png'
import './styles/user.css'
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { changeHandler, onSubmit, values } = useForm(onLoginSubmit, {
    email: "",
    password: "",
  });
  return (
    <section id="login">
      <form className="forms" method="POST" onSubmit={onSubmit}>
        <h2>Login</h2>
        <img src={profileLogo} alt="profileLogo" className="profile-img" />
        <div className="details-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="profile-input"
            value={values.email}
            onChange={changeHandler}
          />

          {/* <p className="field">Email or Password is incorrect!</p> */}
        </div>

        <div className="details-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="profile-input"
            value={values.password}
            onChange={changeHandler}
          />

          {/* <p className="field">Email or Password is incorrect!</p> */}
        </div>

        <input type="submit" value="LOGIN" className="btn" />

        <p>
          <span>
            If you don't have profile please{" "}
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="sign" to="/register">
              Sign up
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};
