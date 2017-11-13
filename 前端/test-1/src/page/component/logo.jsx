import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {} from 'antd';


class LogoIcon extends Component {
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
        const {name}=this.state;
        return (

            <div>
                    <a href="http://www.choicesoft.com.cn/">
                    <img src={require('../../img/logo.png')} alt="logo"/>
                </a>
                    <span>
                        {name}
                    </span>
            </div>

        )
    }
}

module.exports = LogoIcon;