import React, {Component} from 'react'
import './One.scss'

// 复杂组件,容器组件
export default class One extends Component{  
    render(){

        return (
            <div id="one" className="page">
                <div className="wrap">
                    <div className="wrap_left">
                        <a className="leftside"></a>
                        <a className="rightside"></a>
                    </div>
                    <div className="wrap_right"><a className="help">帮助中心</a></div>
                </div>
                <div className="nav">
                    <div className="wrapper"></div>
                    <div className="boxtitle">
                        <div className="boxtitle_m">
                            <h2>万2.5低佣开户，会赚更惠省</h2>
                            <p>20万资金，每月满仓买卖10次，一年可省6000元。</p>
                            <h2>两融利率6.66%，杠杆无负担</h2>
                            <p>融资1万元，日息仅1.8元，随借随还。</p>
                        </div>
                    </div>
                    <div className="pic"></div>
                    <div className="boxtitle b2">
                        <div className="boxtitle_m">
                            <h2>雪球大V都在用，投资不孤单</h2>
                            <p>追牛人，刷资讯，围观实盘，问答悬赏，</p>
                            <p>更有6.3%定期理财，现在开户即可体验！</p>
                        </div>
                    </div>
                    <div className="pic pic2"></div>
                    <div className="footer">
                        <div className="footer_m">
                            <p>雪球股票服务热线</p>
                            <p>400-180-8559</p>
                            <p>服务时间：9:00 - 18:00（交易日）</p>
                            <a className="online-service" href="https://www.sobot.com/chat/pc/index.html?sysNum=02d8249765694de6b688f6edea8e8760&amp;groupId=33439e4678d64178aeea51c327421a5c" target="_blank" rel="noopener">在线咨询</a>
                        </div>
                    </div>
                </div>
                <div className="open">
                    <p>立即开户</p>
                    <p className="tip">(支持一人多户)</p>
                </div>
            </div>
        )
    }



}
