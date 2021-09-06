import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styles from './App.js'

import SolicitudCredito from './components/SolicitudCredito';

import Otp from './components/Otp'; 

import DatosPersonales from './components/datosPersonales';

import CreditoNoAprobado from './components/creditoNoAprobado';

import MenuLateral from './components/menuLateral'

import DashboardUsuario from './components/dashboardUsuario';

import PreAprobado from './components/preAprobado';

import CalculoCuota from './components/calculoCuota';

import TipoFirma from './components/tipoFirma';

import ArchivosRequeridos from './components/archivosRequeridos';

import {BrowserRouter as Router, Switch, Route, link} from 'react-router-dom';

import { Dashboard } from '@material-ui/icons';

function App() {


  return (

    <Router>

      <div>

           <Switch>

              <Route path="/SolicitudCredito">
                  <SolicitudCredito/>
              </Route>

              <Route path="/Otp">
                  <Otp/>
              </Route>

              <Route path="/creditoNoAprobado">
                  <CreditoNoAprobado/>
              </Route>

              <Route path="/menuLateral">
                  <MenuLateral/>
              </Route>

              <Route path="/dashboardUsuario">
                  <DashboardUsuario/>
              </Route>

              <Route path="/datosPersonales">
                  <DatosPersonales/>
              </Route>

              <Route path="/preAprobado">
                  <PreAprobado/>
              </Route>

              <Route path="/calculoCuota">
                  <CalculoCuota/>
              </Route>

              <Route path="/tipoFirma">
                  <TipoFirma/>
              </Route>

              <Route path="/archivosRequeridos">
                  <ArchivosRequeridos/>
              </Route>

           </Switch>

        </div>

    </Router>
   
  );
}

export default App;
