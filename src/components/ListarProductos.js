import React from "react";
import { ListGroup, Container, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListarProductos = (props) => {
  return (
    <Container className="contenedoresGral">
      <h1 className="text-center my-5 titulos">Productos</h1>
      <Table className="text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {props.productos.map((producto) => (
          <ItemProducto
            producto={producto}
            key={producto._id}
            consultarAPI={props.consultarAPI}
          ></ItemProducto>
        ))}
        </tbody>
      </Table>
      {/* <ListGroup className="my-5">
        {props.productos.map((producto) => (
          <ItemProducto
            producto={producto}
            key={producto._id}
            consultarAPI={props.consultarAPI}
          ></ItemProducto>
        ))}
      </ListGroup> */}
    </Container>
  );
};

export default ListarProductos;
