import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../firebaseconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msjError, setMsjError] = useState(null);
  let history = useHistory();
  //   TODO: crear credenciales en el backend y sustituir los strings condicionales
  const RegistrarUsuario = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        Swal.fire(
          "Usuario registrado",
          "Redirigiendo a página de administrador...",
          "success"
        );
        history.push("/productos");
      })
      .catch((error) => {
        console.log("Error", error);
        if (error.code === "auth/invalid-email") {
          setMsjError("Formato de email incorrecto");
        }
        if (error.code === "auth/weak-password") {
          setMsjError("La contraseña debe tener por lo menos 6 caracteres");
        }
      });
  };

  const IniciarSesion = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((respuesta) => {
        console.log("Respuesta", respuesta);
        Swal.fire(
          "Inicio de sesion correcto",
          "Redirigiendo a página de administrador...",
          "success"
        );
        history.push("/productos");
      })
      .catch((error) => {
        console.log("Error", error);
        if (error.code === "auth/wrong-password") {
          setMsjError("Contraseña incorrecta");
        }
        if (error.code === "auth/user-not-found") {
          setMsjError("Email incorrecto");
        }
      });
  };

  return (
    <Container className="contenedoresGral">
      <h2 className="text-center titulos">Iniciar sesion</h2>
      <Form className="my-5 contenedorFormLogin">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese un email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese una contraseña"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        {msjError != null ? (
          <Alert variant="danger">{msjError}</Alert>
        ) : (
          <span></span>
        )}
        <Button
          variant="dark"
          type="submit"
          className="w-100"
          onClick={IniciarSesion}
        >
          Ingresar
        </Button>
        <Button
          id="btnRegistro"
          variant="white"
          type="submit"
          className="mt-2 w-100"
          onClick={RegistrarUsuario}
        >
          Registrarse
        </Button>
        {/* <Form.Text className="text-muted">
          Si usted no cuenta con las credeciales, por favor envíe un correo
          haciendo click <a href="mailto:emiliohurtado1@gmail.com">aquí</a>.
        </Form.Text> */}
      </Form>
    </Container>
  );
};

export default Login;
