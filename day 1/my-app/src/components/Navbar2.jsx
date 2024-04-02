import React from "react";

const Navbar2 = ({ search, handleChange }) => {
  return (
    <div>
        <h1>Fake Store All Products</h1>
    
      <h2>Search Products </h2>
      <input placeholder="Search..." value={search} onChange={handleChange} />
    </div>
  );
};

export default Navbar2;