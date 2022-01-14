import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({url_imagen, deporte}) => {

    return (
        <>
            <div className="card" style={{width: '23rem'}}>
                <img style={{height: "150px"}} src={url_imagen} className="card-img-top" alt={deporte} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{deporte}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={`${deporte}`}><button className="btn btn-success">Canchas {deporte}</button></Link>
                    </div>
            </div>
        </>
    );
}

export default Card;