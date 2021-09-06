import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Row, Form, Input, Label, FormGroup, Button, Component} from 'reactstrap';

import EastIcon from '@material-ui/icons/East';

import Titulo from './titulo';

class Otp extends React.Component{

    render(){

        return(

            <div>

                <Titulo />

                <br></br>
                <div className="izquierda">
                <h6 > Se ha enviado un código a tu teléfono, ingresalo: </h6>

                </div>
                
                <br></br>
                    <section className="form-registerOtp">
                    <Col xs="1"></Col>
                        <Col xs="4"> 

                                <Form className="label-large">

                                        <div class="form-group">
                                            <label for="otp"  >OTP</label> 
                                            <input  name="txtOtp" class="form-control" type="text" placeholder="Ingresa tu OTP" required></input>
                                        </div>
                                        <br></br>
                                        <button style={{width:375}} type="submit" name="enviar" class="btn btn-primary mb-4" >
                                            Continuar <EastIcon/> 
                                        </button>
                                        <br></br>

                                </Form>
                        </Col>
                    </section>

                    <br></br>

                    <div className="izquierda">
                        <div class="form-group">
                            <a style={{color:'Black'}} href="">No he recibido ningún código.</a>
                        </div>

                    </div>


            </div>


        );


    }



}

export default Otp;