import { notification } from 'antd';
import React,{Fragment, useState} from 'react';

export default function Formulario(){

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
            notification['success']({
                message:"Cita registrada correctamente"
            })
        }
    
    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={e => actualizarCita({...cita, mascota: e.target.value})} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del propietario" onChange={e => actualizarCita({...cita, propietario: e.target.value})}  />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={e => actualizarCita({...cita, fecha: e.target.value})}  />
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={e => actualizarCita({...cita, hora: e.target.value})}/>
                <label>Sintomas</label>
                <textarea  name="sintomas" className="u-full-width" onChange={e => actualizarCita({...cita, sintomas: e.target.value})} >
                </textarea>
                <button type="submit" className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    )
}