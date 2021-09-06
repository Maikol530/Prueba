import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import WarningIcon from '@material-ui/icons/Warning';

import CheckIcon from '@material-ui/icons/Check';

import EmailIcon from '@material-ui/icons/Email';

import Titulo from './titulo';

import DashboardUsuario from './dashboardUsuario';

import DatosPersonales from './datosPersonales';

import ArchivosRequeridos from './archivosRequeridos';



class menuLateral extends React.Component{

    render()
    {

        return(

            <div>
                <Titulo/>
            

            <div class="wrapper izquierda2">

                <nav id="sidebar">
                    <div class="sidebar-header izquierdaFoto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89.5" height="89.5" viewBox="0 0 89.5 89.5">
                            <path id="ic_account_circle_24px" d="M46.75,2A44.75,44.75,0,1,0,91.5,46.75,44.766,44.766,0,0,0,46.75,2Zm0,13.425A13.425,13.425,0,1,1,33.325,28.85,13.407,13.407,0,0,1,46.75,15.425Zm0,63.545A32.222,32.222,0,0,1,19.9,64.561c.134-8.905,17.9-13.783,26.85-13.783,8.905,0,26.716,4.878,26.85,13.783A32.222,32.222,0,0,1,46.75,78.97Z" transform="translate(-2 -2)"/>
                        </svg>

                    </div>

                    <ul >
                        <p style={{color:'black'}}>Nombre del usuario &nbsp; <EmailIcon/></p>
                        <li>
                            <a className="deco" href="./datosPersonales"> <CheckIcon/> &nbsp; Datos personales</a>
                        </li>
                        <li>
                            <a className="deco" href="#"> <WarningIcon/> &nbsp; Datos Laborales</a>
                        </li>
                        <li>
                            <a className="deco" href="#"> <WarningIcon/>&nbsp; Archivos requeridos</a>
                        </li>
                        <li>
                            <a className="deco" href="#"> <WarningIcon/>&nbsp; Firma</a>
                        </li>
                        <br></br>
                        &nbsp;<a className="mt-5" href="">Cerrar Sesión</a>
                    </ul>

                </nav>

              

            </div>

            

            </div>

        );

    }

}

export default menuLateral;