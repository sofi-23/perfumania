import { useCartContext } from '../Context/CartContext'

export default function Cart() {
    const {cartList} = useCartContext()

    return (
        <>
            {cartList.length > 0 ? cartList.map((item)=> 
            <div>
                <h5>Nombre: {item.name}</h5>
                <span>Subtotal: {item.subtotal}</span>
                </div>
            
            ):
            <h1>Carrito vacío</h1>
            }
        </>
    )
}