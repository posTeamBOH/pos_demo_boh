import React, {Component} from 'react';
import ReactDom from 'react-dom';
import LogoIcon from './logo.jsx'
import {} from 'antd';


class HeaderBox extends Component {
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
                 <LogoIcon/>

                </div>
            </div>
        )
    }
}

module.exports = HeaderBox;