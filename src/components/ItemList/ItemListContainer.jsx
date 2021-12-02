import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getFirestore} from '../../services/getFirestore'

export default  function ItemListContainer() {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategoria } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = idCategoria? db.collection("items").where( 'category', '==' , idCategoria ) : db.collection("items")
        
        dbQuery.get()
            .then( (res) => setItemList(res.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
            .catch(err=> console.log(err))
            .finally(setLoading(false))

    }, [idCategoria])
    
    return (
        <>
        
        { loading ? <h1>Cargando...</h1> :  <ItemList itemList={itemList}  /> }
        

        </>
    )
    
}
