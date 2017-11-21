import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Search from './search.jsx'
import Tables from './table.jsx'
import ChildButton from '../ChildButton/childbutton'
class Index extends Component {
      render() {
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