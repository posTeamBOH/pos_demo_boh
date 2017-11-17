import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Button ,Row,Col,InputNumber} from 'antd';
import '../../style/orderdetails.less';
import '../../style/OrderInfo.less'
import { Table, Icon } from 'antd';
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderNum:'',
            beginTime:'',
            endTime:'',
        }
    }
    onChange=(value)=>{

    }
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {
        const columns = [ {
            title: '菜品名',
            dataIndex: 'FoodName',
            key: 'FoodName',
        }, {
            title: '数量（份）',
            key: 'FoodSum',
            render: (text, record) => (
                <div>
                    <InputNumber min={1} defaultValue={1} onChange={this.onChange} />
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
                        <span className='ShowBtn'>删除</span>
                    </div>

                ),
            }];

        const Datildata=[{
            FoodName:'糖醋',
            FoodPrice :123
        },{
            FoodName:'糖醋',
            FoodPrice :123
        },{
            FoodName:'糖醋',
            FoodPrice :123
        },{
            FoodName:'糖醋',
            FoodPrice :123
        },{
            FoodName:'糖醋',
            FoodPrice :123
        },{
            FoodName:'糖醋',
            FoodPrice :123
        }

        ]


        return (
            <div>
                <div className="orderdetail">
                    <div className="detail-title"><p>订单明细</p></div>
                    <div className='modalBox'>
                        <div className='mainHeader'>
                            <Row><Col span={4}> </Col><Col span={6}>订单号</Col> <Col
                                span={14}></Col></Row>
                            <Row><Col span={4}> </Col><Col span={6}>桌号</Col> <Col
                                span={14}></Col></Row>
                            <Row><Col span={4}></Col><Col span={6}>下单时间</Col>
                                <Col span={14}> </Col></Row>

                        </div>
                        <div className='line'>--------------------------------------------------------</div>
                        <div className='OrderTable'>

                            <Table columns={columns} scroll={{ y: 150 }} dataSource={Datildata} bordered size="small" pagination={false}/>
                        </div>
                        <div  className='line'>--------------------------------------------------------</div>
                        <Row>
                            <Col span={1}>
                            </Col>
                            <Col span={11}>
                                总计金额：<span> </span>元
                            </Col>
                            <Col span={12}>
                                点餐量：<span> </span>份
                            </Col>
                        </Row>
                        <Row className='Detailbottom'>
                            <Col span={2}>
                            </Col>
                            <Col span={6}>
                                <Button type="primary" onClick={this.handleCancel}>提交订单</Button>

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

module.exports = OrderDetails;