import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

import {useState} from 'react';

export default  function ItemDetail({name, image, price,  stock, description}) {
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(false);

    const onAdd = (count) => {
        setCount(count)
        setDisplay(true)
        alert("items agregados al carrito: " + count)

    }
    return (
        <>
                <div className="itemDetail">
                    <img className="itemDetailImg" src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span>{price}</span>
                        <span>{stock} en stock</span>
                        <p>{description}</p> 
                        {  display ? 
                        <Link to="/cart"> <button className="btn btn-primary mt-3 w-100 m-auto" type="button">Finalizar compra</button> </Link> :
                          <ItemCount initial={1} stock={7} onAdd={onAdd}  /> 
                         
                         }
                    </div>
                </div>
            
        </>
    )
}