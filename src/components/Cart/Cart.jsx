import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Cart = () => {

    const { cartList, isInCart } = useCartContext();




    return (
        <>

        {
            cartList.length === 0 && 
            <div className="w-100 m-auto">
            <h1>El carrito está vacío</h1>
            <Link to="/">
            <button className="btn btn-primary">Volver al home</button>
            </Link>
            </div>

        }
            {cartList.length > 0 && cartList.find(it=> isInCart(it.id)) ?
        
                cartList.map((item) =>  (
                        <ul key={item.id}>
                            <li>Nombre: {item.name}</li>
                            <li>Subtotal: {item.subtotal}</li>
                        </ul>
                    
                )                    
                
            ):
            <h1>PRUEBA</h1>}
        </>
    )
}

export default Cart;