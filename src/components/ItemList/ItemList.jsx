import Item from './Item';
import {items} from './Items';
import { useState, useEffect } from 'react';

export default function ItemList() {
    const [item, setItem] = useState([]);

    const fetchItems = new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(items)
        },2000)
        
    })
    useEffect(() => {
        fetchItems
        .then(res=> setItem(res))
        .catch(err=> console.log(err))
    }, [])

    return (
        <>
        <div className="d-flex justify-content-around mt-5">
        {item.map(it=> {
            return (
        <Item key={it.id} name={it.name} pictureUrl={it.img} price={it.price} />)
        })}
        </div>
        </>
    )
}