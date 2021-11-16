import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'

export default function CartWidget () {
    const {units} = useCartContext()

    return (
        <>
        {
            units > 0 &&
            <div className="cartNavContainer d-flex"> 
                <FontAwesomeIcon className="cartNavIcon" icon={faShoppingCart} /> 
                <div className="cartBadge m-auto"><span>{units}</span></div> 
            </div>
        }
        </>
        
    )
}