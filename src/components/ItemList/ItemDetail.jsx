import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useCartContext} from '../../Context/CartContext'


export default  function ItemDetail({id,  name, image, price,  stock, description}) {
   // const [sameProductCount, setSameProductCount] = useState(0);
    const [display, setDisplay] = useState(false);
    const {cartList, addItem, isInCart, addUnit, handleTotal} = useCartContext()
    console.log("ID: " + id)
    const onAdd = (count) => {
        setDisplay(true)
        addUnit(count) // PARA EL CARTWIDGET
        if (!isInCart(id)) {   //!!!!!!SIEMPRE DA false  
        addItem({name, cantidad: count, precio: price, subtotal: parseFloat(price*count), id: id, img: image })   
        handleTotal(price, count)
        console.log("NO ESTÁ EN EL CARRITO.")
        }else {
            const find = cartList.find(it=> isInCart(it.id))
            find.cantidad += count
            console.log("ESTA EN EL CARRITO. ")
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
                        <div  className="d-flex justify-content-around"><Link to="/"><button className="btn btn-primary">Volver</button></Link> <Link to="/cart"> <button className="btn btn-primary  " type="button">Finalizar compra</button> </Link></div> :
                        <ItemCount initial={1} stock={stock} onAdd={onAdd}  /> 
                        
                        }
                    </div>
                </div>
            
        </>
    )
}