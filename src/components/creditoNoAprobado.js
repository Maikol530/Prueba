import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from './titulo';

import Imagen from '../imagenes/triste1.png'

class creditoNoAprobado extends React.Component{

    render()
    {

        return(

            <div>

                <Titulo />
            
                <div className="mt-5 noApro colorLetra">

                <svg xmlns="http://www.w3.org/2000/svg" width="234.596" height="234.596" viewBox="0 0 234.596 234.596">
  <g id="ic_sentiment_dissatisfied_24px" transform="translate(-2 -2)">
    <circle id="Elipse_31" data-name="Elipse 31" cx="17.5" cy="17.5" r="17.5" transform="translate(143 72.596)" fill="#9b9b9b"/>
    <circle id="Elipse_32" data-name="Elipse 32" cx="17.5" cy="17.5" r="17.5" transform="translate(61 72.596)" fill="#9b9b9b"/>
    <path id="Trazado_109" data-name="Trazado 109" d="M119.181,2A117.3,117.3,0,1,0,236.6,119.3,117.241,117.241,0,0,0,119.181,2Zm.117,211.137A93.839,93.839,0,1,1,213.137,119.3,93.813,93.813,0,0,1,119.3,213.137Zm0-70.379a64.457,64.457,0,0,0-60.057,41.054H78.83a46.633,46.633,0,0,1,80.936,0h19.589A64.457,64.457,0,0,0,119.3,142.758Z" fill="#9b9b9b"/>
  </g>
</svg>


                

                   <h2 className="mt-5">Lo sentimos....</h2>
                   </div>
                   
               <div className="noApro1 colorLetra">
                    <h5>Pero no eres sujeto a crédito</h5>
               </div>

            </div>

        );

    }

}

export default creditoNoAprobado;