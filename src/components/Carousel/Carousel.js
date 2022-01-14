import { useContext, useEffect } from 'react';
import { Context } from '../../store/canchasContext';
import './Carousel.css'

const Carousel = () => {
    const { deportes, getDeportes } = useContext(Context)

    useEffect(() => {
        getDeportes('deportes')
    }, [])

    return (
        <>
            {deportes.length > 0 ?

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{height: "450px"}} src={deportes[0].url_imagen} className="d-block w-100" alt={deportes[0].deporte} />
                        </div>
                        <div className="carousel-item">
                            <img style={{height: "450px"}} src={deportes[1].url_imagen} className="d-block w-100" alt={deportes[1].deporte} />
                        </div>
                        <div className="carousel-item">
                            <img style={{height: "450px"}} src={deportes[2].url_imagen} className="d-block w-100" alt={deportes[2].deporte} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                :

                <p>Cargando</p>

            }
        </>
    );
}

export default Carousel;