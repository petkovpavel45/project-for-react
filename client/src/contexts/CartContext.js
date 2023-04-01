import { createContext, useState, useEffect, useContext } from "react";
import { useService } from "../hooks/useService";
import { cartServiceFactory } from "../Services/cartService";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const cartService = useService(cartServiceFactory);
  
  useEffect(() => {
    cartService.getAll().then((result) => {
      setItems(result);
    });
  }, []);

  const deleteItem = (productId) => {
    setItems((state) =>
      state.filter((item) => item._id !== productId),
    );

  };

  const context = {
    items,
    setItems,
    deleteItem,
    total,
    setTotal
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};
