import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './titulo';

class tipoFirma extends React.Component 
{
    render(){
        return (
            <div style={{marginLeft:70}}>
                 <form class="mt-5">
                    <div class="row mt-4">
                        <div class="form-group col-md-3 mt-5">
                            <button  type="submit" name="continuar" class="btn mt-5 boton-tipo-firma">
                                <h3>Dibujar desde el celular</h3> 
                                <h3>Escanear código QR</h3> 
                            </button>
                        </div>
                        <div class="form-group col-md-3 mt-5" style={{ marginLeft: 200}}>
                            <button  type="submit" name="continuar" class="btn mt-5 boton-tipo-firma">
                                <h3>Subir imagen</h3> 
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default tipoFirma;