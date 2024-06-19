/* RFCE - React Functional Component */

function ListProduct() {
  const dataLI = list.product.map((product) => <li>{product.tile}</li>);

  return <ul>{dataLI}</ul>;
}

export default ListProduct;
