import React from "react";
import { Container } from "react-bootstrap";
import CardProducto from "./CardProducto";

const Menu = (props) => {
  return (
    <Container className="contenedoresGral">
      <section className="text-center">
        <h1 className="titulos">Menu</h1>
        <span>
          Disfrute de un excelente desayuno o merienda en nuestra Cafetería.
        </span>
      </section>
      <section>
        <section className="my-5">
          <h2 className="text-center titulos">Dulces</h2>
          <article className="text-center my-5 row">
            {props.productos
              .filter((producto) => {
                return producto.categoria.includes("dulce");
              })
              .map((producto) => (
                <CardProducto
                  producto={producto}
                  key={producto._id}
                  consultarAPI={props.consultarAPI}
                ></CardProducto>
              ))}
          </article>
        </section>
        <section className="my-5">
          <h2 className="text-center titulos">Salado</h2>
          <article className="text-center my-5 row">
            {props.productos
              .filter((producto) => {
                return producto.categoria.includes("salado");
              })
              .map((producto) => (
                <CardProducto
                  producto={producto}
                  key={producto._id}
                  consultarAPI={props.consultarAPI}
                ></CardProducto>
              ))}
          </article>
        </section>
        <section className="my-5">
          <h2 className="text-center titulos">Bebida Caliente</h2>
          <article className="text-center my-5 row">
            {props.productos
              .filter((producto) => {
                return producto.categoria.includes("bebida-caliente");
              })
              .map((producto) => (
                <CardProducto
                  producto={producto}
                  key={producto._id}
                  consultarAPI={props.consultarAPI}
                ></CardProducto>
              ))}
          </article>
        </section>
        <section className="my-5">
          <h2 className="text-center titulos">Bebida Fria</h2>
          <article className="text-center my-5 row">
            {props.productos
              .filter((producto) => {
                return producto.categoria.includes("bebida-fria");
              })
              .map((producto) => (
                <CardProducto
                  producto={producto}
                  key={producto._id}
                  consultarAPI={props.consultarAPI}
                ></CardProducto>
              ))}
          </article>
        </section>
      </section>
    </Container>
  );
};

export default Menu;
