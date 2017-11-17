import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Button, Table, Modal} from 'antd';
import {main_Table,OrderAllTable} from '../../action/action'
class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            turnover: 250000,
            orderSize: 50000000,
            orderId:'',
            tablesId:'',
            orderDate:''
        }
    }
    showModal=(a,b,c)=>{
        this.setState({
            visible: true,
            orderId:a,
            tablesId:b,
            orderDate:c
        });
        let {main_Table}=this.props;
        main_Table(a);
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    componentWillReceiveProps() {

    }
    componentDidMount() {
        let {OrderAllTable}=this.props;
        OrderAllTable();
    }

    render() {
        const {storeTest} = this.props;
        const {turnover,orderId,tablesId,orderSize,orderDate} = this.state;;
        const columns = [{
            title: '订单编号',
            dataIndex: 'orderId',
            key: 'orderId',

        }, {
            title: '下单时间',
            dataIndex: 'orderDate',
            key: 'orderDate',
        }, {
            title: '菜品数量',
            dataIndex: 'orderRemark',
            key: 'orderRemark',
        }, {
            title: '桌号',
            dataIndex: 'tablesId',
            key: 'tablesId',
        }, {
            title: '消费金额（元）',
            dataIndex: 'orderMoney',
            key: 'orderMoney',
        }, {
            title: '订单状态',
            dataIndex: 'orderType',
            key: 'orderType',
        },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span onClick={()=>this.showModal(record.orderId,record.tablesId,record.orderDate)} className='ShowBtn'>查看明细</span>
                ),
            }];
        const orderColumns = [{
            title: '菜品名',
            dataIndex: 'menuId',
            key: 'menuId',

        }, {
            title: '数量(份)',
            dataIndex: 'count',
            key: 'count',
        }, {
            title: '单价(元)',
            dataIndex: 'money',
            key: 'money',
        }]
        let pagination = {
            pageSize: 6,
            showSizeChanger: true,
        }
            return (
            <div className='middle-container'>
                <div className='TableHeader'>
                    <Row type='flex' justify="space-around" align="middle">
                        <Col span={3}>
                            营业额: <span className='words'>{turnover}￥</span>
                        </Col>
                        <Col span={3}>
                            订单量: <span className='words'>{orderSize}笔</span>
                        </Col>
                        <Col span={16}>

                        </Col>
                    </Row>

                </div>
                <div className='TableBody'>
                    <Table columns={columns} dataSource={storeTest.data} pagination={pagination} bordered size="middle"/>
                </div>
                <div className='modalBox'>
                    <Modal
                        title="订单明细"
                        visible={this.state.visible}
                        maskClosable={false}
                        width={350}
                        wrapClassName='modalBox'
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <div className='mainHeader'>
                            <Row><Col span={4}></Col><Col span={6}>订单号</Col> <Col
                                span={14}>{orderId}</Col></Row>
                            <Row><Col span={4}></Col><Col span={6}>桌号</Col> <Col
                                span={14}>{tablesId}</Col></Row>
                            <Row><Col span={4}></Col><Col span={6}>下单时间</Col>
                                <Col span={14}>{orderDate}</Col></Row>

                        </div>
                        <div className='line'>--------------------------------------------------------</div>
                        <div className='OrderTable'>

                        <Table columns={orderColumns} dataSource={storeTest.Datildata} bordered size="small" pagination={false}/>
                        </div>
                        <div  className='line'>--------------------------------------------------------</div>
                        <Row>
                            <Col span={24}>
                                总计金额：<span>{storeTest.sum}</span>元
                            </Col>
                        </Row>
                        <Row>
                            <Col span={19}></Col>
                            <Col span={5}>
                            <Button type="primary" onClick={this.handleCancel}>关闭</Button>
                        </Col>
                        </Row>


                    </Modal>
                </div>

            </div>

        )
    }
}
const propertys = state => {
    return {storeTest:state.rootData.mainTable.pageData}
}

Tables = connect(propertys,{main_Table,OrderAllTable})(Tables)
module.exports = Tables;