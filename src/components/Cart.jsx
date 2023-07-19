import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearItem, calculateTotalQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay monedas en el carrito</h1>
        <Link to="/" className="option">
          Productos
        </Link>
      </div>
    );
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.precio;
    });
    return total;
  };

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: {getTotal()}</h3>
      <h4> Cantidad total : {calculateTotalQuantity()}</h4>
      <button onClick={clearItem}>Vaciar carrito</button>
      <Link to="/checkout">Realizar pedido</Link>
    </div>
  );
};

export default Cart;




/*import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearItem, totalQuantity, total } = useContext(CartContext);
  console.log (cart)

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay monedas en el carrito</h1>
        <Link to="/" className="option">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearItem("")} className="button">Vaciar carrito</button>
      <Link to="/checkout" className="option">Check Out</Link>
    </div>
  );
};

export default Cart 



    return (
        <div>
            {cart.map(p=> <cartItem Key={p.id} {...p}/>)}
            <h3> Total : ${total} </h3>
            <button onclick={ ()=> clearCart ()} className="button">Vaciar carrito</button>
            <link to='/checkout' className="option">Check Out</link>
        </div>
    )
}*/