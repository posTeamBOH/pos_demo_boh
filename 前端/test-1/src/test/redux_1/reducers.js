import {combineReducers} from 'redux'
import TYPES from '../../module/$redux/rootTypes.js'

const initialList = {
    theString: '初始化'
}

export default combineReducers({
    pageData:function (state = initialList, action) {
        switch (action.type) {
            case TYPES.TEST.TEST_1:
                return Object.assign({}, state, {theString: "我已经修改过！"})
                break;
            default:
                return state;
        }
    }
})

