import axios from 'axios';
import { useState } from 'react';

const useAgendaHooks = () => {
    const [servicios, setServicios] = useState([]);

    const getServicios = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/servicios');
            setServicios(response.data.services);
        } catch (error) {
            console.log(error, 'Error al obtener los servicios');
        }
    };

    return { 
        servicios,
         setServicios, 
         getServicios };
};

export default useAgendaHooks;



