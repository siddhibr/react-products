import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FakeStoreAllProducts from './components/FakeStoreAllProducts';
import Navbar2 from './components/Navbar2';
import PropFilter from './components/propFilter';
import { useState } from "react";


function App() {
  const [allProducts, setAllProducts] = useState([]); // to just get products 20 -> 20
    console.log(allProducts, "allProducts");

  const [search, setSearch] = useState(""); // shose
  const [filterProducts, setFilterProducts] = useState([]); // [{},{} ] setting here // 20 -> 10 4
  //

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);

    let userword = event.target.value.toLowerCase();

    const filteredProduts = allProducts.filter((product) => {
      // 20 -> men
      // 20 -> 4 -> 4 result show
      return product.title.toLowerCase().includes(userword);
    });

    setFilterProducts(filteredProduts); // 20 -> 4

    console.log(filteredProduts, "filteredProduts");
  }

  return (
    <div className="App">
      <Navbar2 search={search} handleChange={handleChange} />
      <Routes>
       
        <Route path="/fake-products" element={<FakeStoreAllProducts />} />
        

        <Route
          path="/prop-filter"
          element={
            <PropFilter
              setAllProducts={setAllProducts}
              setFilterProducts={setFilterProducts}
              filterProducts={filterProducts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
