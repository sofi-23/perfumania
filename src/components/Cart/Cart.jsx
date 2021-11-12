import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'


const Cart = () => {
    
    const { cartList } = useCartContext()

    return (
        <>
            {cartList.length > 0 ? //HACER UNA CONDICION DENTRO DE LA CONDICION?? Si el item.id es != a los item.id del cartList!!!
                cartList.map((item) =>  //hay que cambiar la condicion y que solo renderice si hay algo nuevo.  
                    <div>
                        <h5>Nombre: {item.name}</h5>
                        <span>Subtotal: {item.subtotal}</span>
                    </div>
                
            ):
            <div className="w-100 m-auto">
            <h1>El carrito está vacío</h1>
            <Link to="/">
            <button className="btn btn-primary">Volver al home</button>
            </Link>
            </div>
            }
        </>
    )
}

export default  Cart;