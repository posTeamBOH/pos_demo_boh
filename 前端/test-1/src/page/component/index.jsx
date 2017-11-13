import React, {Component} from 'react';
import ReactDom from 'react-dom';
import HeaderBox from './header.jsx'
import Middle from './middle.jsx'

import {} from 'antd';


class Index extends Component {
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
                <HeaderBox/>
                <Middle/>
            </div>
        )
    }
}

module.exports = Index;