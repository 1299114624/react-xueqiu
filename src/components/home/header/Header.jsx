import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

export default class Header extends Component{
    render(){
        return (
        <div id="home_header">
            <div className="banner__title">
                <div className="banner_logo"></div>
                <div className="banner__title__content">聪明的投资者都在这里</div>
            </div>
            <ul className="banner__btns">
                <li className="banner_btns_left">
                    <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.xueqiu.android">在App内打开</a>
                </li>
                <li className="banner_btns_right">
                    <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.xueqiu.android">点击下载App</a>
                </li>
            </ul>
        </div>
        )
    }
}