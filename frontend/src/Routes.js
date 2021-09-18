import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Display from './components/Display'
import signup from './Pages/Signup'
const Routes = () => {
    return (
        <div>
            <Router>
                <switch>
                    <Route exact path="/" component={Display}></Route>
                    <Route  path="/login/:userId" component={Login}></Route>
                    <Route  path="/signup" component={signup}></Route>
                </switch>
            </Router>
        </div>
    )
}

export default Routes
