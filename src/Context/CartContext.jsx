import { createContext, useState, useContext } from 'react';

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 

export function CartContextProvider ({children}) {
    
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0) //TOTAL PRECIO
    const [units, setUnits] = useState(0) //CANTIDAD DE PRODUCTOS TOTALES PARA EL CARRITO

    function addUnit(count) {
        return (setUnits(units + count)) //UNIDADES TOTALES (PARA EL CARTWIDGET)
        
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

    function removeItem(itemId, itemCant, itemSubtotal) {
        const remove = cartList.filter(it=> it.id !== itemId)
        setCartList(remove); 
        setUnits(units - itemCant)
        setTotal(total - itemSubtotal)
    }

    function clear() {
        setCartList([])
        setUnits(0)
        setTotal(0)
    }

    function isInCart(id) {
        //console.log(cartList.map(it=> it.name))
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
                total,
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