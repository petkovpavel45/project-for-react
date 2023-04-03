import "./styles/create.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useService } from "../../hooks/useService";
import { useForm } from "../../hooks/useForm";
import { useProductContext } from "../../contexts/ProductContext";

import { productServiceFactory } from "../../Services/productService";

export const Edit = () => {
  const { onEditSubmit } = useProductContext();
  const { productId } = useParams();
  const productService = useService(productServiceFactory);
  const { changeHandler, changeValues, onSubmit, values } = useForm(
    onEditSubmit,
    {
      _id: "",
      title: "",
      description: "",
      imageUrl: "",
      price: "",
    }
  );

  const [editErrs, setEditErrs] = useState({});

  const pattern =
    /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/gm;

  const formValidate = (e) => {
    const value = e.target.value;

    if (e.target.name === "title") {
      let titleErr = "";
      if (value.length < 3) {
        titleErr = "Title must be at least 6 characters long!";
        setEditErrs((state) => ({ ...state, titleErr }));
      }
      setEditErrs((state) => ({ ...state, titleErr }));
    }

    if (e.target.name === "description") {
      let descriptionErr = "";
      if (value.length < 6) {
        descriptionErr = "Description must be at least 6 characters long!";
        setEditErrs((state) => ({ ...state, descriptionErr }));
      }
      setEditErrs((state) => ({ ...state, descriptionErr }));
    }

    if (e.target.name === "imageUrl") {
      const result = pattern.exec(value);
      let imageUrlErr = "";
      if (result === null) {
        imageUrlErr = "Please provide valid URL";
        setEditErrs((state) => ({ ...state, imageUrlErr }));
      }
      setEditErrs((state) => ({ ...state, imageUrlErr }));
    }

    if (e.target.name === "price") {
      const isString = Number.isNaN(Number(value));
      let priceErr = "";
      if (isString) {
        priceErr = "Price need to be a number!";
        setEditErrs((state) => ({ ...state, priceErr }));
      }
      setEditErrs((state) => ({ ...state, priceErr }));
    }
  };

  useEffect(() => {
    productService.getOne(productId).then((result) => {
      changeValues(result);
    });
  }, [productId]);

  return (
    <section id="create-product">
      <form className="create-form" method="PUT" onSubmit={onSubmit}>
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
          {editErrs.titleErr && <p className="field">{editErrs.titleErr}</p>}
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
          {editErrs.descriptionErr && (
            <p className="field">{editErrs.descriptionErr}</p>
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
          {editErrs.imageUrlErr && (
            <p className="field">{editErrs.imageUrlErr}</p>
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
          {editErrs.priceErr && (
            <p className="field">{editErrs.priceErr}</p>
          )}
        </div>

        <input type="submit" value="SAVE" className="btn" />
      </form>
    </section>
  );
};
