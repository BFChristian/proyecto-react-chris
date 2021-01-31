import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button/';
import ItemListConteinerComponent from './components/itemListConteiner';
function App() {
  return (
    <>
    <NavbarComponent/>
    <ItemListConteinerComponent/>
    <h2>Bienvenido al sitio</h2>
    <ButtonComponent text={`a`}/>
    </>
  );
}

export default App;
