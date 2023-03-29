import profileLogo from "./images/profile.png";
import './styles/user.css'

import { useForm } from "../../hooks/useForm";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { authServiceFactory } from "../../Services/authService";
export const Profile = () => {
  const { onProfileEditSubmit } = useContext(AuthContext);
  const authService = useService(authServiceFactory);
  const { changeHandler, changeValues, values } = useForm(onProfileEditSubmit, {
    email: "",
    username: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    authService.getMyProfile().then((result) => {
      changeValues(result);
    });
  }, []);

  return (
    <section id="profile">
      <form className="profile-form forms">
        <h3>My Profile</h3>
        <img src={profileLogo} alt="profile" className="profile-img" />
        <div className="details-container">
          <label htmlFor="email">Email:</label>
          <input
            className="profile-input"
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={changeHandler}
            style={{ all: "unset", marginLeft: "10px" }}
            disabled
          />

          {/* <p className="field">Email is not valid!</p> */}
        </div>

        <div className="details-container">
          <label htmlFor="username">Name:</label>
          <input
            className="profile-input"
            placeholder="johndoe32"
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={changeHandler}
            style={{ all: "unset", marginLeft: "10px" }}
            disabled
          />

          {/* <p className="field">Username must be at least 6 characters long!</p> */}
        </div>

        <div className="details-container">
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            className="profile-input"
            type="text"
            placeholder="0123456789"
            name="phoneNumber"
            id="phoneNumber"
            value={values.phoneNumber}
            onChange={changeHandler}
            style={{ all: "unset", marginLeft: "10px" }}
            disabled
          />

          {/* <p className="field">Phone number must be 10 digits!</p> */}
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
            style={{ all: "unset", marginLeft: "10px", width: '100px' }}
            disabled
          />

          {/* <p className="field">Phone number must be 10 digits!</p> */}
        </div>

        {/* <input type="submit" value="EDIT" id="edit" className="btn" /> */}
      </form>
    </section>
  );
};
