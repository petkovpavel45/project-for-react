/* eslint-disable jsx-a11y/anchor-is-valid */
export const Login = () => {
  return (
    <section id="login">
      <form className="forms">
        <h2>Login</h2>
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

          <p className="field">Email or Password is incorrect!</p>
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

          <p className="field">Email or Password is incorrect!</p>
        </div>

        <input type="submit" value="LOGIN" className="btn" />

        <p>
          <span>
            If you don't have profile please{" "}
            <i className="fa-solid fa-arrow-right"></i>
            <a className="sign" href="#">
              Sign up
            </a>
          </span>
        </p>
      </form>
    </section>
  );
};
