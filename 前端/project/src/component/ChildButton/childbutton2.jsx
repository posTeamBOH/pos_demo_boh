import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../../style/cbutton.less';
//import {} from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'


class ChildButton2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"待处理订单"
        }

    }
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {
        const {name}=this.state;
        return (
            <div className="cbutton">
                <Link to='/OrderInfo'><Button>订单信息</Button></Link>
                <Button type="primary">菜品信息</Button>
            </div>)
    }

}

module.exports = ChildButton2;