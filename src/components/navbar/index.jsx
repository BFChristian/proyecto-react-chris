import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidgetComponent from '../cartWidget';
import "./styles.css";
function NavbarComponent() {
  return (
    <>
    <nav className="nombre">
      <h1>WercadoLibre</h1>
        <div className="catalogo"> 
          <ul>
            {<p><a href="#" className="colorCat">Remeras</a> <a href="#" className="colorCat">Zapatillas</a> <div style={{float: 'right', width:'50px', height:'50px'}}><CartWidgetComponent/></div></p>}
          </ul>
          
        </div>  
    </nav>
    </>
  );
}

export default NavbarComponent;

