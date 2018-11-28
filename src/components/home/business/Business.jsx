import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Business.scss'

export default class Business extends Component{
    render(){
        return( 
        <div id="home_business">
            <ul>
                <NavLink to='/one'>A股</NavLink>
                <NavLink to='/two'>A股</NavLink>
                <NavLink to='/three'>A股</NavLink>
                <NavLink to='/four'>A股</NavLink>
            </ul>
        </div>
        )
    }
}