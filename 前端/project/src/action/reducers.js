import {combineReducers} from 'redux'
import TYPES from '../services/$redux/rootTypes.js'

const initialList = {
    theString: '初始化'
}

export default combineReducers({
    pageData:function (state = initialList, action) {
        console.log(action)
        switch (action.type) {
            case TYPES.TEST.TEST_1:
                return Object.assign({}, state, {theString: "我已经修改过！"})
                break;
            case TYPES.ORDERINFO.MAIN_TABLE:
                return Object.assign({},state,{theString: "我已经修改过！"},action)
                break;
            case TYPES.ORDERINFO.CHECK_ALL:
                return Object.assign({},{theString: "显示成功"},action)
                break;
            case TYPES.FOODINFO.MAINTABLE:
                return Object.assign({},state,{theString: "显示成功"},action)
                break;
            case TYPES.FOODINFO.SEARCH:
                return Object.assign({},{theString: "查询成功"},action)
                break;
            case TYPES.ORDERPAGE.CHOOSEFOOD:
                return Object.assign({},action)
                break;
            default:
                return state;
        }
    }
})

