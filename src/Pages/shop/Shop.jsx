import React from 'react';
import PRODUCTS from '../../product';
import Product from './Product';
import './Shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shotTitle'>
        {/* You can add a title here if needed */}
      </div>
      <div className='display-Products'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
