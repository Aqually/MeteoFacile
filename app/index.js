/*
* Index qui load le projet
* Le header est chargé en premier et reste sur toutes les pages
* Ensuite, routes détermine le prochain components à charger
*/

import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import routes from "./config/routes"

render(
  <div>
    <Header/>
    {routes}
  </div>,
  document.getElementById('app')
);
