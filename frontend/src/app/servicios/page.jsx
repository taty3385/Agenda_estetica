"use client"
import { useEffect } from "react"
import useAgendaHooks from '../../hooks/agendaHooks';
import Card from '../../components/card';

const Service = () => {
    const { getServicios, servicios } = useAgendaHooks();


    useEffect(() => {
        getServicios();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-white mb-8">Nuestros Servicios</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {servicios.map((servicio) => (
                    <Card
                        key={servicio._id}
                        id={servicio._id}
                        nombre={servicio.nombre}
                        description={servicio.descripcion}
                        precio={servicio.precio}
                        duracion={servicio.duracion}
                        dias={servicio.dias}
                    />
                ))}
            </div>
        </div>
    );
}

export default Service;
