import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar () {

    return (
        <>
        <nav className="navbar d-flex justify-content-around">
          <div className="navbar-brand">
            <Link className="nav-link nav-brand-link" to="/">Perfumanía</Link>
          </div>
          <div className="d-flex justify-content-around w-50">
              <Link className="nav-link" to="/categoria/femeninas">
                Femeninas
              </Link>
              <Link className="nav-link" to="/categoria/masculinas">
                Masculinas
              </Link>
              <Link className="nav-link" to="/categoria/unisex">
                Unisex
              </Link>
              <Link className="nav-link" to="/categoria/giftSet">
                Gift sets
              </Link>
              <Link className="cart-link" to="/cart">
                <CartWidget/>
              </Link>
          </div>
        </nav>
        </>
    )
}