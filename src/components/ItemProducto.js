import { Button } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemProducto = (props) => {
  const eliminarProducto = (codigo) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      text: "No puedes recuperar un producto que fue eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Agregar solicitud deleted
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + codigo;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "¡Producto eliminado!",
              "El producto seleccionado fue correctamente eliminado.",
              "success"
            );
            //  Volver a consultar la API
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Ocurrió un error!",
            "Inténtelo nuevamente más tarde.",
            "warning"
          );
        }
        Swal.fire(
          "¡Producto eliminado!",
          "El producto seleccionado fue correctamente eliminado.",
          "success"
        );
      }
    });
  };

  return (
    <tr>
      <td>{props.producto.nombreProducto}</td>
      {/* <td>{props.producto._id}</td> */}
      <td>${props.producto.precioProducto}</td>
      <td>{props.producto.categoria}</td>
      <td id="tablaImg">
        <img src={props.producto.imagenProducto} alt="imagen de producto" />
      </td>
      <td>
        <Link
          id="btnEditar"
          className="mr-2 btn btn-warning text-light"
          to={`/productos/editar/${props.producto._id}`}
        >
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </Link>
        <Button
          variant="dark"
          onClick={() => eliminarProducto(props.producto._id)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
