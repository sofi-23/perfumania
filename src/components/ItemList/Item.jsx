import {Link} from 'react-router-dom';


export default function Item ({id, name, price, pictureUrl}) {


    return (
        <Link to={`/item/${id}`}>
        <div className="card mt-3 mb-3">
            <div className="insideCard">
            <img src={pictureUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} USD</p>
                <button className="btn btn-primary" >
                Comprar
                </button>
            </div>
            </div>
        </div>
        </Link>
        )
}
