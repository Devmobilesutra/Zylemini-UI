import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Login/Login';
import Register from './Register/Register';
import LoginFor from './LoginFor/LoginFor';
import Consultancy from './Consultancy/Consultancy'



const Routes = () => (
<BrowserRouter>
<Switch><Route exact path='/' component={Login}/>
 
<Route path='/Register' component={Register} />
<Route path='/Consultancy' component={Consultancy} />
<Route path='/LoginFor' component={LoginFor} />



</Switch>
</BrowserRouter>


);

export default Routes;