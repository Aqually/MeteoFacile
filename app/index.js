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
