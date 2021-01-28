import React, {Fragment, useState} from 'react';
import {Button, Form, Row, Col, notification}from 'antd'

export default function Pregunta(){

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);

    // Funcion que lee el presupuesto
    // const definirPresupuesto = e => {
    //     guardarCantidad(parseInt(e.target.value),10 );
    // } 
    // Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad)){
            notification['error']({
                message: "La cantidad ingresada no es correcta"
            })
        }else{
            notification['success']({
                message: "Presupuesto creado exitosamente"
            })
        }
    }

    return(
        <Fragment >
            <div className="contenido-principal contenido">
                <h2>Coloca tu presupuesto</h2>
                <Form onSubmitCapture={agregarPresupuesto}>
                    <Row >
                        <Col span={24}>
                            <Form.Item >
                                    <input
                                        type="number"
                                        className="u-full-width"
                                        placeholder="Coloca tu presupuesto"
                                        onChange={e =>  guardarCantidad(parseInt(e.target.value) )}
                                    />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <Button width={1000} htmlType="submit" type="primary u-full-width">Definir Presupuesto</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fragment>
    );

}