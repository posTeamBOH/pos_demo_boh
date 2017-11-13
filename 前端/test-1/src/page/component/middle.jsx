import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PendingOrder from './PendingOrder.jsx'
import Underquantity from './Underquantity.jsx'
import {} from 'antd';


class Middle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"雄鹰订餐系统"
        }

    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <div>
                    <PendingOrder/>
                </div>
                <div>
                    <Underquantity/>
                </div>
                <div>
                    <PendingOrder/>
                </div>
            </div>
        )
    }
}

module.exports = Middle;