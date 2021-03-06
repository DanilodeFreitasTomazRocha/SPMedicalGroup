import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login/login';
import Medicos from './pages/Medico/medico';
import Pacientes from './pages/Paciente/paciente';
import Administrador from './pages/Administrador/administrador';
import NotFound from './pages/NotFound/notFound';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/medico" component={Medicos} />
        <Route exact path="/paciente" component={Pacientes} />
        <Route exact path="/administrador" component={Administrador} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
