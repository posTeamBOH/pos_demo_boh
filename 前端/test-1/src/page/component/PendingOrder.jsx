import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';


class PendingOrder extends Component {
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

            <div>
                <div>{name}</div>
            </div>

        )
    }
}

module.exports = PendingOrder;