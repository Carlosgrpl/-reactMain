import React from "react";
import "./listProduct.scss";
import PropTypes from "prop-types";

function ListProduct({ listProduct }) {
  console.log("ListProduct received:", listProduct); // Add logging to debug

  const dataLI = listProduct.map((product) => (
    <li className="card" key={product.id}>
      <img
        src={product.image}
        className="card_image"
        alt={product.title}
        onError={(e) => {
          e.target.style.display = "none";
          console.log("Image failed to load:", product.image);
        }}
      />
      <h4>{product.title}</h4>
      <h4>precio: {product.price}</h4>
    </li>
  ));

  return <ul>{dataLI}</ul>;
}

ListProduct.propTypes = {
  listProduct: PropTypes.array.isRequired,
};

export default ListProduct;
