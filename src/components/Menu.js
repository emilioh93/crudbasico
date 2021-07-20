import React from "react";
import { Container } from "react-bootstrap";
import CardProducto from "./CardProducto";

const Menu = (props) => {
  return (
    <Container className="contenedoresGral">
      <section className="text-center">
        <h2>Menú</h2>
        <span>
          Disfrute de un excelente desayuno o merienda en nuestra Cafetería.
        </span>
      </section>
      <section className="text-center my-5 row">
        {props.productos.map((producto) => (
          <CardProducto
            producto={producto}
            key={producto._id}
            consultarAPI={props.consultarAPI}
          ></CardProducto>
        ))}
      </section>
    </Container>
  );
};

export default Menu;
