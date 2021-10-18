
import './App.css';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import ItemListContainer from './components/ItemList/ItemListContainer'

function App() {
  return (
<>
  <NavBar />
  <ItemListContainer mensaje="Próximamente"/>
</>
  )
}

export default App;
