import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget () {
    return (
        <div className="cartNavContainer"> 
            <FontAwesomeIcon className="cartNavIcon" icon={faShoppingCart} /> 
        </div>
    )
}