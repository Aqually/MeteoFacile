import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header from '../components/Header';
import Main from '../components/Main';
import ChoixVilleContainer from "../containers/ChoixVilleContainer";
import MeteoVilleContainer from "../containers/MeteoVilleContainer";
import MeteoUnJourContainer from "../containers/MeteoUnJourContainer";


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ChoixVilleContainer} />
      <Route path="MeteoVille" component={MeteoVilleContainer}/>
      <Route path="MeteoUnJour" component={MeteoUnJourContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
