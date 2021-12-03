import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getFirestore } from '../../services/getFirestore'
import  firebase  from 'firebase';
import { useState, useEffect } from 'react';
import {  Table  } from 'reactstrap';
import  CartForm  from './CartForm'
import IdModal from './IdModal'

export default function Cart  ()  { 
    const [modal, setModal] = useState(false);
    const [idOrder, setIdOrder] = useState("");
    const [formData, setFormData] = useState( { name:'', phone:'',email: '',} )
    const { cartList, total, clear, removeItem } = useCartContext();
    
    const createOrder = (e) => { 
        e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
        let orden = {} 
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = formData; 
        orden.total = total;
        orden.items = cartList.map( item => { //la lista de compras
            const id = item.id;
            const nombre = item.name;
            const precio = item.precio * item.cantidad;
            return { id, nombre, precio }
        }   
        )  

        const dbQuery = getFirestore()
            dbQuery.collection('orders').add(orden) 
                .then( resp => setIdOrder(resp.id) ) 
                .catch( err => console.log(err) )
                .finally(()=>setFormData({ name:'', phone:'', email: ''})) 
        
        //Actualiza todos los items que están en el cartList del cartContext

        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id) 
        )
        
        const batch = dbQuery.batch()
            

        itemsToUpdate.get() 
            .then( collection=>{
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })
                batch.commit().catch(err=>console.log("Error batch " + err))
            })
            .catch(err=> console.log("ERROR: " + err))
            clear()
        }   

        const handleChange=(e)=>{
                setFormData({
                    ...formData, 
                    [e.target.name]: e.target.value
                })      
            }

        useEffect(() => {  
                idOrder !== "" && setModal(!modal)               
        }, [idOrder])

    return (
        <>
        {
        cartList.length > 0  ?
        <div className="d-flex justify-content-between mt-5">
            <Table striped responsive className="cartTable">
                <thead>
                    <tr>
                        <th>Foto</th>
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
                <CartForm createOrder={createOrder} handleChange={handleChange} formData={formData} />
            </div>
            : 
            <>
            <IdModal modal={modal} idOrder={idOrder} />
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>El carrito está vacío</h1>
            <Link to="/">
            <button className="btn btn-primary mt-3">Volver al home</button>
            </Link>
            </div> 
            </>
            }
        
        </>
    )
}