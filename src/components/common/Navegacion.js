import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebaseconfig";

const Navegacion = (props) => {
  let history = useHistory();

  const CerrarSesion = () => {
    auth.signOut();
    props.setUsuario(null);
    console.log("🚀 ~ file: Navegacion.js ~ line 16 ~ CerrarSesion ~  props.Usuario",  props.usuario)
    history.push("/");
  };
  return (
    <div className="">
      <Navbar bg="white" expand="lg" variant="white" className="fixed-top">
        <Container>
          <Navbar.Brand>Cafe Buda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact={true} to="/" className="nav-link">
                Inicio
              </NavLink>
              <NavLink exact={true} to="/menu" className="nav-link">
                Menu
              </NavLink>
              {props.usuario ? (
                <Fragment>
                  <NavLink exact={true} to="/productos" className="nav-link">
                    Lista de productos
                  </NavLink>
                  <NavLink
                    exact={true}
                    to="/productos/nuevo"
                    className="nav-link"
                  >
                    Agregar productos
                  </NavLink>
                  <Button variant="dark" onClick={CerrarSesion}>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="mr-2"
                    ></FontAwesomeIcon>
                    Cerrar sesion
                  </Button>
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink exact={true} to="/contacto" className="nav-link">
                    Contacto
                  </NavLink>
                  <NavLink exact={true} to="/login" className="nav-link">
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      className="mr-2"
                    ></FontAwesomeIcon>
                    Iniciar sesion
                  </NavLink>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegacion;
