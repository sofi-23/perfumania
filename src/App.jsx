import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './components/Context/CartContext';



function App() {
  return (
<>
  <CartContextProvider>
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route  path="/categoria/:idCategoria" component={ItemListContainer} />
      <Route exact path='/detalle/:id' component={ItemDetailContainer} />
      <Route exact path='/cart' component={Cart} />
    </Switch>
  </BrowserRouter>
  </CartContextProvider>
</>
  )
}

export default App;
