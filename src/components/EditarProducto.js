import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { campoRequerido, rangoValor } from "./common/helpers";

const EditarProducto = (props) => {
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    consultarProducto();
  }, []);

  const consultarProducto = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      console.log(
        "🚀 ~ file: EditarProducto.js ~ line 16 ~ consultarProducto ~ respuesta",
        respuesta
      );
      if (respuesta.status === 200) {
        const productoEncontrado = await respuesta.json();
        setProducto(productoEncontrado);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: EditarProducto.js ~ line 16 ~ consultarProducto ~ error",
        error
      );
      // Mostrar cartel al usuario
    }
  };

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Revisar si cambió la categoría, me quedo con el state categoria. Si no  cambió, dejo la categoría como estaba: asignar valor del producto.categoria
    let _categoria = categoria === "" ? producto.categoria : categoria;
    console.log(nombreProductoRef.current);
    console.log(nombreProductoRef.current.value);
    // Validar datos
    if (
      campoRequerido(nombreProductoRef.current.value) &&
      rangoValor(parseInt(precioProductoRef.current.value)) &&
      campoRequerido(_categoria)
    ) {
      // Ocultar cartel de error
      setError(false);
      // Si está bien, envío request a API
      try {
        const productoModificado = {
          nombreProducto: nombreProductoRef.current.value,
          precioProducto: precioProductoRef.current.value,
          categoria: _categoria,
        };
        // Realizar request
        const respuesta = await fetch(`${URL}/${producto.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoModificado)
        });
        if(respuesta.status === 200){
          Swal.fire(
            "Producto editado",
            "El producto fue modificado correctamente",
            "success"
          );
          // Actualizar datos
          props.consultarAPI();
          // Quiero redireccionar a otra ruta del sistema de rutas
          props.history.push("/productos");
        }
        console.log("🚀 ~ file: EditarProducto.js ~ line 71 ~ handleSubmit ~ respuesta", respuesta)
      } catch (error) {
        console.log(error);
        // Mostrar cartel al usuario de que algo falló
        
      }
    } else {
      // Si está mal, pido al usuario que revise los datos
      setError(true);
    }
  };

  return (
    <div>
      <Container>
        <Form className="my-5" onSubmit={handleSubmit}>
          <h1 className="my-5 text-center">Editar producto</h1>
          <Form.Group>
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Café"
              defaultValue={producto.nombreProducto}
              ref={nombreProductoRef}
              //   onChange={(e) => setNombreProducto(e.target.value)}s
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="50"
              defaultValue={producto.precioProducto}
              ref={precioProductoRef}
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
              defaultChecked={
                producto.categoria && producto.categoria === "bebida-caliente"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Bebida fría"
              value="bebida-fria"
              onChange={leerCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "bebida-fria"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Dulce"
              value="dulce"
              onChange={leerCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "dulce"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              label="Salado"
              value="salado"
              onChange={leerCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "salado"
              }
            ></Form.Check>
          </div>
          <Button variant="danger" type="submit" className="w-100">
            Guardar
          </Button>
          {error === true ? (
            <Alert variant="danger" className="my-5">
              Faltan cargar datos obligatorios
            </Alert>
          ) : null}
        </Form>
      </Container>
    </div>
  );
};

export default withRouter(EditarProducto);
