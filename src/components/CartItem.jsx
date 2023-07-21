import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CartContext } from "./CartContext";

const CartItem = ({ item }) => {
  const { id, valor, precio, quantity, imagen, km } = item;
  const { clearItem } = useContext(CartContext);

  return (
    <Card
      style={{ width: "14rem", height: "20rem", lineHeight: "8px" }}
      key={id}
      className="float-start"
    >
      <Card.Img variant="top" src={imagen} alt={valor} />
      <Card.Body>
        <Card.Title>{valor}</Card.Title>
        <Card.Text>KM: {km}</Card.Text>
        <Card.Text>Cantidad : {quantity}</Card.Text>
        <Card.Text id="precio1">Precio: {precio}</Card.Text>
        <button className="boton1" onClick={() => clearItem(id)}>No comprar esta moneda</button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;

