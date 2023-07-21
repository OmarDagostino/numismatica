import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckOutForm";

const Cart = () => {
  const { cart, clearItem, calculateTotalQuantity, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay monedas en el carrito</h1>
        <Link to="/" className="option">
          Monedas
        </Link>
      </div>
    );
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.precio;
    });
    return total.toLocaleString( { style: 'currency', currencyDisplay: 'symbol'});
  };

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3 id="precio2">Total: {getTotal()}</h3>
      <h4>Cantidad de monedas: {calculateTotalQuantity()}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button className="boton1" onClick={clearCart}>Vaciar carrito</button>
        <Link
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            margin: '5px',
            borderRadius: '5px',
            borderColor: 'black',
            height: '40px',
            padding: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          to="/checkout"
        >
          Realizar pedido
        </Link>
      </div>
    </div>
  );
  
};

export default Cart;