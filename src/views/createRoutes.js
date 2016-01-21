import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Home from 'views/Home/Home.js';
import NotFound from 'views/NotFound/NotFound.js';

export default function(store) {
  return (
    <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/404" component={NotFound}/>
        <Route path="*" component={NotFound}/>
    </Route>
  );
}
