import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Test_1 from '../../action/reducers.js'
import mainTable from '../../action/reducers.js'
import foodTale from '../../action/reducers.js'
import ChooseFood from '../../action/reducers.js'
export default combineReducers({
    Test_1,
    mainTable,
    foodTale,
    ChooseFood
})