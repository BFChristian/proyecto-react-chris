import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button/';
import ItemListConteiner from './conteiners/itemList';
function App() {
  return (
    <>
    <NavbarComponent/>
    <ItemListConteiner/>
    <h2>Bienvenido al sitio</h2>
    <ButtonComponent text={`a`}/>
    </>
  );
}

export default App;
