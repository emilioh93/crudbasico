import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Switch } from 'react-router';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Inicio></Inicio>
          </Route>
          <Route exact path="/productos">
            <ListarProductos></ListarProductos>
          </Route>
          <Route exact path="/productos/nuevo">
            <AgregarProducto></AgregarProducto>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
