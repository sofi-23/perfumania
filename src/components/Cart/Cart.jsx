import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'


const Cart = () => {

    const { cartList, total, clear, removeItem } = useCartContext();
    return (
        <>
       
        {
        cartList.length > 0  ?
         <Table striped responsive className="cartTable">
            <thead>
                <tr>
                    <th >Foto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cartList.map((item) =>  (
                    <tr key={item.id}>
                        
                        <td><img className="cartItemImage" src={item.img} alt={item.nombre} /></td>
                        
                        <td>{item.name}</td>
                        
                        <td>{item.cantidad}</td>
                        
                        <td>$ {item.precio}</td>
                        
                        <td>$ {item.subtotal}</td>
                        <td><div className="trashIcon" onClick={()=>removeItem(item.id, item.cantidad, item.subtotal)} ><FontAwesomeIcon icon={faTrashAlt} /></div></td>
                   </tr>
                    
                )                    
                
            )}
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>$ {total}</td>
                <td><div className="trashIcon" onClick={()=>clear()}><FontAwesomeIcon icon={faTrashAlt} /></div><span>Vaciar carrito</span></td>
            </tr> 
            </tfoot>
            </Table>
            :
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>El carrito está vacío</h1>
            <Link to="/">
            <button className="btn btn-primary mt-3">Volver al home</button>
            </Link>
            </div>
            }
        </>
    )
}

export default Cart;