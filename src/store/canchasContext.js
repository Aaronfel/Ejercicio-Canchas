import axios from "axios";
import { createContext, useState } from "react";


export const Context = createContext(null)

    const CanchasProvider = ({ children }) => {
        const [deportes, setdeportes] = useState([])

        const getDeportes = async (deporte) => {
            const response = await axios.get(`https://apipdtc.herokuapp.com/${deporte}`) 
            setdeportes(response.data)
        }

        return (
            
            <Context.Provider value={{deportes, getDeportes}}>
                {children}
            </Context.Provider>
        );
    }

export default CanchasProvider;