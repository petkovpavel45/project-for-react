import { Product } from "./Product/Product";
export const Products = ({ products }) => {
  // console.log(products);
  return (
    <section id="products">
      <h2 className="products-title">PRODUCTS</h2>
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
    </section>
  );
};
