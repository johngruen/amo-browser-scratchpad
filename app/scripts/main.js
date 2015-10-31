import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import routeConfig from './router';



ReactDom.render((
  <Router routes={routeConfig} />
  ), document.getElementById('global-container')
);



