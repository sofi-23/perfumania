import Item from './Item';
import { useState, useEffect } from 'react';

export default function ItemList({itemList}) {


    return (
        <>
        <div className="d-flex justify-content-around container mt-5 itemList">
        {itemList.map(it=> {
            return (
        <Item id={it.id} name={it.name} pictureUrl={it.img} price={it.price} />)
        })}
        </div>
        </>
    )
}