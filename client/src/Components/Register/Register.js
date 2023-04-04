import "./styles/user.css";
import profileLogo from "./images/profile.png";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

export const Register = () => {
  const { onRegisterSubmit, serverErrors } = useAuthContext();
  const [registerErrs, setRegisterErrs] = useState({});
  const { changeHandler, onSubmit, values } = useForm(onRegisterSubmit, {
    email: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
    repeatPassword: "",
  });
  const emailPattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const phoneNumberPattern = /^((\+359)|0)?(87|88|89)(\d{7})$/

  const formValidate = (e) => {
    const value = e.target.value;

    if (e.target.name === "email") {
      let result = emailPattern.exec(value);
      let emailErr = "";
      if (result === null) {
        emailErr = "Please enter a valid email address!";
        setRegisterErrs((state) => ({ ...state, emailErr }));
      }
      setRegisterErrs((state) => ({ ...state, emailErr }));
    }
    if (e.target.name === "username") {
      let usernameErr = "";
      if (value.length < 6) {
        usernameErr = "Username must be at least 6 characters long!";
        setRegisterErrs((state) => ({ ...state, usernameErr }));
      }
      setRegisterErrs((state) => ({ ...state, usernameErr }));
    }

    if (e.target.name === "phoneNumber") {
      let result = phoneNumberPattern.exec(value);
      let phoneNumberErr = "";
      if (result === null) {
        phoneNumberErr = "Please enter a valid Phone number!";
        setRegisterErrs((state) => ({ ...state, phoneNumberErr }));
      }
      setRegisterErrs((state) => ({ ...state, phoneNumberErr }));
    }

    if (e.target.name === "address") {
      let addressErr = "";
      if (value.length < 4) {
        addressErr = "Address must be at least 4 characters long!";
        setRegisterErrs((state) => ({ ...state, addressErr }));
      }
      setRegisterErrs((state) => ({ ...state, addressErr }));
    }

    if (e.target.name === "password") {
      let passwordErr = "";

      if (value.length < 6) {
        passwordErr = "Password must be at least 6 characters long!";
        setRegisterErrs((state) => ({ ...state, passwordErr }));
      }
      setRegisterErrs((state) => ({ ...state, passwordErr }));
    }

    if (e.target.name === "repeatPassword") {
      let repeatPasswordErr = "";
      if (value !== values.password) {
        repeatPasswordErr = "Passwords must match!";
        setRegisterErrs((state) => ({ ...state, repeatPasswordErr }));
      }
      setRegisterErrs((state) => ({ ...state, repeatPasswordErr }));
    }
  };

  return (
    <section id="register">
      <form className="register-form" method="POST" onSubmit={onSubmit}>
        <h2>Register</h2>
        <img src={profileLogo} alt="profileLogo" className="profile-img" />
        {serverErrors.register && (
          <p className="field" style={{ textAlign: "center" }}>
            {serverErrors.register}
          </p>
        )}
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
          {registerErrs.emailErr && (
            <p className="field">{registerErrs.emailErr}</p>
          )}
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
          {registerErrs.usernameErr && (
            <p className="field">{registerErrs.usernameErr}</p>
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
          {registerErrs.phoneNumberErr && (
            <p className="field">{registerErrs.phoneNumberErr}</p>
          )}
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
          {registerErrs.addressErr && (
            <p className="field">{registerErrs.addressErr}</p>
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
          {registerErrs.passwordErr && (
            <p className="field">{registerErrs.passwordErr}</p>
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
          {registerErrs.repeatPasswordErr && (
            <p className="field">{registerErrs.repeatPasswordErr}</p>
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
