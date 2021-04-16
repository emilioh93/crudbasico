import React from 'react';
import { Container, Form } from 'react-bootstrap';

const AgregarProducto = () => {
    return (
        <Container>
            <Form className="my-5">
                <h1 className="my-5">Agregar nuevo producto</h1>
                <Form.Group>
                    <Form.Label>Nombre del producto*</Form.Label>
                    <Form.Control type="text" placeholder="Café"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="number" placeholder="50"></Form.Control>
                </Form.Group>
                <h3 className="text-center mt-4">Categoría</h3>
                <div className="text-center my-4">
                    <Form.Check inline type="radio" name="categoria" label="Bebida caliente"></Form.Check>
                    <Form.Check inline type="radio" name="categoria" label="Bebida fría"></Form.Check>
                    <Form.Check inline type="radio" name="categoria" label="Dulce"></Form.Check>
                    <Form.Check inline type="radio" name="categoria" label="Salado"></Form.Check>
                </div>
            </Form>
        </Container>
    );
};

export default AgregarProducto;