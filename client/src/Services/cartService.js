import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/cart";

export const cartServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(`${baseUrl}`);
    return result;
  };

  const addInCart = async (itemData) => {
    const result = await request.post(baseUrl, itemData);
    return result;
  };

  const deleteItem = (itemId) =>
  request.delete(`${baseUrl}/${itemId}`);

  return {
    getAll,
    addInCart,
    deleteItem
  }
};
