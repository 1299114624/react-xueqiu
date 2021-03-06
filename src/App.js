import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import Header from './components/home/header/Header'
import Business from './components/home/business/Business'
import Timeline from './components/home/timeline/Timeline'

import One from './pages/one/One'
import Two from './pages/two/Two'
import Three from './pages/three/Three'
import Four from './pages/four/Four'

import './App.css'



export default class App extends Component{

    render(){
        return (
            <Router>
            <div className="App">
                <Header/>
                <Business/>
                <Switch>
                    <Route path='/one' component={One}/>
                    <Route path='/two' component={Two}/>
                    <Route path='/three' component={Three}/>
                    <Route path='/four' component={Four}/>
                    {/* <Route render={()=>{
                        return <Redirect to="/"/>
                    }}/> */}
                </Switch>
                
                <Timeline/>
            </div>
            </Router>
        )

    }
}

