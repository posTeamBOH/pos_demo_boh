import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Input,DatePicker,Button,Table} from 'antd';
import {NowTableNum} from '../../action/action'
function OrderSearch() {
    return items = [{id:1}, {id:2}, {id:3} ,{id:4} ,{id:5} ,{id:6} ,{id:7}];
    // return (dispatch) => {
    //     fetch('http://localhost:8080/eagle/roder/getOrders', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json, text/javascript, */*; q=0.01',
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         },
    //         body:'orderId=' + a + '&begin=' + b + '&end=' + c
    //     }).then(function (response) {
    //         //打印返回的json数据
    //         response.json().then(function (data) {
    //             console.log(data);
    //             dispatch({
    //                 type:
    //                 TYPES.ORDERINFO.CHECK_ALL,data
    //             })
    //         });
    //     }).catch(function (e) {
    //         console.log("Oops, error");
    //     });
    // }
}
var items = OrderSearch();

class TableBtn extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onClickChange=(e)=>{
        let value=e.target.value;
        let {NowTableNum}=this.props;
        NowTableNum(value)
    }
    render(){
        var self=this;

        return (
            <div>
                {
                    items.map(function (item,index) {
                        return <span><Button onClick={self.onClickChange} className="tablenumber" key={item.id} value={index+1}>{index+1}</Button></span>
                    })
                }
            </div>
        )
    }
};

const propertys = state => {
    return {store:state.rootData.ChooseFood.pageData}
}

TableBtn = connect(propertys,{NowTableNum})(TableBtn)
module.exports = TableBtn;
