import "./styles/create.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

        <input type="submit" value="SAVE" className="btn" />
      </form>
    </section>
  );
};
