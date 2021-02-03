import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ItemCountComponent } from '../../components/itemCount';

const ItemListConteiner = (props) => {

    const [contador, setContador] = useState(1)
    const onAdd = (stock) => {
        console.log(stock)
        if (contador<stock) {
            setContador(contador+1);
        }else{
            console.log("no hay stock");
        }
    }
    
    const onSubtract = (stock) => {
        if (contador>1) {
            setContador(contador-1);
        }else{
            console.log("imposible restar mas de 0");
        }
    }

    return (
        <>
            <ItemCountComponent stock={12} contador={contador} onAdd={onAdd} onSubtract={onSubtract}/>
            <h1>soy un item list conteiner</h1>
        </>
    );
};

export default ItemListConteiner;
