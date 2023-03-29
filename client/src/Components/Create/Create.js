import "./styles/create.css";

import { useForm } from "../../hooks/useForm";
import { useProductContext } from "../../contexts/ProductContext";

export const Create = () => {
  const { onCreateSubmit } = useProductContext();
  const { changeHandler, onSubmit, values } = useForm(onCreateSubmit, {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  return (
    <section id="create-product">
      <form className="create-form" method="POST" onSubmit={onSubmit}>
        <h2>Create Product</h2>
        <div className="details-container">
          <label htmlFor="title">Title:</label>
          <input
            className="profile-input"
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={changeHandler}
          />

          {/* <p className="field">Title must be at least 3 characters long!</p> */}
        </div>

        <div className="details-container">
          <label htmlFor="description">Description:</label>
          <input
            className="profile-input"
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={changeHandler}
          />

          {/* <p className="field">
            Description must be at least 6 characters long!
          </p> */}
        </div>

        <div className="details-container">
          <label htmlFor="imageUrl">Image:</label>
          <input
            className="profile-input"
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
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
            value={values.price}
            onChange={changeHandler}
          />
          {/* <p className="field">Price need to be a number!</p> */}
        </div>

        <input type="submit" value="CREATE" className="btn" />
      </form>
    </section>
  );
};
