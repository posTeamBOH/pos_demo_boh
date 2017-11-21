import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Input,DatePicker,Button,Table} from 'antd';
import {NowTableNum,TablesSum} from '../../action/action'
class TableBtn extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
        let {TablesSum}=this.props;
        TablesSum();
    }
    onClickChange=(e)=>{
        let value=e.target.value;
        let {NowTableNum}=this.props;
        NowTableNum(value)
        e.target.style.backgroundColor='green'
    }
    render(){
        var self=this;
        let tableSum = null;
        let color=''
        if(this.props.store.tablenSum != null){
            tableSum = this.props.store.tablenSum.map((item,index)=>{
                if(item.tableType==1){
                    color="primary"
                }
                else {
                    color=''
                }
                return (
                    <Button onClick={self.onClickChange} type={color}  className="tablenumber" key={item.TablsId} value={index+1}>{index+1}</Button>

                )
            })

        }
        return (
            <div>
                {tableSum}
            </div>
        )
    }
};
const propertys = state => {
    return {store:state.rootData.RouterData.pageData}
}

TableBtn = connect(propertys,{NowTableNum,TablesSum})(TableBtn)
module.exports = TableBtn;
