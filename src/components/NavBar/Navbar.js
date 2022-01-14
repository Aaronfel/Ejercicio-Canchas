import { Link } from 'react-router-dom';
import './Navbar.css'
import logoCanchas from '../../img/logoCanchas.jpg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/'> <img className='navLogo' src={logoCanchas} alt='logo de las canchas' /> </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/futbol'>Futbol</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/tenis'>Tennis</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/voley'>Voley</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;