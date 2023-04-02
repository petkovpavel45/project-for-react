import "./styles/user.css";
import profileLogo from "./images/profile.png";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

export const Register = () => {
  const [registerErrs, setRegisterErrs] = useState({
    email: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
    repeatPassword: "",
  });
  const { onRegisterSubmit } = useAuthContext();
  const { changeHandler, onSubmit, values } = useForm(onRegisterSubmit, {
    email: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
    repeatPassword: "",
  });
  const pattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === "email") {
      let result = pattern.exec(value);
      if (result === null) {
        errors.email = "Please enter a valid email address!";
      }
    }
    if (e.target.name === "username" && value.length < 6) {
      errors.username = "Username must be at least 6 characters long!";
    }

    if (e.target.name === "phoneNumber" && value.length !== 10) {
      errors.phoneNumber = "Phone number must be 10 digits!";
    }

    if (e.target.name === "address" && value.length < 4) {
      errors.address = "Address must be at least 4 characters long!";
    }

    if (e.target.name === "password" && value.length < 6) {
      errors.password = "Password must be at least 6 characters long!";
    }

    if (e.target.name === "repeatPassword" && value !== values.password) {
      errors.repeatPassword = "Passwords must match!";
    }

    setRegisterErrs(errors);
  };

  return (
    <section id="register">
      <form className="register-form" method="POST" onSubmit={onSubmit}>
        <h2>Register</h2>
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
            onBlur={formValidate}
          />
          {registerErrs.email && <p className="field">{registerErrs.email}</p>}
        </div>

        <div className="details-container">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="johndoe32"
            className="profile-input"
            value={values.username}
            onChange={changeHandler}
            onBlur={formValidate}
          />
          {registerErrs.username && (
            <p className="field">{registerErrs.username}</p>
          )}
        </div>

        <div className="details-container">
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            className="profile-input"
            type="number"
            placeholder="0123456789"
            name="phoneNumber"
            id="phoneNumber"
            value={values.phoneNumber}
            onChange={changeHandler}
            onBlur={formValidate}
          />
          {registerErrs && <p className="field">{registerErrs.phoneNumber}</p>}
        </div>

        <div className="details-container">
          <label htmlFor="address">Address:</label>
          <input
            className="profile-input"
            type="text"
            placeholder="Main street 1"
            name="address"
            id="address"
            value={values.address}
            onChange={changeHandler}
            onBlur={formValidate}
          />
          {registerErrs.address && (
            <p className="field">{registerErrs.address}</p>
          )}
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
            onBlur={formValidate}
          />
          {registerErrs.password && (
            <p className="field">{registerErrs.password}</p>
          )}
        </div>

        <div className="details-container">
          <label htmlFor="password">Repeat password:</label>
          <input
            type="password"
            name="repeatPassword"
            id="password"
            placeholder="**********"
            className="profile-input"
            value={values.repeatPassword}
            onChange={changeHandler}
            onBlur={formValidate}
          />
          {registerErrs.repeatPassword && (
            <p className="field">{registerErrs.repeatPassword}</p>
          )}
        </div>

        <input type="submit" value="REGISTER" className="btn" />

        <p>
          <span>
            If you already have a profile please{" "}
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="sign" to="/login">
              Sign in
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};
