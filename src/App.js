import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListarProductos from "./components/ListarProductos";
import AgregarProducto from "./components/AgregarProducto";
import EditarProducto from "./components/EditarProducto";
import Menu from "./components/Menu";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import { useState, useEffect } from "react";
import Error404 from "./components/common/Error404";
import Login from "./components/Login";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Llamar a la API
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if (respuesta.status === 200) {
        // Guardar datos en el state
        const datos = await respuesta.json();
        setProductos(datos);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Menu productos={productos} consultarAPI={consultarAPI}></Menu>
        </Route>
        <Route exact path="/menu">
          <Menu productos={productos} consultarAPI={consultarAPI}></Menu>
        </Route>
        <Route exact path="/admin">
          <Login></Login>
        </Route>
        <Route exact path="/productos">
          <ListarProductos
            productos={productos}
            consultarAPI={consultarAPI}
          ></ListarProductos>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
        </Route>
        <Route exact path="/productos/editar/:id">
          <EditarProducto consultarAPI={consultarAPI}></EditarProducto>
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
