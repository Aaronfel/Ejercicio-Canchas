import { useContext, useEffect, useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Context } from '../../store/canchasContext';
import './Cancha.css'

const Cancha = () => {
    const { deporte } = useParams()
    const { deportes, getDeportes } = useContext(Context)
    const [reserva, setReserva] = useState({})
    const [reservas, setReservas] = useState([])

    /* me quede en la mitad de lo del local storage estaba con dolor de cabeza pero bueno lo hago por mi cuenta  */
    const Reservar = (cancha, reservaAguardar) => {
        setReserva({idcancha: cancha, idreserva: reservaAguardar})
        setReservas([...reservas, reserva])
        toast.success('Reserva realizada con exito', {
            duration: 4000,
            position: 'top-center',
        })
    }
    useEffect(() => {
        getDeportes(`${deporte}`)
    }, [deportes])

   /*  const setLocalStorage = () => {
        localStorage.setItem('cancha', reserva)
    } */
    


    return (
        <>
            <Toaster />
            <h3>Canchas De {deporte}</h3>

            {deportes.length > 0 ?

                deportes.map(Cancha => (

                    <div key={Cancha.id} className='container containerCancha shadow p-3 mb-3 bg-white rounded'>

                        <img className='imgStyle' src={Cancha.url_imagen} alt='' />
                        <div className='cardElements w-100'>
                            <h4 className='ms-2'>{Cancha.nombre}</h4>
                            <p className='ms-2'>Cantidad de jugadores: {Cancha.jugadores}</p>
                            <p className='ms-2'> Cancha Techada: {Cancha.techo ? 'si' : 'no'}</p>
                            <p className='ms-2'>horarios:  </p>
                            <div className='ms-5'>
                                {Cancha.horarios.map(horario => (
                                    <button key={horario.id} style={{ height: '40px' }} type="button"
                                        onClick={() => Reservar(Cancha.id, horario.id)} className={'btn btn-outline-secondary'} >
                                        {horario.hora}</button>
                                ))}
                            </div>

                            <div className='d-flex justify-content-end mt-3'>
                                <button type="button" className='btn btn-success'>Reservar</button>
                            </div>                            
                        </div>
                    </div>
                ))

                :

                <h4>No hay Canchas disponibles</h4>

            }
        </>
    );
}

export default Cancha;