import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EastIcon from '@material-ui/icons/East';
import Titulo from './titulo';

class calculoCuota extends React.Component 
{  
    render(){
        return (
            <div >
                 <Titulo />
                 <div>
                <form class="mt-5">
                    <div class="izquierda">
                    <h3 style={{color:'gray'}}>Calcule la cuota de su préstamo</h3>
                    
                    </div>
                    <div className="mt-5 form-calculoCuota izquierda">
                    <div class="row mt-4">
                        <div class="form-group col-md-4">
                            <label for="monto_solicitar">Monto a solicitar</label>
                            <input type="number" class="form-control" id="monto_solicitar"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tipo_producto">Tipo producto</label>
                            <input type="text" class="form-control" id="tipo_producto"></input>
                        </div>
                        <div class="form-group col-md-3 mt-4" style={{marginLeft:70}}>
                            <button style={{width:250, height:38}} type="submit" name="continuar" class="btn btn-primary mb-4" >
                                Calcular <EastIcon/> 
                            </button>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="form-group col-md-4">
                            <label for="tasa_interes">Tasa de interés</label>
                            <input type="number" class="form-control"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="plazo_años">Plazo en años</label>
                            <input type="text" class="form-control" id="tipo_producto"></input>
                        </div>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="form-group mt-5" style={{marginLeft:70}}>
                        <div class="row">
                            <div class="col-md-3 mt-2">
                                <label for="cuota_mensual">Su cuota mensual es de:</label>             
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" id="cuota_mensual"></input>
                            </div>
                        </div>    
                    </div> 
                    <div class="row mt-5">
                        <div class="form-group col-md-4 mt-3" style={{marginLeft:550}}>
                            <button style={{width:400}} type="submit" name="continuar" class="btn btn-primary mb-4" >
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
export default calculoCuota;