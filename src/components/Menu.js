import React from "react";
import { Container, Card } from "react-bootstrap";
import menu1 from "../img/menu/img_1.jpg";

const Menu = () => {
  return (
    <Container>
      <section className="text-center">
        <h1>Menú</h1>
        <span>
          Disfrute de un excelente desayuno o merienda en nuestra Cafetería.
        </span>
      </section>
      <section className="text-center my-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menu1} />
          <Card.Body>
            <Card.Title>Fresh Mushroom</Card.Title>
            <Card.Footer>$ 150</Card.Footer>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
};

export default Menu;
