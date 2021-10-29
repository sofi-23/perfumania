
export default function Item ({id, name, price, pictureUrl}) {
    return (
    <div className="card">
        <img src={pictureUrl} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
    </div>
        )
}
