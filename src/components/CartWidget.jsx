import cart from '../assets/cart.png';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { calculateTotalQuantity } = useContext(CartContext);

  console.log("totalQuantity contenido");
  console.log(calculateTotalQuantity);

  const totalQuantity = calculateTotalQuantity(); // Llamar a la función para obtener el valor

  return (
    <Link to="/cart" className="cartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cart} alt="changuito" id="carrito" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;


