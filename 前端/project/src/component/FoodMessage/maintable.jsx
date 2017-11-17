import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {connect} from 'react-redux';
import {Input} from 'antd';
import '../../style/search.less';
import {Table, Icon} from 'antd';
import {FoodAllTable} from '../../action/action'
import {Modal, Button} from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
}

const {TextArea} = Input;

class MainTable extends Component {
    state = {visible: false}
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        let {FoodAllTable} = this.props;
        FoodAllTable();
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDel = () => {
        const DelDataSource = storeTest.data;
        DelDataSource.splice(event.target.getAttribute('data-index'), 1);//data-index为获取索引，后面的1为一次去除几行
        this.setState({
            data: DelDataSource,
        });
    }

    render() {
        const columns = [{
            title: '菜品名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '菜品单价',
            dataIndex: 'price',
            key: 'price',
        }, {
            title: '菜品余量（份）',
            dataIndex: 'surplus',
            key: 'surplus',
        }, {
            title: '上架日期',
            dataIndex: 'dates',
            key: 'dates',
        }, {
            title: '汉拼音字母',
            dataIndex: 'abc',
            key: 'abc',
        }, {
            title: '所属类别',
            dataIndex: 'types',
            key: 'types',
        }, {
            title: '原料',
            dataIndex: 'material',
            key: 'material',
        }, {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => (

                <span>
          <a data-index={index} onClick={this.handleDel}>删除</a>
           <span className="ant-divider"/>
            <span className="SearchButton">
          <a onClick={this.showModal}>编辑</a>
             <Modal
                 title="添加菜品"
                 visible={this.state.visible}
                 onOk={this.handleOk}
                 onCancel={this.handleCancel}
                 wrapClassName="SearchButton"
             >
                    <div className="ordertype"> <span className="ordertypes">菜品名称&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodName} size="small"/></div>
                    <div className="ordertype"><span className="ordertypes">所属类别&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button onChange={this.AddFoodClass} value="特价菜品">特价菜品</Button>
                        <Button onChange={this.AddFoodClass} value="热销菜品">热销菜品</Button>
                        <Button onChange={this.AddFoodClass} value="饮料">饮料</Button>
                        <Button onChange={this.AddFoodClass} value="荤菜">荤菜</Button>
                        <Button onChange={this.AddFoodClass} value="汤类">汤类</Button>
                        <Button onChange={this.AddFoodClass} value="面食">面食</Button></div>
                    <div className="ordertype">
                        <span className="ordertypes">菜品单价(元)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodPrice} size="small"/></div>
                    <div className="ordertype">
                        <span className="ordertypes">汉拼首字母</span>
                        <Input onChange={this.AddFoodWord} size="small"/></div>
                    <div className="ordertype">
                        <span className="ordertypes">初始份数(份)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodSize}
                               size="small"/></div>
                    <div className="ordertype">
                        <span
                            className="ordertypes ">原料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodCL}
                               id="biginput" size="small"/></div>
                    <div className="ordertype"><span
                        className="ordertypes">备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodMark}
                               size="small"/></div>

                </Modal></span>

</span>
            )
        }];
        const {storeTest}=this.props;
        return (
            <div className='maincontainer'>
            <Table dataSource={storeTest.Fooddata} columns={columns}/>
        </div>)
    }
}

const propertys = state => {
    console.log(state);
    return {storeTest: state.rootData.foodTale.pageData}
}

MainTable = connect(propertys, {FoodAllTable})(MainTable)

module.exports = MainTable;