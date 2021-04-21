import React from 'react';
import {ListGroup, Container} from 'react-bootstrap';
import ItemProducto from './ItemProducto';

const ListarProductos = (props) => {
    return (
        <Container>
        <h1 className="text-center my-5">Productos</h1>
        <ListGroup className="my-5">
            {
                props.productos.map((producto)=><ItemProducto producto={producto} key={producto.id}></ItemProducto>)
            }
        </ListGroup>
        </Container>
    );
};

export default ListarProductos;