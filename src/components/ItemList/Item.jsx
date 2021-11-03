import {Link} from 'react-router-dom';

export default function Item ({id, name, price, pictureUrl}) {
 
    return (
        <Link to={`/detalle/${id}`}>
        <div key={id} className="card mt-3">
            <img src={pictureUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
        </Link>
        )
}
