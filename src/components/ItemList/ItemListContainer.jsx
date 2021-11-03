import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {items} from './Items';
import { getNodeText } from '@testing-library/dom';

export default  function ItemListContainer() {
    const [item, setItem] = useState([]);
    const { idCategoria } = useParams();
    console.log("idCategoria en ItemListCotnainer " + idCategoria);

    const getItems = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000);
        })

        useEffect(() => {
            if (idCategoria ) {
                getItems
                .then(res=> setItem(res.filter((cat) => cat.category === idCategoria)))
                .catch(err=> alert("ERROR " + err)) 
            } else {
                getItems
                .then(res=> setItem(res))
                .catch(err=> alert("Error " + err)) 
            }
          
        }, [idCategoria])
    
        console.log("ITEM: " + item)
    return (
        <>
         <ItemList itemList={item}  /> 

        </>
    )
    
}
