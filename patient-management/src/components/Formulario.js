import { notification } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import React,{Fragment, useState} from 'react';

export default function Formulario({crearCita}){

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e =>{
        e.preventDefault();
        
        if(!cita.mascota || !cita.propietario || !cita.fecha || !cita.hora || !cita.sintomas){
            notification['error']({
                message:"Todos los campos son obligatorios"
            })
        }else{
            //Asigno Id
            cita.id = uuidv4();
            //Crear la cita
            crearCita(cita)

            //Message
            notification['success']({
                message:"Cita registrada correctamente"
            })
            
            // Reiniciar el form
            actualizarCita({
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
        }
    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={e => actualizarCita({...cita, mascota: e.target.value})} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del propietario" value={propietario} onChange={e => actualizarCita({...cita, propietario: e.target.value})}  />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={e => actualizarCita({...cita, fecha: e.target.value})}  />
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={e => actualizarCita({...cita, hora: e.target.value})}/>
                <label>Sintomas</label>
                <textarea  name="sintomas" className="u-full-width" value={sintomas} onChange={e => actualizarCita({...cita, sintomas: e.target.value})} >
                </textarea>
                <button type="submit" className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    )
}