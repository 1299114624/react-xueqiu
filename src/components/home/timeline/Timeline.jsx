import React, {Component} from 'react'
// import ItemsUI from './ItemsUI'
import './Timeline.scss'

import API from '../../../api'
import 'whatwg-fetch'

export default class Timeline extends Component{
    constructor(){
        super();
        this.state = {
            list: [1,2,3,4,5,6,7,8,9,10]
        }
    }
    render(){
        let {list} = this.state;
        return (
            <div id="home_timeline">
                <ul className='home_timeline_tabs'>
                {
                    list.map((item, index)=>{
                        return (
                            <li className="item" key={index} >
                                {item}
                            </li>
                        )
                    })
                }
                </ul>
                {/* <ItemsUI/> */}
            </div>
        )
    }
    // componentDidMount(){
    //     //请求左边侧边栏的频道数据
    //     fetch(API.HOME_NEWS_API)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(result => {
    //         // this.setState({channels: result.data});
    //         console.log(result)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }
    
}