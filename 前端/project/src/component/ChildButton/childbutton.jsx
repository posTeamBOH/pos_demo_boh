import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'

import '../../style/cbutton.less';
import { Button } from 'antd';


class ChildButton extends Component {
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

                <Link to='/OrderInfo'><Button type="primary">订单信息</Button></Link>
                <Link to='/FoodInfo'><Button>菜品信息</Button></Link>

            </div>
    )
    }

}

module.exports = ChildButton;