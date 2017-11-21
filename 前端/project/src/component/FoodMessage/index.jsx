import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Search from './search.jsx'
import Table from './table.jsx'
import ChildButton2 from '../ChildButton/childbutton2'
import MainTable from './maintable.jsx'
class Index extends Component {
    render() {
        return (
            <div>
                <ChildButton2/>
                <Search/>
                <Table/>
                <MainTable/>
            </div>

        )
    }
}

module.exports = Index;