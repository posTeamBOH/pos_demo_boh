import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';


class Underquantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"菜量不足菜品"
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
                <div>{name}</div>
            </div>

        )
    }
}

module.exports = Underquantity;