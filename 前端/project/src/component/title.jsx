import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd';
const menu = (
    <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer" target="_self" href="#/OrderPage">服务员点餐</a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" target="_self" href="#/OrderInfo">订单信息</a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" target="_self" href="#/FoodInfo">菜品信息</a>
        </Menu.Item>
    </Menu>
);
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
        return (

            <div className='title'>
                <Link to='/OrderPage'><div className='logo'>
                    <img src={require('../img/logo.png')} alt="logo"/>
                </div></Link>
                <span className='title-name'>
                        欢迎使用雄鹰订餐系统
                </span>
                <span className="home">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        Home<Icon type="down" />
                    </a>
                </Dropdown>
                </span>
            </div>

        )
    }
}

module.exports = Title;