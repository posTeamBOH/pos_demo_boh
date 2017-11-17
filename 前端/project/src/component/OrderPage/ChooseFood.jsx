import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Tabs, Radio} from 'antd';
import '../../style/notenough.less';
import {Button} from 'antd';
import {Input} from 'antd';

const TabPane = Tabs.TabPane;
import {Row, Col} from 'antd';
import TabsS from './Tabs'
const Search = Input.Search;

class ChooseFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
        };
    }
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }



    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({mode});
    }

    render() {
        const {mode} = this.state;
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
                    <div>
                        <Radio.Group onChange={this.handleModeChange} value={mode} style={{marginBottom: 8}}>
                        </Radio.Group>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={mode}
                            style={{height: 440}}
                        >
                            <TabPane tab="特价菜品" key="1">
                                <div className="fbutton">
                                    <Button type="primary">西红柿</Button>
                                    <Button type="primary">西红柿</Button>
                                    <Button type="primary">西红柿</Button>
                                    <Button>西红柿</Button>

                                    <Button type="danger">西红柿</Button></div>
                            </TabPane>
                            <TabPane tab="热销菜品" key="2">
                                <div className="fbutton">
                                    <Button type="primary">炒鸡蛋</Button>
                                    <Button type="primary">炒鸡蛋</Button>
                                    <Button>炒鸡蛋</Button>

                                    <Button type="danger">炒鸡蛋</Button></div>
                            </TabPane>
                            <TabPane tab="饮料" key="3">
                                <div className="fbutton">
                                    <Button type="primary">可乐</Button>
                                    <Button type="primary">可乐</Button>
                                    <Button>可乐</Button>

                                    <Button type="danger">可乐</Button></div>
                            </TabPane>
                            <TabPane tab="荤菜" key="4">
                                <div className="fbutton">
                                    <Button type="primary">肉</Button>
                                    <Button type="primary">肉</Button>
                                    <Button>肉</Button>

                                    <Button type="danger">肉</Button></div>
                            </TabPane>
                            <TabPane tab="素菜" key="5">
                                <div className="fbutton">
                                    <Button type="primary">菜</Button>
                                    <Button type="primary">菜</Button>
                                    <Button>菜</Button>

                                    <Button type="danger">菜</Button></div>
                            </TabPane>
                            <TabPane tab="汤类" key="6">
                                <div className="fbutton">
                                    <Button type="primary">汤</Button>
                                    <Button type="primary">汤</Button>
                                    <Button>汤</Button>

                                    <Button type="danger">汤</Button></div>
                            </TabPane>
                            <TabPane tab="面食" key="7">
                                <div className="fbutton">
                                    <Button type="primary">面</Button>
                                    <Button type="primary">面</Button>
                                    <Button ghost>Default</Button>

                                    <Button type="danger">面</Button></div>
                            </TabPane>

                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ChooseFood;