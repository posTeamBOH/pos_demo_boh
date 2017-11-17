import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PendingOrder from './PendingOrder.jsx'
import NotEnough from './NotEnough.jsx'
import OrderDetails from './OrderDetails.jsx'
import ChooseFood from './Choosefood.jsx'
import {Row, Col} from 'antd';
import '../../style/index.less'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "待处理订单"
        }

    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {
        return (

            <div className='OrderPageMiddle'>
                <Row>
                    <Col span={6}>
                        <PendingOrder/>
                        <NotEnough/>
                    </Col>

                    <Col span={12}>
                        <ChooseFood/>
                    </Col>
                    <Col span={6}>
                        <OrderDetails/>
                    </Col>

                </Row>




            </div>

        )
    }
}

module.exports = Index;