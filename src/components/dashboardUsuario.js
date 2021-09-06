import React from 'react';

import styles from '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Row, Form, Input, Label, FormGroup, Button, Component} from 'reactstrap';

import EastIcon from '@material-ui/icons/East';

import Titulo from './titulo';

import MenuLateral from './menuLateral';

class dashboardUsuario extends React.Component 
{

    
    render(){

        return (

            <div >
                

            <div class="mt-5">
                    <h1>Datos laborales</h1>
                    </div> 

                    <section className="form-dashboard mt-4">

                        

                    <form class="mt-2">
                        
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                                                    <label for="tipoTrabajador">Tipo de Trabajador</label>
                                                    <select style={{width:418,height:37 }} name="txtTipoTrabajador">
                                                            <option>Seleccione el tipo de trabajador</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                    </select>
                        </div>
                        <div class="form-group col-md-6">
                                                    <label for="empresaLabora">Empresa para la que labora</label> 
                                                    <input name="txtEmpresaLabora" class="form-control" type="text" placeholder="Ingresa tu nombre" required></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                                                    <label for="ingresoBruto">Ingreso Bruto</label> 
                                                    <input name="txtIngresoBruto" class="form-control" type="text" placeholder="Ingresa tu nombre" required></input>
                        </div>
                        <div class="form-group col-md-6">
                                                    <label for="puesto" >Puesto</label>
                                                    <input name="txtPuesto" class="form-control " type="text" placeholder="Ingresa tu identificación" required></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                                                    <label for="ingresoNeto" >Ingreso Neto</label>
                                                    <input name="txtIngresoNeto" class="form-control " type="text" placeholder="Ingresa tu identificación" required></input>
                        </div>
                        <div class="form-group col-md-6">
                                                    <label for="antiguedadLaboral" >Antiguedad Laboral</label>
                                                    <input  name="txtAntiguedadLaboral" class="form-control " type="text" placeholder="Ingresa tu identificación" required></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                                                    <label for="telefono"  >Teléfono</label>
                                                    <input  name="txtTelefono" class="form-control" type="number" placeholder="Ingresa tu Monto Requerido" required></input>
                        </div>
                        <div class="form-group col-md-6">
                                                    <label for="otrosIngresos" >Otros Ingresos</label>
                                                    <input  name="txtOtrosIngresos" class="form-control " type="text" placeholder="Ingresa tu identificación" required></input>
                        </div>
                    </div>
                   
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                                                    
                        </div>
                        <div class="form-group col-md-6 mt-3">
                        <button style={{width:415}} type="submit" name="continuar" class="btn btn-primary mb-4" >
                                Continuar <EastIcon/> 
                            </button>
                        </div>
                    </div>
                </form>

                
                

                </section>
                        
            </div> 

            
        );
    }


}

export default dashboardUsuario;

