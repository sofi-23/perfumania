import ItemCount from './ItemCount';



export default  function ItemDetail({name, image, price,  stock, description}) {
    const onAdd = (count) => {
        alert("items agregados al carrito: " + count)

    }
    return (
        <>
                <div className="itemDetail">
                    <img className="itemDetailImg" src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span>{price}</span>
                        <span>{stock} en stock</span>
                        <p>{description}</p> 
                        <ItemCount initial={1} stock={7} onAdd={onAdd} /> 
                    </div>
                </div>
            
        </>
    )
}