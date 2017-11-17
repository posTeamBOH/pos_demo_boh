import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';


//import {change1} from '../action/action.js'
import { Row, Col } from 'antd';
import '../../style/notenough.less';

class NotEnough extends Component {


    render() {

        return (

            <div className="topmiddlenav">
                <div className="topnav-title"><p>余量不足菜品</p></div>
                <div className="notnav"><label className="notenfood">红烧肉33￥</label>
                <label className="notenfood">红烧肉33￥</label>
                <label className="notenfood">红烧肉33￥</label>
                <label className="notenfood">红烧肉33￥</label>
                <label className="notenfood">红烧肉33￥</label>
                    <label className="notenfood">红烧肉33￥</label>

                </div>


            </div>
        )
    }
}

module.exports = NotEnough;