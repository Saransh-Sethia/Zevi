import React,{useState} from 'react';
import styles from './ProductCard.module.css';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({image,title,price, rating, rate}) => {
  const [hover, setHover] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const handleColorChange = () => {
    setColorChange(!colorChange)
  }

  const handleHoverIn = () => {
    setHover(true);
  }

  const handleHoverOut = () => {
    setHover(false);
  }
  return (
    <div className={styles.cardContainer}>
      <Card sx={{borderRadius:"0px", maxWidth:"250px"}} className={styles.card}>
      <CardMedia 
      image={image}
      alt="product"
      className={styles.cardImage}
      onMouseOver={handleHoverIn}
      onMouseOut={handleHoverOut}/>
      <FavoriteIcon
      className={colorChange ? (styles.red) : (styles.white)}
      onClick={handleColorChange}
       />
      </Card>

      <h3 className={styles.cardTitle}>{title.slice(0,25)}</h3>
      <div className={styles.cardPrice}>Rs. {price}</div>
      <Rating className={styles.ratingCard} name="read-only" value={rating.rate} readOnly />
      {
        hover && <div className={styles.button}>View Product</div>
      }
      
    </div>
  )
}

export default ProductCard
