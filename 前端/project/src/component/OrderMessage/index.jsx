import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Search from './search.jsx'
import Tables from './table.jsx'
import ChildButton from '../ChildButton/childbutton'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"待处理订单"
        }

    }
    componentWillReceiveProps() {
    }
    componentDidMount() {
    }

    render() {
        const {name}=this.state;
        return (

            <div>
                <ChildButton/>
                <Search/>
                <Tables/>
            </div>

        )
    }
}

module.exports = Index;