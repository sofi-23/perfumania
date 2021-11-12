import Item from './Item';
import {memo} from 'react';


const ItemList = memo (({itemList}) => {

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
)

export default ItemList;