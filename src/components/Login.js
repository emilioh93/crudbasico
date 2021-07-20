import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {
  let history = useHistory();
  //   TODO: crear credenciales en el backend y sustituir los strings condicionales
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.username === "admin" && props.password === "1234") {
      Swal.fire(
        "Credenciales correctas",
        "Redirigiendo a página de administrador...",
        "success"
      ).then(() => {
        props.setLogin(true);
        history.push("/productos");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        footer:
          '<a href="mailto:emiliohurtado1@gmail.com">Solicite las credenciales haciendo click aquí</a>',
      });
    }
  };

  return (
    <Container className="contenedoresGral">
      <Form className="my-5 contenedorFormLogin">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de usuario"
            required
            onChange={(e) => props.setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese la contraseña"
            required
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          className="w-100"
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
        <Form.Text className="text-muted">
          Si usted no cuenta con las credeciales, por favor envíe un correo
          haciendo click <a href="mailto:emiliohurtado1@gmail.com">aquí</a>.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
