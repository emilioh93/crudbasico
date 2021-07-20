import React from "react";
import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";

const Navegacion = (props) => {
  return (
    <div className="">
      <Navbar bg="danger" expand="lg" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand>Cafetería</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact={true} to="/" className="nav-link">
                Inicio
              </NavLink>
              <NavLink exact={true} to="/menu" className="nav-link">
                Menu
              </NavLink>
              {props.login ? (
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
                  <Logout setLogin={props.setLogin}></Logout>
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink exact={true} to="/productos" className="nav-link">
                    Contacto
                  </NavLink>
                  <NavLink exact={true} to="/admin" className="nav-link">
                    Iniciar sesión
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
