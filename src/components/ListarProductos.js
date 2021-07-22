import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { useHistory } from "react-router-dom";

const ListarProductos = (props) => {
  let history = useHistory();

  useEffect(() => {
    if (props.usuario == null) {
      history.push("/login");
    }
  }, []);

  console.log("Usuario", props.usuario);

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
    </Container>
  );
};

export default ListarProductos;
