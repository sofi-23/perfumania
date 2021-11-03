import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

export default  function ItemListContainer() {
    const { idCategoria } = useParams()
    console.log("idCategoria en ItemListCotnainer " + idCategoria)
    return (
        <>
            <ItemList  categoria={ idCategoria } />

        </>
    )
    
}
