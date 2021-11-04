import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function ItemCount ({stock, initial, onAdd, boolean}) {
    const [count, setCount] = useState(initial);
    const [disabledMax, setDisabledMax] = useState(false);
    const [disabledMin, setDisabledMin] = useState(true)

    const add = () => {
        setCount(count + 1)
        setDisabledMin(false)
        if (count === stock - 1 ) {
            setDisabledMax(true)
            
        }
    }
    const substract = () => {
        setCount(count - 1)
        setDisabledMax(false)
        if (count === 2) {
            setDisabledMin(true)
        }
    }

    return (
    <>
    <div className="w-100 d-flex flex-column  align-items-center">
        <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-outline-primary" disabled={disabledMin || stock === 0} onClick={() => substract()} type="button">-</button>
                <span className="p-2">{count}</span>
            <button className="btn btn-outline-primary" disabled={disabledMax || stock === 0} onClick={() => add ()} type="button">+</button>
        </div>
        { boolean ? <Link to="/cart"> <button className="btn btn-primary mt-3" type="button">Finalizar compra</button> </Link> :  <button className="btn btn-primary mt-3" type="button" onClick={() => onAdd(count)}>Agregar al carrito</button> }
    </div>
    </>
    )
}
