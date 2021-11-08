import { createContext, useState, useContext } from 'react';

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 

export function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const [units, setUnits] = useState(0)

    function addOneUnit() {
       return ( units + 1)
    }
    
    function handleTotal(price, count) {
        return total+price*count
    }


    function addItem(items) { 

       
            setCartList([
            ...cartList,
            items
        ]) 
       
    }
    function removeItem(itemId) {
        const remove = cartList.map(it=> it.id !== itemId)
        setCartList(remove);
    }
    function clear() {
        setCartList([])
    }

    function isInCart(id) {
        if (cartList.find((it) => id === it.id)) {
            return true
        } else {
            return false
        }
    }


    return (
        <>
        <CartContext.Provider value={{
            cartList, 
            isInCart,
            addItem,
            removeItem,
            clear,
            addOneUnit, 
            handleTotal

        }}>
            {children}
        </CartContext.Provider>
        </>
    )
}