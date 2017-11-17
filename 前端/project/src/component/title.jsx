import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Link} from 'react-router-dom'


class Title extends Component {
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

            <div className='title'>
            <Link to='/OrderPage'><div className='logo'>
                    <img src={require('../img/logo.png')} alt="logo"/>
                </div></Link>
                <span className='title-name'>
                        欢迎使用雄鹰订餐系统
                </span>
            </div>

        )
    }
}

module.exports = Title;