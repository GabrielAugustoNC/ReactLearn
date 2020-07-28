// /src/components/Routes.js
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Charts from '../../pages/Charts'
import FormLogin from '../../pages/FormLogin'
import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Dashboard from '../../pages/Dashboard'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/formLogin" component={FormLogin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
    </BrowserRouter>
);

export default Routes