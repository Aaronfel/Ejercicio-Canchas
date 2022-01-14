import { useContext, useEffect } from 'react';
import { Context } from '../../store/canchasContext';
import Card from '../Card';
import Carousel from '../Carousel'
import './Home.css'
import imgRedes from '../../img/iconsRedes.png'
import mapa from '../../img/imagenMapa.jpg'

const Home = () => {
    const { deportes, getDeportes } = useContext(Context)

    useEffect(() => {
        getDeportes('deportes')
    }, [deportes])

    return (

        <>
            <Carousel />

            <div className='d-flex justify-content-center'>
                <h2 className='mt-3'>Nuestras canchas</h2>
            </div>

            {deportes.length > 0 ?

                <div className='d-flex justify-content-evenly mt-5'>
                    {deportes.map(deporte => (

                        <div key={deporte.id}>
                            <Card {...deporte} />
                        </div>
                    ))}
                </div>
                :

                <h2>Cargando</h2>

            }

            <div className='containerTitle mt-5 d-flex align-items-center'>
                <h2 className='w-100'>Seguinos en nuestras redes sociales</h2>
                <img src={imgRedes} />
            </div>

            <div className='d-flex mt-5'>
                <form className='shadow p-3 mb-3 bg-white rounded w-100'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <img className='imgMap' src={mapa}/>
            </div>

            <div className='containerTitle mt-5 text-center d-flex align-items-center'>
                <h2 className='w-100'>Hecho Por Aaron Feldman</h2>
            </div>

        </>
    );
}

export default Home;