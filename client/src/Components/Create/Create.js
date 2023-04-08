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

  const [createErrs, setCreateErrs] = useState({});

  const imageUrlPattern =
    /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/gm;

  const formValidate = (e) => {
    const value = e.target.value;

    if (e.target.name === "title") {
      let titleErr = "";
      if (value.length < 3) {
        titleErr = "Title must be at least 3 characters long!";
        setCreateErrs((state) => ({ ...state, titleErr }));
      }
      setCreateErrs((state) => ({ ...state, titleErr }));
    }

    if (e.target.name === "description") {
      let descriptionErr = "";
      if (value.length < 6) {
        descriptionErr = "Description must be at least 6 characters long!";
        setCreateErrs((state) => ({ ...state, descriptionErr }));
      }
      setCreateErrs((state) => ({ ...state, descriptionErr }));
    }

    if (e.target.name === "imageUrl") {
      const result = imageUrlPattern.exec(value);
      let imageUrlErr = "";
      if (result === null) {
        imageUrlErr = "Please provide valid URL";
        setCreateErrs((state) => ({ ...state, imageUrlErr }));
      }
      setCreateErrs((state) => ({ ...state, imageUrlErr }));
    }

    if (e.target.name === "price") {
      const isString = Number.isNaN(Number(value));
      let priceErr = "";
      if (isString) {
        priceErr = "Price need to be a number!";
        setCreateErrs((state) => ({ ...state, priceErr }));
      }
      setCreateErrs((state) => ({ ...state, priceErr }));
    }
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
            data-testid="title"
          />
          {createErrs.titleErr && (
            <p data-testid="titleError" className="field">{createErrs.titleErr}</p>
          )}
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
            data-testid="description"
          />
          {createErrs.descriptionErr && (
            <p data-testid="descriptionError" className="field">{createErrs.descriptionErr}</p>
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
            data-testid="imageUrl"
          />
          {createErrs.imageUrlErr && (
            <p data-testid="imageUrlError" className="field">{createErrs.imageUrlErr}</p>
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
            data-testid="price"
          />
          {createErrs.priceErr && (
            <p data-testid="priceError" className="field">{createErrs.priceErr}</p>
          )}
        </div>

        <input type="submit" value="CREATE" data-testid="create" className="btn" />
      </form>
    </section>
  );
};
