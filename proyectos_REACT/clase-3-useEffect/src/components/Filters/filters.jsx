import React from "react";

function Filters({ setSearch }) {
  const handleInput = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <form action="">
      <label htmlFor="search">Indica nombre</label>
      <input type="text" name="search" id="search" onChange={handleInput} />
    </form>
  );
}

export default Filters;
