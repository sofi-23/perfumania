import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useState, createContext} from 'react';
import {useCartContext} from '../Context/CartContext'


export default  function ItemDetail({id,  name, image, price,  stock, description}) {
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(false);
    const {cartList, addItem, isInCart, addUnit, handleTotal} = useCartContext()

    const onAdd = (count) => {
        setCount(count) 
        setDisplay(true)
        addUnit(count)
        if (!isInCart(id)) {
            console.log("ID: " + id)
        addItem({name, cantidad: count, precio: price, subtotal: parseFloat(price*count), id: id })
        
        handleTotal(price, count)
        }else {
            const cartAux = cartList.map((it) => { if (it.name == name) {
                it.cantidad += count
                it.subtotal += it.precio*count   
            }
            return it
            })
            addItem(cartAux)
        }
        

    }
    return (
        <>
                <div className="itemDetail">
                    <img className="itemDetailImg" src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span>{price} USD</span>
                        <span>{stock} en stock</span>
                        <p>{description}</p> 
                        {  display ? 
                        <Link to="/cart"> <button className="btn btn-primary mt-3 w-100 m-auto" type="button">Finalizar compra</button> </Link> :
                        <ItemCount initial={1} stock={stock} onAdd={onAdd}  /> 
                        
                        }
                    </div>
                </div>
            
        </>
    )
}