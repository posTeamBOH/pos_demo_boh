import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Button, Tabs} from 'antd';
import '../../style/pendingorder.less';
const TabPane = Tabs.TabPane;
var items = [{
    keys: '11',
    foodClass: "123123",
    food: ["YSSG", "YSSG", "YSSG", "YSSG", "YSSG", "YSSG"]
}, {
    keys: '22',
    foodClass: "123213123123",
    food: ["YS", "YSG", "YSG", "YSG", "YSSG", "SG"]
}, {
    keys:'33' ,
    foodClass: "12312312123",
    food: ["YSSG", "YSSG", "YSSG", "YSSG", "YSSG", "YSG"]
}, {
    keys: '44',
    foodClass: "123123123",
    food: ["YSSG", "YSSG", "YSSG", "YSSG", "SG", "YSSG"]
}, {
    keys:'55',
    foodClass: "12311231223",
    food: ["YSSG", "YSSG", "YSSG", "YSG", "SG", "YG"]
}];

class TabsS extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        let factory= items.map(function(item) {
            return
    <div>1123</div>
        })
        return (
            <div>
                {factory}
            </div>
        )
    }
};
module.exports = TabsS;








