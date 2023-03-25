export const Profile = () => {
  return (
    <section id="profile">
      <form className="profile-form forms">
        <h3>My Profile</h3>
        <img src="images/profile.png" alt="" className="profile-img" />
        <div className="details-container">
          <label htmlFor="email">Email:</label>
          <input
            className="profile-input"
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            id="email"
          />

          <p className="field">Email is not valid!</p>
        </div>

        <div className="details-container">
          <label htmlFor="username">Name:</label>
          <input
            className="profile-input"
            placeholder="johndoe32"
            type="text"
            name="username"
            id="username"
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

        <input type="submit" value="EDIT" id="edit" className="btn" />
      </form>
    </section>
  );
};
