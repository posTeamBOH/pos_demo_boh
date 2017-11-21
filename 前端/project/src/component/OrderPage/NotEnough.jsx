import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {NotEnought} from '../../action/action'
import '../../style/notenough.less';

class NotEnough extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        let {NotEnought} = this.props;
        NotEnought();
    }

    render() {
        let disth = null;
        if(this.props.store.noEnough != null){
            disth = this.props.store.noEnough.map((item)=>{
                return (
                    <span className="notenfood">{item.menuName}{item.menuMoney}￥</span>

                )
            })

        }
        return(
            <div className="topmiddlenav">
                <div className="topnav-title"><p>余量不足菜品</p></div>
                <div className="notnav">
                    {disth}
                </div>
            </div>
        )
    }


}


const propertys = state => {
    return {store: state.rootData.RouterData.pageData}
}

NotEnough = connect(propertys, {NotEnought})(NotEnough)
module.exports = NotEnough;