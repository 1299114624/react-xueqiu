import React from 'react'
// 无状态组件，UI组件
export default function OneUI(props){
    return (
        <div id="one"  className="page">
            <h1>这是one组件</h1>
            <ul className="list">
            {
                props.data.map((item, index)=>{
                    return (
                        <li className="item" key={index} onClick={props.goDetail.bind(this, index)}>
                            {item}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

