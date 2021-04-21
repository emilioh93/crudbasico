import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const ItemProducto = (props) => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>
                    {props.producto.nombreProducto} <span className="font-weight-bold">${props.producto.precioProducto}</span>
                </p>
                <div>
                    <Button variant="warning" className="mr-2 text-light">
                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                    </Button>
                    <Button variant="danger">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;