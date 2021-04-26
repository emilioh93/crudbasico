import React, {useState, useEffect} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const leerCategoria = (e) => {
    // setCategoria(e.target.value);
  };

  return (
    <div>
      <Container>
        <Form className="my-5">
          <h1 className="my-5 text-center">Editar producto</h1>
          <Form.Group>
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Café"
            //   onChange={(e) => setNombreProducto(e.target.value)}s
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="50"
            //   onChange={(e) => setPrecioProducto(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <h3 className="text-center mt-4">Categoría</h3>
          <div className="text-center my-4">
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Bebida caliente"
              value="bebida-caliente"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Bebida fría"
              value="bebida-fria"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Dulce"
              value="dulce"
              onChange={leerCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Salado"
              value="salado"
              onChange={leerCategoria}
            ></Form.Check>
          </div>
          <Button variant="danger" type="submit" className="w-100">
            Guardar
          </Button>
          {/* {error === true ? (
            <Alert variant="danger" className="my-5">
              Faltan cargar datos obligatorios
            </Alert>
          ) : null} */}
        </Form>
      </Container>
    </div>
  );
};

export default EditarProducto;
