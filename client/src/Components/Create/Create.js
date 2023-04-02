import "./styles/create.css";

import { useForm } from "../../hooks/useForm";
import { useProductContext } from "../../contexts/ProductContext";
import { useState } from "react";

export const Create = () => {
  const { onCreateSubmit } = useProductContext();
  const { changeHandler, onSubmit, values } = useForm(onCreateSubmit, {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const [createErrs, setCreateErrs] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",

  });

  const pattern =
    /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/gm;

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === "title" && value.length < 3) {
      errors.title = "Title must be at least 6 characters long!";
    }

    if (e.target.name === "description" && value.length < 6) {
      errors.description = "Description must be at least 6 characters long!";
    }

    if (e.target.name === "imageUrl") {
      const result = pattern.exec(value);
      if (result === null) {
        errors.imageUrl = "Please provide valid URL";
      }
    }

    if (e.target.name === "price") {
      const isString = Number.isNaN(Number(value))
      if (isString) {
        errors.price = "Price need to be a number!";
      }
    }

    setCreateErrs(errors);
  };
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
            onBlur={formValidate}
          />
          {createErrs.title && <p className="field">{createErrs.title}</p>}
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
            onBlur={formValidate}
          />
          {createErrs.description && (
            <p className="field">{createErrs.description}</p>
          )}
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
            onBlur={formValidate}
          />
          {createErrs.imageUrl && (
            <p className="field">{createErrs.imageUrl}</p>
          )}
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
            onBlur={formValidate}
          />
          {createErrs.price && <p className="field">{createErrs.price}</p>}
        </div>

        <input type="submit" value="CREATE" className="btn" />
      </form>
    </section>
  );
};
