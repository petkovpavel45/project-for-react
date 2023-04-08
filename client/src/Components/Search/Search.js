import "./Search.css";
import { useEffect, useState } from "react";
import { productServiceFactory } from "../../Services/productService";
import { Product } from "../Products/Product/Product";
import { useService } from "../../hooks/useService";

export const Search = () => {
  const [searchedProduct, setsearchedProduct] = useState([]);
  const [hasNoSearchedResult, sethasNoSearchedResult] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchData, setsearchData] = useState({
    name: "",
    type: "",
  });
  const productService = useService(productServiceFactory);
  useEffect(() => {
    productService
      .getAll()
      .then((data) => {
        if (data.length > 0) {
          setIsEmpty(false);
        } else {
          setIsEmpty(true);
        }
        setsearchedProduct(data);
        setSearchResult(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    sethasNoSearchedResult(true);
    if (searchData.type === "" && searchData.name === "") {
      setSearchResult(searchedProduct);
    }

    if (searchData.type !== "" && searchData.name === "") {
      setSearchResult(
        searchedProduct.filter((product) => product.type === searchData.type)
      );
    }

    if (searchData.type !== "" && searchData.name !== "") {
      setSearchResult(
        searchedProduct.filter(
          (product) =>
            product.type === searchData.type &&
            product.title.toLowerCase().includes(searchData.title.toLowerCase())
        )
      );
    }

    if (searchData.type === "" && searchData.name !== "") {
      setSearchResult(
        searchedProduct.filter((product) =>
          product.title.toLowerCase().includes(searchData.name.toLowerCase())
        )
      );
    }
  };

  const addSearchData = (e) => {
    setsearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section id="serch-section">
        <h2 className="serch-section_header">Find your product</h2>
        <article className="search-article">
          <form className="search-form" onSubmit={searchHandler}>
            <div className="search-name-wrapper">
              <label htmlFor="name">Search by title:</label>
              <input
                type="text"
                name="name"
                value={searchData.name}
                onChange={addSearchData}
                className='profile-input'
              />
            </div>

            <input type="submit" className="btn search-submit" value="SEARCH" />
          </form>
        </article>
      </section>
      <section className="search-result">
        <article className="products-cards">
          {searchResult.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </article>
        {searchResult.length === 0 && hasNoSearchedResult && (
          <h2 className="search-result_no-result">No result</h2>
        )}
        {isEmpty && (
          <h2 className="no-server-content-header">
            There is nothing to show!
          </h2>
        )}
      </section>
    </>
  );
};
