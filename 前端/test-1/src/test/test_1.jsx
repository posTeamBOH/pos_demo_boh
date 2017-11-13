import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {myTest}  from './redux_1/action.js'
import {} from 'antd';

class Test_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.myTest_1=this.myTest_1.bind(this)
    }
    myTest_1(){
        let {myTest}=this.props;
        myTest();
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
    }

    render() {
        const {msg} = this.state;
        const {storeTest} = this.props;
        return (
            <button type='button' onClick={this.myTest_1}>{storeTest.theString}</button>
        )
    }
}
const propertys = state => {
    return {storeTest:state.rootData.Test_1.pageData}

}

Test_1 = connect(propertys,{myTest})(Test_1)
module.exports = Test_1;