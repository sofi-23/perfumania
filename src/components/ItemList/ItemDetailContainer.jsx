import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirestore';


export default function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection("items").doc(id).get()
        dbQuery
            .then( resp=> setItem(resp.data()))
            .catch( err => console.log(err.message))
            .finally(setTimeout(() =>setLoading(false), 2000))

            
        }, [id])


 
      
    return (
        <> 
          
            {
            loading ?
            <div className="spinner-container d-flex justify-content-center align-items-center">
                <div className="spinner"></div> 
            </div>:
                 <ItemDetail   id={id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description}  />   
              
              }
           
        </>
    )
            }