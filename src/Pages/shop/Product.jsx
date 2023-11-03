import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shopContext'; // Correct import statement

const Product = (props) => {
  const { id, ProductName, Price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext); // Ensure the context variable name matches the exported name

  const createAmount = cartItems[id];
  return (
    <div className='products'>
      <img src={productImage} alt={ProductName} />
      <div className='pro-description'>
        <p><b>{ProductName}</b></p>
        <p>${Price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart{createAmount > 0 && <>({createAmount})</>}</button>
    </div>
  )
}

export default Product;
