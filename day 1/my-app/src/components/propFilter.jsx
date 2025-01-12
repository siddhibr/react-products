import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropFilter = ({
  setAllProducts,
  setFilterProducts,
  filterProducts
}) => {
  const router = useNavigate();

  async function getProducts() {
    // api call
    // alert("Jiii")
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response, "response from fakestore api")
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function redirect(id) {
    // alert(id) 1 2 3 4 5
    router(`/fake-single-product/${id}`);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* <h1>Fake Store All Products</h1> */}
      {filterProducts?.length ? (
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {filterProducts.map((productObj) => (
            <div
              onClick={() => redirect(productObj.id)}
              style={{
                width: "18%",
                border: "2px solid grey",
                height: "250px",
              }}
            >
              <img
                style={{ height: "70%", width: "100%" }}
                src={productObj.image}
              />
              <p>{productObj.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PropFilter;