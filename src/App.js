import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './components/Home';
import Cancha from './components/Cancha'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:deporte' element={<Cancha />}/>
      </Routes>
    </Router>
  );
}

export default App;
