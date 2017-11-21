import {combineReducers} from 'redux'
import TYPES from '../services/$redux/rootTypes.js'

const initialList = {
    theString: '初始化',
    FoodTabs:[],
}
var objDeepCopy = function (source) {
    var sourceCopy = source instanceof Array ? [] : {};
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}
var TableNumberMarry=[];
export default combineReducers({
    pageData:function (state = initialList, action) {
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
                let flag=true;
                TableNumberMarry.map(function (item) {
                    if(item.Table==action.TableNumber){
                        flag=false;
                    }
                })
                if(flag==true){
                    TableNumberMarry.push({Table:action.TableNumber,FoodsClass:[]})
                }
                return Object.assign({},state,{NowTable:action.TableNumber,NowData:action.NowData},{TableNumberMarry:TableNumberMarry})
                break;
            case TYPES.ORDERPAGE.CHOOSEFOODCLASS:

                TableNumberMarry.map(function (item) {
                    let flag=false,flag2=true;
                    if(item.Table==state.NowTable){
                        if(item.FoodsClass.length!=0){
                            item.FoodsClass.map((item)=>{
                                if(item.FoodName==action.foodName){
                                    item.FoodSum=action.FoodSum;
                                    flag2=false;
                                }

                            })
                        }
                        flag=true;
                    }
                    if(flag&&flag2){
                        item.FoodsClass.push({FoodName:action.foodName,FoodPrice:action.foodPrice,FoodSum:action.FoodSum})
                    }
                })
                return Object.assign({},state,{TableNumberMarry:TableNumberMarry})
                break;
            case TYPES.ORDERPAGE.NOTENOUGH:
                return Object.assign({},state,{theString: "显示成功"},action)
                break;
            case TYPES.ORDERPAGE.FOODSTABS:
                return Object.assign({},state,{theString: "显示选项卡成功"},action)
                break;
                //生成桌号
            case TYPES.ORDERPAGE.TABLESNUM:
                return Object.assign({},state,{theString: "已经生成桌号"},action)
                break;
            case TYPES.ORDERPAGE.DELETEFOODS:
                state.TableNumberMarry.map(function (item,index) {
                    let Nindex=null;
                    let Sindex=null;
                if(item.Table==state.NowTable){
                    Sindex=index;
                    item.FoodsClass.map((items,index)=>{
                        if(items.FoodName==action.NewFoodClass){
                            console.log(index)
                            Nindex=index;
                        }
                    })
                    if(Nindex!=null&&Sindex!=null){
                        state.TableNumberMarry[Sindex].FoodsClass.splice(Nindex,1)
                      }
                    }

                })

                return Object.assign({},state,{theString: "已经删除"})
                break;
            default:
                return state;
        }
    }
})

