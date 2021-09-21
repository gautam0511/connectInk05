import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
