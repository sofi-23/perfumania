import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getItems} from '../../services//Items';
import {getFirestore} from '../../services/getFirestore'

export default  function ItemListContainer() {
    const [itemList, setItemList] = useState([]);

    const [loading, setLoading] = useState(true);

    const { idCategoria } = useParams();

    useEffect(() => {
        const db = getFirestore()
        if (idCategoria) {
            const dbQueryCat = db.collection("items").where( 'category', '==' , idCategoria );
            dbQueryCat.get()
            .then( (re) => setItemList(re.docs.map(prod=> ({id: prod.id, ...prod.data()}))))
            .finally(setLoading(false))
            
        }else {
            const dbQuery = db.collection("items").get() //items es el nombre de la coleccion
            // const dbQuery = db.collection("items").doc(id como el del useparams).get() (PARA TRAER 1)
            dbQuery
            .then(resp=> setItemList(resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
            .finally(setLoading(false))
            }

        
    }, [idCategoria])


    
    return (
        <>
        
        { loading ? <h1>Cargando...</h1> :  <ItemList itemList={itemList}  /> }
        

        </>
    )
    
}
