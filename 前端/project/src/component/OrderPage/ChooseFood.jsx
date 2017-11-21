import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import '../../style/notenough.less';
import {Input} from 'antd';
import TabsS from './Tabs'
const Search = Input.Search;

class ChooseFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps() {

    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="choosefood">
                <div>
                    <div>
                        <div className="downnav-title"><p>选餐区</p></div>
                        <Search
                            placeholder="请输入汉拼音字母"
                            style={{width:570}}
                            onSearch={value => console.log(value)}
                        /></div>
                    <div style={{paddingTop:8}}>
                        <TabsS/>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = ChooseFood;