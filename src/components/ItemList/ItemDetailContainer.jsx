import {useState, useEffect} from 'react';
import {items} from './Items';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {

        const [item, setItem] = useState([])
        const getItem = () => {
            new Promise ((resolve, reject) => {
                setTimeout(()=> {
                    
                    resolve(items)
                }, 2000)
            })
            .then(data=> setItem(data))
            .catch(err=>console.log(err))
        }
        useEffect(() => {
            getItem()
        }, [])
    return (
        <>
          { item.map((item) => {
            return (
                <ItemDetail  id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />
            )
        })
       
        }   
        </>
    )
}