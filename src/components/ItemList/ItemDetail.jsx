import ItemCount from './ItemCount'

export default  function ItemDetail() {
    const onAdd = (count) => {
            alert("items agregados al carrito: " + count)
    }
    return (
        <>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </>
    )
    
}
