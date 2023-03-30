import "./styles/products.css";
import { Product } from "./Product/Product";
import { useProductContext } from "../../contexts/ProductContext";
import Loading from "../Loading/Loading";
export const Products = () => {
  const { products, isLoading } = useProductContext();
  return (
    <section id="products">
      <h2 className="products-title">PRODUCTS</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {products.length === 0 && (
            <div className="no-items">
              <p>There is no equipments in products</p>
            </div>
          )}
          <div className="products-cards">
            {products.map((x) => (
              <Product key={x._id} {...x} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
