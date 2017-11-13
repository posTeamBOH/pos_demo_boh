import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {} from 'antd';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:"这是个测试"
        }

    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {
        const {msg} = this.state;
        return (
            <div>{msg}</div>
        )
    }
}

module.exports = Test;