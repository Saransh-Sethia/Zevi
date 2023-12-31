import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import config from "../../data";
import axios from "axios";
import Header from "../Header/Header";
import Products from "../Products/Products";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState([]);
  const [ratingsFilter, setRatingsFilter] = useState([]);
  const [query, setQuery] = useState("");

  const keys = ["title", "category"];

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const search = (data) => {
    const updatedData = data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
    setFilteredProducts(updatedData);
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get(config.endpoint);
      const result = response.data;
      setProducts(result);
      setFilteredProducts(result);
      console.log('result',result);
    } catch (error) {
      console.log("error-1", error);
    }
  };

  const handleCategoryFilter = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setCategoryFilter((prevValue) => [...prevValue, event.target.value]);
    } else {
      setCategoryFilter((prevVal) =>
        prevVal.filter((item) => item !== event.target.value)
      );
    }
  };

  const handlePriceRangeFilter = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setPriceRangeFilter((prevValue) => [...prevValue, event.target.value]);
    } else {
      setPriceRangeFilter((prevValue) =>
        prevValue.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleRatingsFilter = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setRatingsFilter((prevValue) => [...prevValue, event.target.value]);
    } else {
      setRatingsFilter((prevValue) =>
        prevValue.filter((item) => item !== event.target.value)
      );
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    search(products);
  }, [query, products]);

  return (
    <div>
      <Header query={query} handleSearch={handleSearch} />
      <div className={styles.mainContent}>
        <CheckboxFilter
        categoryFilter={categoryFilter}
        priceRangeFilter={priceRangeFilter}
        ratingsFilter={ratingsFilter}
        handleCategoryFilter={handleCategoryFilter}
        handlePriceRangeFilter={handlePriceRangeFilter}
        handleRatingsFilter={handleRatingsFilter} />
      <Products 
      products={products} 
      filteredProducts={filteredProducts} 
      categoryFilter={categoryFilter}
      ratingsFilter={ratingsFilter}
      priceRangeFilter={priceRangeFilter} 
      setFilteredProducts={setFilteredProducts}
      />
      </div>
      
    </div>
  );
};

export default Home;
