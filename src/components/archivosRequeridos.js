import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './titulo';

class archivosRequeridos extends React.Component 
{  
    render(){
        return (
            <div style={{marginLeft:70}}>
                 <form class="mt-5">
                    <div class="row mt-4">
                        <div class="form-group col-md-3 mt-5 form-archivos">
                            <h3 class="mb-5" style={{color:'gray', marginLeft:200}}>Selfie</h3>
                            <svg style={{marginLeft:200}} xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">
                                <path id="ic_face_24px" d="M30.35,41.488a5.063,5.063,0,1,0,5.063,5.063A5.064,5.064,0,0,0,30.35,41.488Zm24.3,0a5.063,5.063,0,1,0,5.062,5.063A5.064,5.064,0,0,0,54.65,41.488ZM42.5,2A40.5,40.5,0,1,0,83,42.5,40.515,40.515,0,0,0,42.5,2Zm0,72.9A32.443,32.443,0,0,1,10.1,42.5a32.836,32.836,0,0,1,.2-3.483A40.75,40.75,0,0,0,31.4,17.269,40.4,40.4,0,0,0,64.451,34.4a39.53,39.53,0,0,0,9.113-1.053A32.35,32.35,0,0,1,42.5,74.9Z" transform="translate(-2 -2)" fill="#bcbcbc"/>
                            </svg>
                            <button  type="submit" name="continuar" class="btn btn-primary mt-5" style={{width:300, height:50, marginLeft:85}}>
                                Subir 
                            </button>
                        </div>
                        <div class="form-group col-md-3 mt-5 form-archivos">
                            <h3 class="mb-5" style={{color:'gray', marginLeft:165}}>ID (Frontal)</h3>
                            <svg style={{marginLeft:195}} xmlns="http://www.w3.org/2000/svg" width="77.132" height="85.702" viewBox="0 0 77.132 85.702">
                                <path id="ic_assignment_ind_24px" d="M71.562,9.57H53.65a12.8,12.8,0,0,0-24.168,0H11.57A8.6,8.6,0,0,0,3,18.14V78.132a8.6,8.6,0,0,0,8.57,8.57H71.562a8.6,8.6,0,0,0,8.57-8.57V18.14A8.6,8.6,0,0,0,71.562,9.57Zm-30,0a4.285,4.285,0,1,1-4.285,4.285A4.3,4.3,0,0,1,41.566,9.57Zm0,17.14A12.855,12.855,0,1,1,28.711,39.566,12.838,12.838,0,0,1,41.566,26.711ZM67.276,78.132H15.855v-6c0-8.57,17.14-13.284,25.711-13.284s25.711,4.714,25.711,13.284Z" transform="translate(-3 -1)" fill="#bcbcbc"/>
                            </svg>
                            <button  type="submit" name="continuar" class="btn btn-primary mt-5" style={{width:300, height:50, marginLeft:85}}>
                                Subir 
                            </button>
                        </div>
                        <div class="form-group col-md-3 mt-5 form-archivos">
                            <h3 class="mb-5" style={{color:'gray', marginLeft:160}}>ID (Trasero)</h3>
                            <svg style={{marginLeft:195}} xmlns="http://www.w3.org/2000/svg" width="77.132" height="85.702" viewBox="0 0 77.132 85.702">
                                <path id="ic_assignment_ind_24px" d="M71.562,9.57H53.65a12.8,12.8,0,0,0-24.168,0H11.57A8.6,8.6,0,0,0,3,18.14V78.132a8.6,8.6,0,0,0,8.57,8.57H71.562a8.6,8.6,0,0,0,8.57-8.57V18.14A8.6,8.6,0,0,0,71.562,9.57Zm-30,0a4.285,4.285,0,1,1-4.285,4.285A4.3,4.3,0,0,1,41.566,9.57Zm0,17.14A12.855,12.855,0,1,1,28.711,39.566,12.838,12.838,0,0,1,41.566,26.711ZM67.276,78.132H15.855v-6c0-8.57,17.14-13.284,25.711-13.284s25.711,4.714,25.711,13.284Z" transform="translate(-3 -1)" fill="#bcbcbc"/>
                            </svg>
                            <button  type="submit" name="continuar" class="btn btn-primary mt-5" style={{width:300, height:50, marginLeft:85}}>
                                Subir 
                            </button>
                        </div>
                    </div>
                   
                    <div class="row mt-4">
                        <div class="form-group col-md-3 mt-5 form-archivos">
                            <h4 class="mb-5" style={{color:'gray', marginLeft:80}}>Recibo de servicios publicos</h4>
                            <svg style={{marginLeft:200}} xmlns="http://www.w3.org/2000/svg" width="67.708" height="75.232" viewBox="0 0 67.708 75.232">
                            <   path id="ic_receipt_24px" d="M59.424,58.424H14.285V50.9H59.424Zm0-15.046H14.285V35.854H59.424Zm0-15.046H14.285V20.808H59.424ZM3,77.232l5.642-5.642,5.642,5.642,5.642-5.642,5.642,5.642,5.642-5.642,5.642,5.642L42.5,71.589l5.642,5.642,5.642-5.642,5.642,5.642,5.642-5.642,5.642,5.642V2L65.066,7.642,59.424,2,53.781,7.642,48.139,2,42.5,7.642,36.854,2,31.212,7.642,25.57,2,19.927,7.642,14.285,2,8.642,7.642,3,2Z" transform="translate(-3 -2)" fill="#bcbcbc"/>
                            </svg>
                            <button  type="submit" name="continuar" class="btn btn-primary mt-5" style={{width:300, height:50, marginLeft:85}}>
                                Subir 
                            </button>
                        </div>
                        <div class="form-group col-md-3 mt-5 form-archivos">
                            <h4 class="mb-5" style={{color:'gray', marginLeft:100}}>Constancia de ingresos</h4>
                            <svg style={{marginLeft:200}} xmlns="http://www.w3.org/2000/svg" width="64.8" height="72" viewBox="0 0 64.8 72">
                                <path id="ic_assignment_24px" d="M60.6,8.2H45.552a10.757,10.757,0,0,0-20.3,0H10.2A7.221,7.221,0,0,0,3,15.4V65.8A7.221,7.221,0,0,0,10.2,73H60.6a7.221,7.221,0,0,0,7.2-7.2V15.4A7.221,7.221,0,0,0,60.6,8.2Zm-25.2,0a3.6,3.6,0,1,1-3.6,3.6A3.611,3.611,0,0,1,35.4,8.2Zm7.2,50.4H17.4V51.4H42.6ZM53.4,44.2h-36V37h36Zm0-14.4h-36V22.6h36Z" transform="translate(-3 -1)" fill="#bcbcbc"/>
                            </svg>
                            <button  type="submit" name="continuar" class="btn btn-primary mt-5" style={{width:300, height:50, marginLeft:85}}>
                                Subir 
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default archivosRequeridos;