import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirestore';
//import {getItems} from './Items'

export default function ItemDetailContainer () {
        const [item, setItem] = useState([]);
        const { id } = useParams();

        const [loading, setLoading] = useState(true)
        useEffect(() => {
            const db = getFirestore();
            const dbQuery = db.collection("items").doc(id).get()
            dbQuery
            .then(resp=> setItem(resp.data()))
            .catch(err=> console.log("ERROR " + err))
            .finally(setLoading(false))

            
        }, [id])

    return (
        <>
            {loading ? <h1>Cargando... </h1> :  <ItemDetail   id={id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />}
           
        </>
    )
}
