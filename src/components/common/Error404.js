import React from "react";
import { Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="contenedoresGral text-center mb-5">
      <h1 className="text-center my-5 titulos">Error 404</h1>
      <span>No se pudo encontrar el sitio al cual intenta acceder.</span>
    </Container>
  );
};
export default Error404;
