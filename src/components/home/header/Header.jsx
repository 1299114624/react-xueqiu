import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

export default class Header extends Component{
    render(){
        return (
        <div id="home_header">
            <ul>
                <li>
                    <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.xueqiu.android">在App内打开</a>
                </li>
                <li>
                    <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.xueqiu.android">点击下载App</a>
                </li>
            </ul>
        </div>
        )
    }
}