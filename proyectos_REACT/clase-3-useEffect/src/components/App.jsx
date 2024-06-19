import { useState } from "react";
import { ListProdcut } from "./ListProduct/ListProduct";

function App() {
  const [listProduct, setListProduct] = useState([]);

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setListProduct(data);
    }, []);

  return (
    <>
      <h1> Tienda Online </h1>;
      <ListProdcut listProduct={listProduct} />
    </>
  );
}

export default App;
