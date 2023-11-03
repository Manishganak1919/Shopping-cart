import React from 'react';
import PRODUCTSCAR from '../../productcar';
import CarProduct from './CarProduct';
import '../shop/Shop.css';

const Car = () => {
  return (
    <div className='shop'>
        <div className='shotTitle'>

        </div>
        <div className='display-Products'>
        {PRODUCTSCAR.map((Product) => (
          <CarProduct key={Product.id} data={Product} />
        ))}
      </div>
    </div>
  )
}

export default Car;