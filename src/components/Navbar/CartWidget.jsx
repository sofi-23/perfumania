import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'

export default function CartWidget () {
    const {units} = useCartContext()

    return (
        <>
            <div className="cartNavContainer d-flex"> 
                <FontAwesomeIcon className="cartNavIcon" icon={faShoppingCart} /> 
                {
                units > 0 && 
                <div className="cartBadge m-auto"><span>{units}</span></div> 
                }
            </div>
        </>
        
    )
}