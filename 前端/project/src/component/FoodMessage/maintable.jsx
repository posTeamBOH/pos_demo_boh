import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {connect} from 'react-redux';
import {Input} from 'antd';
import '../../style/search.less';
import {Table, Icon, Popconfirm, message} from 'antd';
import {FoodAllTable,EditFood,DelFood,DeleteFoodClass} from '../../action/action'
import {Modal, Button} from 'antd';
function onChange(date, dateString) {
    console.log(date, dateString);
}

const {TextArea} = Input;

class MainTable extends Component {
    state = {visible: false}
    showModal = (a,b,c,d,e,f,g,h) => {
        this.setState({
            visible: true,
            menuName:a,
            menuMoney:b,
            menuNum:c,
            menuDate :d ,
            menuFir:e,
            cuisineId:f,
            menuMate:g,
            remark:h
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            menuName:'',
            menuMoney:'',
            menuNum:'',
            menuDate:'',
            menuFir:'',
            cuisineId:'',
            menuMate:'',
            remark:''
        });
        let {EditFood}=this.props;
        EditFood(this.state.menuName,this.state.menuMoney,this.state.menuNum,this.state.menuDate,this.state.menuFir,this.state.cuisineId,this.state.menuMate,this.state.remark)
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    deleteArticle=(e)=>{
        let {DeleteFoodClass}=this.props;
        DeleteFoodClass(e);
    };
    componentDidMount() {
        let {FoodAllTable} = this.props;
        FoodAllTable();
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    // handleDel = () => {
    //     const DelDataSource = storeTest.data;
    //     DelDataSource.splice(event.target.getAttribute('data-index'), 1);//data-index为获取索引，后面的1为一次去除几行
    //     this.setState({
    //         data: DelDataSource,
    //     });
    // }

    render() {
       // const {storeTest} = this.props;


        const {menuName,menuMoney,menuNum,menuDate,menuFir,cuisineId,menuMate,remark} = this.state;
        const columns = [{
            title: '菜品名称',
            dataIndex: 'menuName',
            key: 'menuName',
        }, {
            title: '菜品单价',
            dataIndex: 'menuMoney',
            key: 'menuMoney',
        }, {
            title: '菜品余量（份）',
            dataIndex: 'menuNum',
            key: 'menuNum',
        }, {
            title: '上架日期',
            dataIndex: 'menuDate',
            key: 'menuDate',
        }, {
            title: '汉拼音字母',
            dataIndex: 'menuFir',
            key: 'menuFir',
        }, {
            title: '所属类别',
            dataIndex: 'cuisineId',
            key: 'cuisineId',
        }, {
            title: '原料',
            dataIndex: 'menuMate',
            key: 'menuMate',
        }, {
            title: '备注',
            dataIndex: 'menuRem',
            key: 'menuRem',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => (
                <span>
         <Popconfirm title="确定删除？" onConfirm={() => this.deleteArticle(record.menuName)}>
           <a href="#">删除</a>
      </Popconfirm>
           <span className="ant-divider"/>
            <span className="SearchButton">
          <a onClick={()=>this.showModal(record.menuName,record.menuMoney,record.menuNum,record.menuDate,record.menuFir,record.cuisineId,record.menuMate,record.remark)}>编辑</a>
             <Modal
                 title="编辑菜品"
                 visible={this.state.visible}
                 onOk={this.handleOk}
                 onCancel={this.handleCancel}
                 wrapClassName="SearchButton"
             >
                    <div className="ordertype"> <span className="ordertypes">菜品名称&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodName} size="small" defaultValue={this.state.menuName}/></div>
                    <div className="ordertype"><span className="ordertypes">{this.state.cuisineId}所属类别&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button onChange={this.AddFoodClass} value="特价菜品">特价菜品</Button>
                        <Button onChange={this.AddFoodClass} value="热销菜品">热销菜品</Button>
                        <Button onChange={this.AddFoodClass} value="饮料">饮料</Button>
                        <Button onChange={this.AddFoodClass} value="荤菜">荤菜</Button>
                        <Button onChange={this.AddFoodClass} value="汤类">汤类</Button>
                        <Button onChange={this.AddFoodClass} value="面食">面食</Button>
                    </div>
                    <div className="ordertype">
                        <span className="ordertypes">菜品单价(元)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodPrice} size="small" defaultValue={this.state.menuMoney}/></div>
                    <div className="ordertype">
                        <span className="ordertypes">汉拼首字母</span>
                        <Input onChange={this.AddFoodWord} size="small" defaultValue={this.state.menuFir}/></div>
                    <div className="ordertype">
                        <span className="ordertypes">菜品余量(份)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodSize}
                               size="small" defaultValue={this.state.menuNum}/></div>
                 <div className="ordertype">
                        <span className="ordertypes">上架日期</span>
                        <Input onChange={this.NowData} size="small" defaultValue={this.state.menuDate}/></div>
                    <div className="ordertype">
                        <span
                            className="ordertypes ">原料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodCL}
                               id="biginput" size="small" defaultValue={this.state.menuMate}/></div>
                    <div className="ordertype"><span
                        className="ordertypes">备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodMark}
                               size="small" defaultValue={this.state.remark}/></div>

                </Modal></span>
</span>
            )

        }];
        let pagination = {
            pageSize: 6,
            showSizeChanger: true,
        };
        const {storeTest}=this.props;

        return (
            <div className='maincontainer'>
            <Table dataSource={storeTest.Fooddata} pagination={pagination} columns={columns}/>
        </div>)
    }
}

const propertys = state => {
    return {storeTest: state.rootData.RouterData.pageData}
}

MainTable = connect(propertys, {FoodAllTable,EditFood,DelFood,DeleteFoodClass})(MainTable)

module.exports = MainTable;