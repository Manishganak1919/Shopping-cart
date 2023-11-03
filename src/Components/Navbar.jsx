import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react'; // this is icon of shopping cart

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"><b>Shop</b></Link>
            <Link to="/cart"><b><ShoppingCart size={32}/></b></Link>
        </div>
        <div className='otherlink'>
        <Link to="/car"><b>Car</b></Link>
        </div>
    </div>
  )
}

export default Navbar;
