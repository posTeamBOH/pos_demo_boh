import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Input,Button} from 'antd';
import TabBtn from './producer'
import '../../style/pendingorder.less';
const Search = Input.Search;

class PendingOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderNum:'',
            beginTime:'',
            endTime:'',
        }
    }

    render() {
        return (
            <div className="leftnav">
                <div className="nav-title">待处理订单</div>
                <div className="myantsearch">
                    <Search
                        placeholder="请输入桌号"
                        style={{width: 265}}
                        onSearch={() => this.showModel()}
                    />
                </div>
                <TabBtn/>
            </div>
        )
    }
}

module.exports = PendingOrder;