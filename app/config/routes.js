import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'


const routes = (
    <Router history={hashHistory}>
        <Route name='app' path='/' component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
