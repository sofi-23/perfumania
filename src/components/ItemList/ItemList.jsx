import Item from './Item';


export default function ItemList({itemList}) {

    return (
        <>
            <div className="d-flex justify-content-around container mt-5 itemList">
                {itemList.map(it=> {
                    return (
                <Item key={it.id} id={it.id} name={it.name} pictureUrl={it.img} price={it.price} />)
                })}
            </div>
            
        </>
    )
}