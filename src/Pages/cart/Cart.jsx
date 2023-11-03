import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shopContext';
import { ShopContextcar } from '../../Context/carshopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const shopContext = useContext(ShopContext);
  const carContext = useContext(ShopContextcar);
  
  const { cartItems, getTotalCartAmount } = shopContext;
  const { cartItems: carCartItems, getTotalCartAmount: carGetTotalCartAmount } = carContext;

  const navigate = useNavigate();

  //Merge the products from both contexts
  const allProducts = [...shopContext.PRODUCTS, ...carContext.PRODUCTSCAR];

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart items</h1>
      </div>
      <div>
        {allProducts.map((product) => {
          const totalInCart = cartItems[product.id] + carCartItems[product.id];
          if (totalInCart > 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {getTotalCartAmount() + carGetTotalCartAmount() > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${getTotalCartAmount() + carGetTotalCartAmount()}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
