import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [imagenProducto, setImagenProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL;

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones
    if (
      nombreProducto.trim() !== "" &&
      precioProducto.trim() !== "" &&
      imagenProducto.trim() !== "" &&
      categoria !== ""
    ) {
      // Si está todo ok, envío los datos del producto a la API
      setError(false);
      const producto = {
        nombreProducto,
        precioProducto,
        imagenProducto,
        categoria,
      };
      // Envío request POST
      try {
        // Estructura de datos a enviar
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        };

        const response = await fetch(URL, cabecera);
        console.log(response);
        if (response.status === 201) {
          Swal.fire(
            "Producto agregado",
            "El producto se cargó correctamente",
            "success"
          );
          // Reseteo form
          e.target.reset();
          // Actualizar datos
          props.consultarAPI();
          // Redireccionar al componente ListarProductos
          history.push("/productos");
          console.log("Producto", producto);
        }
      } catch (error) {
        Swal.fire(
          "Ocurrió un error",
          "Inténtelo nuevamente en unos minutos",
          "error"
        );
      }

      // Espero respuesta
    } else {
      // Si no está todo ok, valido el error
      setError(true);
    }
  };

  return (
    <Container className="contenedoresGral">
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="my-5 text-center titulos">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Café"
            onChange={(e) => setNombreProducto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio del producto*</Form.Label>
          <Form.Control
            type="number"
            placeholder="50"
            onChange={(e) => setPrecioProducto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la URL de la imagen del producto"
            onChange={(e) => setImagenProducto(e.target.value)}
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
        <Button variant="dark" type="submit" className="w-100 btnSubmit">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default AgregarProducto;
