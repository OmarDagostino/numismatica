/* import React, { useContext } from 'react';
import cart from '../assets/cart.png';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  
  const calculateTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  
  const totalQuantity = calculateTotalQuantity();
  
  console.log("totalQuantity contenido");
  console.log(totalQuantity);

  return (
    <Link to="/cart" className="cartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'block' }}>
      <img src={cart} alt="changuito" id="carrito" />  
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
*/
/*
import React from 'react';
import cart from '../assets/cart.png';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const cartContext = useContext(CartContext);
    const calculateTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  
  const totalQuantity = calculateTotalQuantity();
  
  console.log("totalQuantity contenido");
  console.log(totalQuantity);

  return (
    <Link to= '/cart' className='cartWidget' style={{display: totalQuantity> 0 ? 'block' : 'block'}}>
    <img src={cart} alt="changuito" id="carrito" />  
    {totalQuantity}
    </Link>
  )
}
export default CartWidget
*/


import React from 'react';
import cart from '../assets/cart.png';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {calculateTotalQuantity } = useContext (CartContext)
  const cartContext = useContext(CartContext); 
  console.log ("totalQuantity contenido")
  console.log (calculateTotalQuantity())
  return (
    <Link to= '/cart' className='cartWidget' style={{display: calculateTotalQuantity()> 0 ? 'block' : 'block'}}>
    <img src={cart} alt="changuito" id="carrito" />  
    {calculateTotalQuantity()}
    </Link>
  )
}
export default CartWidget
