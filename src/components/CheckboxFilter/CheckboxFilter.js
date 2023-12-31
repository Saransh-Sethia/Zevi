import React from 'react';
import styles from './CheckboxFilter.module.css'
import { Rating } from '@mui/material';

const CheckboxFilter = ({
    categoryFilter,
    priceRangeFilter,
    ratingsFilter,
    handleCategoryFilter,
    handlePriceRangeFilter,
    handleRatingsFilter
}) => {

    const categories = ["men's clothing","jewelery","electronics","women's clothing"];
    const prices = ["0-500","501-1000"];
    const ratings = ["1","2","3","4","5"];
  return (
    <div className={styles.checkboxFilters}>
        <div className={styles.filter}>
        <h2>Categories</h2>
        {
            categories.map((category,index) => (
                <div key={index}>
                <input
                type="checkbox"
                value={category}
                checked={categoryFilter.includes(category)}
                onChange={handleCategoryFilter} />
                <label>{category}</label>
                </div>
            ))
        }
        </div>
        <div className={styles.filter}>
<h2>Price Range</h2>
{
    prices.map((price, index)=>(
        <div key={index}>
        <input 
        type="checkbox"
        value={price}
        checked={priceRangeFilter.includes(price)}
        onChange={handlePriceRangeFilter}/>
        <label>{price}</label>
        </div>
    ))
}
        </div>
        <div className={styles.filter}>
            <h2>Ratings</h2>
{
    ratings.map((rating,index) => (
        <div key={index}>
        <input
        type="checkbox"
        value={Number(rating)}
        checked={ratingsFilter.includes(rating)}
        onChange={handleRatingsFilter} />
        <label>
        <Rating className={styles.ratingCard} name="read-only" value={rating} readOnly />
        </label>
        </div>
    ))
}
        </div>
    </div>
  )
}

export default CheckboxFilter
