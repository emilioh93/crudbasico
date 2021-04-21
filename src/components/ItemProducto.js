import { Button, ListGroup } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

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
    }).then((result) => {
      if (result.isConfirmed) {
        // Agregar solicitud deleted

        Swal.fire(
          "¡Producto eliminado!",
          "El producto seleccionado fue correctamente eliminado.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto}{" "}
          <span className="font-weight-bold">
            ${props.producto.precioProducto}
          </span>
        </p>
        <div>
          <Button variant="warning" className="mr-2 text-light">
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Button>
          <Button
            variant="danger"
            onClick={() => eliminarProducto(props.producto.id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemProducto;
