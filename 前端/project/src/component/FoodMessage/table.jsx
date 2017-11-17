import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import '../../style/table.less';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
     }
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="toptable">
                <div className='tableBox'>
                 </div>
                <div className="TableList">
                    <span className="TextTypes">菜品种类数：</span>
                    <label className="types">250种</label>
                    <span className="textTypes">售空菜品数：</span>
                    <label className="types">25种</label>
                    <span className="textTypes">余量不足菜品数：</span>
                    <label className="types">250种</label>

                </div>


            </div>
        )
    }
}

module.exports = Table;