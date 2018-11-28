import React, {Component} from 'react'
import OneUI from "./OneUI";
import './One.scss'

// 复杂组件,容器组件
export default class One extends Component{
    constructor(){
        super();
        this.state = {
            list: ['a', 'b', 'c', 'd']
        }
    }
    render(){
        let {list} = this.state;

        return <OneUI data={list} goDetail={this.goDetail.bind(this)}/>
    }

    goDetail(index){
        this.props.history.push({pathname: '/one/detail', state: {index}});
    }

}
