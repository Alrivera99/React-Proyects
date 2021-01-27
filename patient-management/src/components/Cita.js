import React from 'react';

export default function Cita ({cita, eliminarCita}) {
    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button onClick={() => eliminarCita(cita.id)} className="button elminar u-full-width">Eliminar </button>
        </div>     

    );
}