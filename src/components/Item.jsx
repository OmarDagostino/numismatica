import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ moneda }) => {
  const formattedPrice = moneda.precio.toLocaleString();

  return (
    <Card
      style={{ width: "14rem", height: "20rem", lineHeight: "8px" }}
      key={moneda.id}
      className="float-start"
    >
      <Card.Img variant="top" src={moneda.imagen} alt={moneda.valor} />
      <Card.Body>
        <Card.Title>{moneda.valor}</Card.Title>
        <Card.Text>KM: {moneda.km}</Card.Text>
        <Card.Text>Año de acuñación: {moneda.anio}</Card.Text>
        <Card.Text id="precio1">Precio: {formattedPrice}</Card.Text>
        <Link to={`/item/${moneda.id}`}>
          <Button variant="primary">ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
