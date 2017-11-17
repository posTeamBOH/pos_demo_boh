import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Input,DatePicker,Button,Table} from 'antd';
import {OrderSearch} from '../../action/action'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderNum:'',
            beginTime:'',
            endTime:'',
        }
    }
    onBegin=(date, dateString)=>{
        this.setState({beginTime:dateString});
    }
    onEnd=(date, dateString)=>{
        this.setState({endTime:dateString});
    }
    orderNumCheck=event=>{
        this.setState({OrderNum: event.target.value});
    }
    //查询
   Check=()=>{
       const {store}=this.props;
       let {OrderSearch}=this.props;
       //查询字符
       OrderSearch(this.state.OrderNum,this.state.beginTime,this.state.endTime);
       console.log(store)
   }
    componentWillReceiveProps() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='middle-container'>
                <Row type='flex' justify="space-around" align="middle">
                    <Col span={6}>
                        <span className='SearchName'>订单编号</span>
                        <Input style={{ width: 170 }} onChange={this.orderNumCheck} placeholder="请输入订单编号" />
                    </Col>
                    <Col span={6}>
                        <span className='SearchName'>起始时间</span>
                        <DatePicker format="YYYY-MM-DD HH:mm:ss" onChange={this.onBegin} />
                    </Col>
                    <Col span={6}>
                        <span className='SearchName'>结束时间</span>
                        <DatePicker format="YYYY-MM-DD HH:mm:ss" onChange={this.onEnd} />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" icon="search"  onClick={this.Check}>查询</Button>
                    </Col>
                </Row>


            </div>

        )
    }
}

const propertys = state => {
    return {store:state.rootData.mainTable.pageData}
}

Search = connect(propertys,{OrderSearch})(Search)
module.exports = Search;