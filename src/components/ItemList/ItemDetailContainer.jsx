import {useState, useEffect} from 'react';
import {items} from './Items';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


export default function ItemDetailContainer () {
        const [item, setItem] = useState([]);
        const { id } = useParams();

    
        const getItem = () => {
            new Promise ((resolve, reject) => {
                setTimeout(() => {
                    const x = items.filter((item)=>item.id == id)
                    resolve(x)
                }, 2000)
            })
            .then (dataResolve => {
                setItem(dataResolve[0]);
            })
            .catch (err => console.log(err)); 
        } 
    

        useEffect(() => {
            getItem();
        }, [])

      console.log("Item" + JSON.stringify(item))
     
    return (
        <>
                <ItemDetail  id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />
        </>
    )
}
