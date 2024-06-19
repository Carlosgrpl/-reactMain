import { useEffect, useState } from "react";
import ListProduct from "./ListProduct/ListProduct";
import Filters from "./Filters/filters";
import FilterCategory from "./FiltersCategory/FilterCategory";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setListProduct(data);
        console.log("Fetched products:", data); // Log fetched products
      });
  }, []);

  useEffect(() => {
    console.log("Search term changed:", search);
  }, [search]);

  const getDataFiltered = () => {
    const filteredProducts = listProduct
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((product) =>
        filterCategory ? product.category === filterCategory : true
      );

    return filteredProducts;
  };

  return (
    <>
      <h1>Tienda Online</h1>
      <Filters setSearch={setSearch} />
      <FilterCategory setFilterCategory={setFilterCategory} />
      <ListProduct listProduct={getDataFiltered()} />
    </>
  );
}

export default App;
