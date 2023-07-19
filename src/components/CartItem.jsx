import React from "react";

const CartItem = ({ item }) => {
  const { id, valor, precio, quantity, imagen, km } = item;

  return (
    <div>
      <h4>{valor}</h4>
      <p>ID: {id}</p>
      <p>Precio: {precio}</p>
      <p>Cantidad: {quantity}</p>
      <img src={imagen} alt={valor} />
      <p>KM: {km}</p>
    </div>
  );
};

export default CartItem;
