import React, { useEffect } from "react";
import styles from "./Products.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductCard from "../ProductCard/ProductCard";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Products = ({
  products,
  filteredProducts,
  categoryFilter,
  ratingsFilter,
  priceRangeFilter,
  setFilteredProducts
}) => {
  const applyFiters = ( categories, prices, ratingsFilter) => {
    let updatedData = [...filteredProducts];

    if (categories.length) {
      updatedData = updatedData.filter((listing) => (
        categoryFilter.includes(listing.category)
      )
      );
    };

  if(prices.length){
    updatedData = updatedData.filter((listing) => {
      let found = false;
      prices.forEach((rangeEntry)=>{
        let low = rangeEntry.split("-")[0];
        let high = rangeEntry.split("-")[1];

        if(
          Number(listing.price) >= Number(low) && 
          Number(listing.price) <= Number(high)
        )
        found = true;
      })
      return found;
  });
  };

  if(ratingsFilter.length){
    updatedData = updatedData.filter((listing)=>(
      ratingsFilter.includes(Number(listing.rating.rate))
  ))
  }
    console.log("updatedData", updatedData)
    return updatedData;
  };

  let displayData = applyFiters(categoryFilter, priceRangeFilter, ratingsFilter);

  useEffect(()=>{
    setFilteredProducts(products)
  },[products])
  return (
    <>
      {displayData.length === 0 ? (
        <h2 
        className={styles.errorHeading}
        >
          No Products Found
          <SentimentVeryDissatisfiedIcon />
        </h2>
      ) : (
        <Box sx={{ flexGrow: 1 }} className={styles.container}>
          <Grid container spacing={2}>
            {displayData.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Products;
