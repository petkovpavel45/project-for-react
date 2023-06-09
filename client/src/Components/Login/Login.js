import "./styles/user.css";
import profileLogo from "./images/profile.png";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { onLoginSubmit, serverErrors } = useAuthContext();
  const { changeHandler, onSubmit, values } = useForm(onLoginSubmit, {
    email: "",
    password: "",
  });

  return (
    <section id="login">
      <form className="forms" method="POST" onSubmit={onSubmit}>
        <h2>Login</h2>
        <img src={profileLogo} alt="profileLogo" className="profile-img" />
        {serverErrors?.login && <p  data-testid="errorTest" className="field" style={{textAlign: 'center'}}>{serverErrors?.login}</p>}
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
            data-testid="email"
          />
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
            data-testid="password"
          />

        </div>

        <input type="submit" data-testid="login" value="LOGIN" className="btn" />

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
