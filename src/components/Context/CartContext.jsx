import { createContext, useState, useContext } from 'react';

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 

export function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0) //TOTAL PRECIO
    const [units, setUnits] = useState(0) //CANTIDAD DE PRODUCTOS PARA EL CARRITO


    function addUnit(count) {
        return (setUnits(units + count))
    }
    
    function handleTotal(price, count) {
        return (setTotal(total+price*count)) 
        
    }

    function addItem(items) { 
        setCartList([
        ...cartList,
        items
    ]) 
    }
    function removeItem(itemId) {
        const remove = cartList.filter(it=> it.id === itemId)
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
            units, 
            isInCart,
            addItem,
            removeItem,
            clear,
            addUnit, 
            handleTotal
             
          

        }}>
            {children}
        </CartContext.Provider>
        </>
    )
}