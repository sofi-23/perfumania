import Item from './Item';
import {items} from './Items';
import { useState, useEffect } from 'react';

export default function ItemList({categoria}) {
    const [item, setItem] = useState([]);
    console.log("idCateogria en ItemList" + categoria)

    const fetchItems = new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(items)
        },500)
        
    })
    useEffect(() => {
        if (categoria ) {
            fetchItems
            .then(res=> setItem(res.filter((cat) => cat.category === categoria)))
            .catch(err=> console.log(err)) 
        } else {
            fetchItems
            .then(res=> setItem(res))
            .catch(err=> console.log(err)) 
        }
      
    }, [categoria])

    return (
        <>
        <div className="d-flex justify-content-around container mt-5 itemList">
        {item.map(it=> {
            return (
        <Item id={it.id} name={it.name} pictureUrl={it.img} price={it.price} />)
        })}
        </div>
        </>
    )
}