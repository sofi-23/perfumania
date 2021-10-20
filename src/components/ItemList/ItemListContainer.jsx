import ItemDetail from './ItemDetail'

export default  function ItemListContainer({mensaje}) {
    return (
        <>
            <h1>{mensaje}</h1>
            <ItemDetail />
        </>
    )
    
}
