/*
* Index qui load le projet
* Le header est chargé en premier et reste sur toutes les pages
* Ensuite, routes détermine le prochain components à charger
*/

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Main from './components/Main';
import ChoixVille from './components/ChoixVille';
import InputVilleContainer from "./containers/InputVilleContainer";
import MeteoVilleContainer from "./containers/MeteoVilleContainer";
import MeteoUnJourContainer from "./containers/MeteoUnJourContainer";

render(
   <Router history={hashHistory}>
     <Route path='/' component={Main}>
       <IndexRoute component={ChoixVille} />
       <Route path="meteo/:ville" component={MeteoVilleContainer}/>
       <Route path="/MeteoUnJour/:ville/:jour" component={MeteoUnJourContainer}/>
     </Route>
   </Router>,
   document.getElementById('app')
);
