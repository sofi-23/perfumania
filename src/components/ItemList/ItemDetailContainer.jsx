import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {getItems} from './Items'

export default function ItemDetailContainer () {
        const [item, setItem] = useState([]);
        const { id } = useParams();
        const [loading, setLoading] = useState(true)
        console.log("ID " + id)
        useEffect(() => {
            getItems
            .then (data => data.filter((it)=> it.id == id))
            .then (dataResolve => {
                setItem(dataResolve[0]);
            })
            .catch (err => alert("Error " + err))
            .finally (()=> setLoading(false))
        }, [id])

      console.log("Item" + JSON.stringify(item))
     
    return (
        <>
            {loading ? <h1>Cargando... </h1> :  <ItemDetail   id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />}
           
        </>
    )
}
