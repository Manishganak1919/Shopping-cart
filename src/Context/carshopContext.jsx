import React, { createContext, useState } from 'react';
import PRODUCTSCAR from '../productcar';

export const ShopContextcar = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTSCAR.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopcarContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = ()=>{
    let totalAmt = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0)
      {
        let itemInfo = PRODUCTSCAR.find((product)=> product.id === Number(item));
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
    <ShopContextcar.Provider value={contextValue}>
      {props.children}
    </ShopContextcar.Provider>
  )
}

export default ShopcarContextProvider;
