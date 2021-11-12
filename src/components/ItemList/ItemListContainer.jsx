import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getItems} from './Items';

export default  function ItemListContainer() {
    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState(true);

    const { idCategoria } = useParams();

    console.log("idCategoria en ItemListCotnainer " + idCategoria);
        useEffect(() => {
            if (idCategoria ) {
                getItems
                .then(res=> setItem(res.filter((cat) => cat.category === idCategoria)))
                .catch(err=> alert("ERROR " + err)) 
                .finally(setLoading(false))
            } else {
                getItems
                .then(res=> setItem(res))
                .catch(err=> alert("Error " + err)) 
                .finally(setLoading(false))
            }    
        }, [idCategoria])
    
    return (
        <>
        { loading ? <h1>Cargando...</h1> :  <ItemList itemList={item}  /> }
        

        </>
    )
    
}
