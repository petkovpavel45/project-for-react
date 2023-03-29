import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { productServiceFactory } from "../Services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const productService = productServiceFactory();

  useEffect(() => {
    productService.getAll().then((result) => {
      setProducts(result);
    });
  }, []);

  const onCreateSubmit = async (data) => {
    const newProduct = await productService.create(data);
    setProducts((state) => [...state, newProduct]);
    navigate("/products");
  };

  const onEditSubmit = async (values) => {
    const result = await productService.edit(values._id, values);
    setProducts((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );
    navigate(`/products/${values._id}`);
  };

  const getProduct = (productId) => {
    return products.find((product) => product._id === productId);
  };

  const deleteProduct = (productId) => {
    setProducts((state) =>
      state.filter((product) => product._id !== productId)
    );
  };

  const context = {
    products,
    onCreateSubmit,
    onEditSubmit,
    deleteProduct,
    getProduct,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  return context;
};
