import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EastIcon from '@material-ui/icons/East';
import Titulo from './titulo';

class preAprobado extends React.Component 
{  
    render(){
        return (
            <div>
                 <Titulo />
                 <div >
                <form class="mt-5 ">
                    <div class="izquierda">
                    <h3 style={{color:'gray'}}>Tu crédito ha sido pre-aprobado</h3>
                    <h4 style={{color:'gray'}}>Completa la siguiente información para continuar</h4>
                    </div>
                    <div class="mt-4 form-preAprobado">
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="telefono">Teléfono</label>
                            <input type="number" class="form-control" id="telefono" placeholder="Ingresa tu teléfono"></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="primerApellido">Primer Apellido</label>
                            <input type="text" class="form-control" id="primerApellido" placeholder="Ingresa tu primer apellido"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="identificacion">Identificación</label>
                            <input type="text" class="form-control" id="identificacion" placeholder="Ingresa tu identificación"></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="segundoApellido">Segundo Apellido</label>
                            <input type="text" class="form-control" id="segundoApellido" placeholder="Ingresa tu segundo apellido"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="paisResidecia">Pais de residencia</label>
                            <input type="text" class="form-control" id="paisResidecia" placeholder="Ingresa tu pais de residencia"></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="estadoResidencia">Estado de residencia</label>
                            <input type="text" class="form-control" id="estadoResidencia" placeholder="Ingresa tu estado de residencia"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="direccionExacta">Dirección exacta</label>
                            <input type="password" class="form-control" id="direccionExacta" placeholder="Ingresa tu dirección exacta"></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="email" placeholder="Ingresa tu email"></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-6 mt-4">
                            <label>
                                <input type="checkbox" />
                                    Acepto los <a href=" ">términos</a> y <a href=" ">condiciones</a> del servicio.
                            </label>
                        </div>
                        <div class="form-group col-md-6 mt-3">
                            <button style={{width:425}} type="submit" name="continuar" class="btn btn-primary mb-4" >
                                Continuar <EastIcon/> 
                            </button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
export default preAprobado;