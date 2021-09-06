import React from 'react';

import styles from '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Row, Form, Input, Label, FormGroup, Button, Component} from 'reactstrap';

import EastIcon from '@material-ui/icons/East';

import Titulo from './titulo';

class SolicitudCredito extends React.Component 
{

    
    render(){

        return (

            <div className="img-body">

                
                <Titulo />

        {/* ----------------------------------------------------------------------------------------------- */}

            {/* <body >

            <div> */}

                        <section className="form-registerCaris">


                            
                                <Col xs="1"></Col>
                                    <Col xs="4"> 
                                            <Form className="label-large letraPeque" >
                                                <div class="form-group">
                                                    <label for="nombre">Nombre</label> 
                                                    <input  name="txtNombre" class="form-control " type="text" placeholder="Ingresa tu nombre" required></input>
                                                </div>
                                                
                                                <div class="form-group mt-4">
                                                    <label for="identificacion" >Identificación</label>
                                                    <input name="txtIdentificacion" class="form-control " type="text" placeholder="Ingresa tu identificación" required></input>
                                                </div>
                                                <div class="form-group mt-4">
                                                    <label for="monto"  >Monto requerido</label>
                                                    <input  name="txtMonto" class="form-control" type="number" placeholder="Ingresa tu Monto Requerido" required></input>
                                                </div>
                                                <button style={{width:375}} type="submit" name="enviar" class="btn btn-primary mb-4 mt-4" onClick={() => {}}  >
                                                    Enviar <EastIcon/> 
                                                </button>
                                       

                                                <div class="form-group mt-4">
                                                    <a style={{color:'white'}} href="">Ver estado de mi solicitud de crédito</a>
                                                </div>

                                        </Form>
                                    </Col>
                        </section>

                 </div>

                 /* </body>
                        
            </div> */

            
        );
    }


}

export default SolicitudCredito;