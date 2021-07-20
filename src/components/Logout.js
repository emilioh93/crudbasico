import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Logout = (props) => {
  let history = useHistory();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Está seguro desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        props.setLogin(false);
        history.push("/");
      }
    });
  };
  return (
    <Button type="button" variant="dark" onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
    </Button>
  );
};

export default Logout;
