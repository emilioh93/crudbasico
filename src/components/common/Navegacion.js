import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navegacion = () => {
    return (
        <div className="">
            <Navbar bg="danger" expand="lg" variant="dark">
                <Navbar.Brand href="/">Cafetería</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink exact={true} to='/' className='nav-link'>Inicio</NavLink>
                      <NavLink exact={true} to='/productos' className='nav-link'>Productos</NavLink>
                      <NavLink exact={true} to='/productos/nuevo' className='nav-link'>Agregar productos</NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navegacion;