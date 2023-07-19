import React from 'react';
import cart from '../assets/cart.png';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {calculateTotalQuantity } = useContext (CartContext)
  const cartContext = useContext(CartContext); 
  console.log ("totalQuantity contenido")
  console.log (calculateTotalQuantity)
  return (
    <Link to= '/cart' className='cartWidget' style={{display: calculateTotalQuantity> 0 ? 'block' : 'block'}}>
    <img src={cart} alt="changuito" id="carrito" />  
    {calculateTotalQuantity}
    </Link>
  )
}
export default CartWidget
