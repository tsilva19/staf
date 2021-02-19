import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Login from '../componentes/login/Login'
import Home from '../componentes/template/home/home'
import Allocated from '../componentes/allocated/Allocated'
import Reserve from '../componentes/Reserve/Reserve'

export default props => 
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route  path='/home' component={Home}/>
        <Route path='/allocated' component={Allocated}/>
        <Route path='/reserve' component={Reserve}/>
        <Redirect from="*" to='/'/>
        
    </Switch>