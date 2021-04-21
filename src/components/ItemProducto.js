import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';

const ItemProducto = () => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>Nombre producto <span className="font-weight-bold">$100</span></p>
                <div>
                    <Button variant="warning" className="mr-2">Editar</Button>
                    <Button variant="danger">Borrar</Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;