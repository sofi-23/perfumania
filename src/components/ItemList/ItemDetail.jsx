import ItemCount from './ItemCount';

import {useState} from 'react';

export default  function ItemDetail({name, image, price,  stock, description}) {
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState(false);
    const onAdd = (count) => {
        setCount(count)
        setButtonText(true)
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
                        <ItemCount initial={1} stock={7} onAdd={onAdd}  boolean={buttonText} /> 
                    </div>
                </div>
            
        </>
    )
}