/* eslint-disable jsx-a11y/anchor-is-valid */
export const Register = () => {
  return (
    <section id="register">
      <form className="register-form">
        <h2>Register</h2>
        <img src="images/profile.png" alt="profile" className="profile-img" />
        <div className="details-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="profile-input"
          />

          <p className="field">Please enter a valid email address!</p>
        </div>

        <div className="details-container">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="johndoe32"
            className="profile-input"
          />

          <p className="field">Username must be at least 6 characters long!</p>
        </div>

        <div className="details-container">
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            className="profile-input"
            type="number"
            placeholder="0123456789"
            name="phoneNumber"
            id="phoneNumber"
          />

          <p className="field">Phone number must be 10 digits!</p>
        </div>

        <div className="details-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="profile-input"
          />

          <p className="field">Password must be at least 6 characters long!</p>

          <p className="field">Passwords must match!</p>
        </div>

        <div className="details-container">
          <label htmlFor="password">Repeat password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="profile-input"
          />

          <p className="field">Passwords must match!</p>
        </div>

        <input type="submit" value="REGISTER" className="btn" />

        <p>
          <span>
            If you already have a profile please{" "}
            <i className="fa-solid fa-arrow-right"></i>
            <a className="sign" href="#">
              Sign in
            </a>
          </span>
        </p>
      </form>
    </section>
  );
};
