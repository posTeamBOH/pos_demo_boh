import React, {Component} from 'react';
import ReactDom from 'react-dom'
import {Row, Col} from 'antd';
import '../style/OrderInfo.less'
import Index from '../component/OrderMessage/index'

class OrderInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentWillReceiveProps() {
    }
    componentDidMount() {
    }

    render() {

        return (

            <div>
                <Index/>

            </div>

        )
    }
}

module.exports = OrderInfo;