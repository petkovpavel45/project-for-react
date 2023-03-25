export const Create = () => {
  return (
    <section id="create-product">
      <form className="create-form">
        <h2>Create Product</h2>
        <div className="details-container">
          <label htmlFor="title">Title:</label>
          <input
            className="profile-input"
            type="text"
            name="title"
            id="title"
          />

          <p className="field">Title must be at least 3 characters long!</p>
        </div>

        <div className="details-container">
          <label htmlFor="description">Description:</label>
          <input
            className="profile-input"
            type="text"
            name="description"
            id="description"
          />

          <p className="field">
            Description must be at least 6 characters long!
          </p>
        </div>

        <div className="details-container">
          <label htmlFor="imageUrl">Image:</label>
          <input
            className="profile-input"
            type="text"
            name="imageUrl"
            id="imageUrl"
          />

          <p className="field">Please provide valid URL!</p>
        </div>

        <div className="details-container">
          <label htmlFor="price">Price:</label>
          <input
            className="profile-input"
            type="text"
            name="price"
            id="price"
          />
          <p className="field">Price need to be a number!</p>
        </div>

        <input type="submit" value="CREATE" className="btn" />
      </form>
    </section>
  );
};
