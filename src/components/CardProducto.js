import React from "react";
import { Card } from "react-bootstrap";
import menu1 from "../img/menu/img_1.jpg";

const CardProducto = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 my-2">
      <Card style={{ width: "100%" }}>
        {props.producto.imagenProducto === null ? (
          <Card.Img variant="top" src={menu1} />
        ) : (
          <Card.Img variant="top" src={props.producto.imagenProducto} />
        )}
        <Card.Body>
          <Card.Title>{props.producto.nombreProducto}</Card.Title>
          <Card.Footer>${props.producto.precioProducto}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProducto;
