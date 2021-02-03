import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCountComponent= ({stock, onAdd, onSubtract, contador}) => {
    return (
        <>
            <button onClick={()=>{onSubtract(stock)}}>-</button>
            <b>{contador}</b>
            <button onClick={()=>{onAdd(stock)}}>+</button>
            <button>comprar</button>
        </>
    );
};
