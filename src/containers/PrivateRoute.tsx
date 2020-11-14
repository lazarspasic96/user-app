
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'


 const PrivateRoute = () => {
    return <Switch>
        <Route  path ='/'  component = {Home}/>
    </Switch>
}


export default PrivateRoute