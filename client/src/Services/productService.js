import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/product";

export const productServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const product = Object.values(result);
    return product;
  };

  const getOne = async (productId) => {
    return await request.get(`${baseUrl}/${productId}`);
  };

  const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);
    return result;
  };

  const deleteProduct = (productId) => request.delete(`${baseUrl}/${productId}`);

  const edit = (productId, data) => request.put(`${baseUrl}/${productId}`, data);
  return {
    getAll,
    getOne,
    create,
    deleteProduct,
    edit,
  };
};
