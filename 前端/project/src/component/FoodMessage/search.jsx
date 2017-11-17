import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Input,Form} from 'antd';
import {connect} from 'react-redux';
import '../../style/search.less';
import {Modal, Button, DatePicker} from 'antd';
const {MonthPicker, RangePicker} = DatePicker;
import {FoodSearch,AddFoods} from '../../action/action'
const {TextArea} = Input;
const FormItem = Form.Item;
class Search extends Component {
    state = {visible: false}
    showModal = () => {
        this.setState({
            visible: true,
            AfoodName:'',
            AddfoodClass:'',
            AFoodPrice:'',
            AfoodWord:'',
            AddFoodSize:'',
            AddFoodCL:'',
            AddFoodMark:''
        });
    }
    onBegin = (date, dateString) => {
        this.setState({beginTime: dateString});
    }
    onEnd = (date, dateString) => {
        this.setState({endTime: dateString});
    }
    foodNameCheck = event => {
        this.setState({foodName: event.target.value});
    }






    foodNameCheck = event => {
        this.setState({foodName: event.target.value});
    }
    Check=()=>{
        let {FoodSearch}=this.props;
        //查询字符
        FoodSearch(this.state.foodName,this.state.beginTime,this.state.endTime);

    }


    AddFoodName=(e)=>{
        this.setState({AfoodName: e.target.value});
    }
    AddFoodClass=(e)=>{
        this.setState({AddfoodClass: e.target.value});
    }
    AddFoodPrice=(e)=>{
        this.setState({AFoodPrice: e.target.value});
    }
    AddFoodWord=(e)=>{
        this.setState({AfoodWord: e.target.value});
    }
    AddFoodSize=(e)=>{
        this.setState({AddFoodSize: e.target.value});
    }
    AddFoodCL=(e)=>{
        this.setState({AddFoodCL: e.target.value});
    }
    AddFoodMark=(e)=>{
        this.setState({AddFoodMark: e.target.value});
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            AfoodName:'',
            AddfoodClass:'',
            AFoodPrice:'',
            AfoodWord:'',
            AddFoodSize:'',
            AddFoodCL:'',
            AddFoodMark:''
        });
        let {AddFoods}=this.props;
        AddFoods(this.state.AddFoodName,this.state.AddfoodClass,this.state.AFoodPrice,this.state.AfoodWord,this.state.AddFoodSize,this.state.AddFoodCL,this.state.AddFoodMark);
       console.log(this.state)

    }
    componentWillReceiveProps() {
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='maincontainer'>
                <span className="example-input">
                <span>菜品名称</span>
            <Input size="large" onChange={this.foodNameCheck} placeholder="请输入菜品名称"/>
        </span>
                <span className="secondinput">
        <span>上架时间</span>
        <DatePicker format="YYYY-MM-DD HH:mm:ss" onChange={this.onBegin}/>
        </span>
                <span className="secondinput thirdinput">
        <span>至</span>
        <DatePicker format="YYYY-MM-DD HH:mm:ss" onChange={this.onEnd}/>
        </span>
                <span className="searchButton">



               <Button type="primary" className="search-ant-btn" onClick={this.Check}>查询</Button>

                <Button type="primary" onClick={this.showModal}>添加菜品</Button>
                <Modal
                    title="添加菜品"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    wrapClassName="SearchButton"
                >

                    <div className="ordertype"> <span className="ordertypes">菜品名称&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodName} defaultValue={this.state.AddFoodName}/></div>
                    <div className="ordertype"><span className="ordertypes">所属类别&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button onClick={this.AddFoodClass} value="特价菜品">特价菜品</Button>
                        <Button onClick={this.AddFoodClass} value="热销菜品">热销菜品</Button>
                        <Button onClick={this.AddFoodClass} value="饮料">饮料</Button>
                        <Button onClick={this.AddFoodClass} value="荤菜">荤菜</Button>
                        <Button onClick={this.AddFoodClass} value="汤类">汤类</Button>
                        <Button onClick={this.AddFoodClass} value="面食">面食</Button></div>
                    <div className="ordertype">
                        <span className="ordertypes">菜品单价(元)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodPrice} defaultValue={this.state.AFoodPrice}/></div>
                    <div className="ordertype">
                        <span className="ordertypes">汉拼首字母</span>
                        <Input onChange={this.AddFoodWord} defaultValue={this.state.AfoodWord}/></div>
                    <div className="ordertype">
                        <span className="ordertypes">初始份数(份)&nbsp;&nbsp;&nbsp;</span>
                        <Input onChange={this.AddFoodSize} defaultValue={this.state.AddFoodSize}/></div>
                    <div className="ordertype">
                        <span
                        className="ordertypes ">原料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                         <TextArea  onChange={this.AddFoodCL} defaultValue={this.state.AddFoodCL}autosize={{ minRows: 2, maxRows: 6 }} />
                    </div>

                    <div className="ordertype"><span
                        className="ordertypes">备注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <TextArea  onChange={this.AddFoodMark} defaultValue={this.state.AddFoodMark} autosize={{ minRows: 2, maxRows: 6 }} />
                        </div>

                </Modal>

    </span>
            </div>



        )
    }
}
const propertys = state => {
    return {store:state.rootData.foodTale.pageData}
}

Search = connect(propertys,{FoodSearch,AddFoods})(Search)

module.exports = Search;