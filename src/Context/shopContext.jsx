import React, { createContext, useState } from 'react';
import PRODUCTS from '../product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = ()=>{
    let totalAmt = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0)
      {
        let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
        totalAmt += cartItems[item]*itemInfo.Price;
      }
    }
    return totalAmt;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const contextValue = { cartItems, addToCart, removeFromCart ,getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
