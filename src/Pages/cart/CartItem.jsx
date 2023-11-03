import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shopContext';
import { ShopContextcar } from '../../Context/carshopContext';
import './Cart.css';

const CartItem = (props) => {
  const { id, ProductName, Price, productImage } = props.data;
  const shopContext = useContext(ShopContext);
  const carContext = useContext(ShopContextcar);

  const { cartItems, addToCart, removeFromCart } = shopContext; // Use shopContext here

  return (
    <div className='cartItems'>
      <img src={productImage} alt={ProductName} />
      <div className='description'>
        <p><b>{ProductName}</b></p>
        <p>${Price}</p>
        <div className='countHandling'>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
