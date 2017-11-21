import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Button, Row, Col, InputNumber} from 'antd';
import {connect} from 'react-redux';

import '../../style/orderdetails.less';
import '../../style/OrderInfo.less'
import {Table, Icon} from 'antd';
import {ChooseFoodsClass, submitOrder,DeleteFood} from '../../action/action'

var NewFoodsNum = 1;
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderData:''
        }
    }

    onFoodsChange = (FoodsName, FoodPrice) => {
        let {ChooseFoodsClass} = this.props;
        ChooseFoodsClass(FoodsName, FoodPrice, NewFoodsNum);
    }
    onChange = (FoodsNum) => {
        NewFoodsNum = FoodsNum;
    }
    onDelete = (FoodName,FoodClass) => {
        let FoodClassArray=[];
        let {DeleteFood}=this.props;
        FoodClass.map((item)=>{
            console.log(item)
            console.log(FoodName)
            if(item.FoodName!=FoodName){
                DeleteFood(FoodName)
            }
            else{
                return;
            }
        })
        console.log('ddddddddddddd')
        console.log(FoodClassArray);
        // let {DeleteFood}=this.props;
        // DeleteFood(FoodClassArray)
    }
    OrderSubmit = (Allprice,account,FoodClass) => {
        this.setState({
            OrderData: this.props.store.NowData
        })

           let tableIds=this.props.store.NowTable;
            let orderDates=this.props.store.NowData;
            let orderMoneys=Allprice;
            let orderNums=account;
            let menuNums={};

        FoodClass.map((item) => {
            let dd = item.FoodName;
            menuNums[dd] = item.FoodSum
        })
        let newMenu=JSON.stringify(menuNums);
        let {submitOrder} = this.props;
        submitOrder(tableIds,orderDates,orderMoneys,orderNums,newMenu);
    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
        let {ChooseFoodsClass} = this.props;
        ChooseFoodsClass();
    }

    render() {
        let {store} = this.props;
        let FoodClass = [];
        let AllPrice = 0,
            account = 0;
        console.log(store.TableNumberMarry);
        if (store.TableNumberMarry != null)
            store.TableNumberMarry.map((item) => {
                if (item.Table == store.NowTable) {
                    FoodClass = item.FoodsClass;
                }
            })

        FoodClass.map((item) => {
            AllPrice += parseInt(item.FoodPrice) * parseInt(item.FoodSum);
            account += parseInt(item.FoodSum);
        })
        const columns = [{
            title: '菜品名',
            dataIndex: 'FoodName',
            key: 'FoodName',
        }, {
            title: '数量（份）',
            key: 'FoodSum',
            dataIndex: 'FoodSum',
            render: (text, record) => (
                <div>
                    <InputNumber min={1} defaultValue={text} onChange={this.onChange}/>
                </div>
            ),
        }, {
            title: '单价',
            dataIndex: 'FoodPrice',
            key: 'FoodPrice',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (

                <div>
                    {console.log(record)}
                    <span className='ShowBtn' onClick={()=>this.onDelete(record.FoodName,FoodClass)}>删除</span>
                </div>
            ),
        }];
        return (
            <div>
                <div className="orderdetail">
                    <div className="detail-title"><p>订单明细</p></div>
                    <div className='modalBox'>
                        <div className='mainHeader'>
                            <Row><Col span={4}> </Col><Col span={6} style={{fontSize: 20}}>桌号</Col> <Col
                                span={14} style={{fontSize: 20}}>
                                {store.NowTable}
                            </Col></Row>
                            <Row><Col span={4}></Col><Col span={6}>下单时间</Col>
                                <Col span={14}></Col>{this.state.OrderData}</Row>
                        </div>
                        <div className='line'>--------------------------------------------------------</div>
                        <div className='OrderTable'>

                            <Table columns={columns}
                                   onRowClick={(record, index, event) => this.onFoodsChange(record.FoodName, record.FoodPrice)}
                                   scroll={{y: 150}} dataSource={FoodClass} bordered size="small" pagination={false}/>
                        </div>
                        <div className='line'>--------------------------------------------------------</div>
                        <Row>
                            <Col span={1}>
                            </Col>
                            <Col span={11}>
                                总计金额：<span>{AllPrice} </span>元
                            </Col>
                            <Col span={12}>
                                点餐量：<span>{account} </span>份
                            </Col>
                        </Row>
                        <Row className='Detailbottom'>
                            <Col span={2}>
                            </Col>
                            <Col span={6}>
                                <Button type="primary" onClick={()=>this.OrderSubmit(AllPrice,account,FoodClass)}>提交订单</Button>

                            </Col>
                            <Col span={6}></Col>
                            <Col span={6}>
                                <Button type="primary" onClick={this.handleCancel}>取消订单</Button>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>

        )
    }
}

const propertys = state => {
    return {store: state.rootData.RouterData.pageData}
}

OrderDetails = connect(propertys, {ChooseFoodsClass, submitOrder,DeleteFood})(OrderDetails)
module.exports = OrderDetails;