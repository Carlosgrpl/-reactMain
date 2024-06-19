import React, { useEffect, useState } from "react";

function FilterCategory({ setFilterCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSelect = (ev) => {
    setFilterCategory(ev.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Selecciona tu categoria</label>
      <select name="category" id="category" onChange={handleSelect}>
        <option value="">Seleccione</option>
        {categories.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterCategory;
