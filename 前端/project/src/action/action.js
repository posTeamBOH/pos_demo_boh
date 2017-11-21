import TYPES from '../services/$redux/rootTypes.js'

const url = 'http://30.87.246.80:8080'
// const url = 'http://192.168.43.164:8080'
//const url='http://localhost:8080'

//订单明细
export function main_Table(e) {
    return (dispatch) => {
        let sum = 0;
        fetch(url + '/eagle/roder/selectMenuByOrderId', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body: 'orderId=' + e
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Datildata) {
                for (var p in Datildata) {//遍历json数组时，这么写p为索引，0,1
                    sum += parseInt(Datildata[p].count) * parseInt(Datildata[p].money);
                }
                console.log(Datildata);
                dispatch({
                    type:
                    TYPES.ORDERINFO.MAIN_TABLE, Datildata, sum
                })

            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//订单查询
export function OrderSearch(a, b, c) {
    return (dispatch) => {
        fetch(url + '/eagle/roder/getOrders', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body: 'orderId=' + a + '&begin=' + b + '&end=' + c
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                data.map((item) => {
                    if (item.orderType == '0') {
                        item.orderType = '待付款'
                    }
                })
                dispatch({
                    type:
                    TYPES.ORDERINFO.CHECK_ALL, data
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//总表
export function OrderAllTable(e) {
    return (dispatch) => {
        fetch(url + '/eagle/roder/empty', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',

        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                console.log(data);
                dispatch({
                    type:
                    TYPES.ORDERINFO.CHECK_ALL, data
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
    return {type: TYPES.ORDERINFO.CHECK_ALL, data}

}


///菜品信息
//总表
export function FoodAllTable() {
    return (dispatch) => {
        fetch(url + '/eagle/menu/getMenu', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body: 'foodName=&beginTime=&endTime='
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Fooddata) {
                dispatch({
                    type:
                    TYPES.FOODINFO.MAINTABLE, Fooddata
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
    return {type: TYPES.FOODINFO.MAINTABLE, Fooddata}

}

//查询菜品
export function FoodSearch(a, b, c) {
    return (dispatch) => {
        fetch(url + '/eagle/menu/getMenu', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body: 'foodName=' + a + '&beginTime=' + b + '&endTime=' + c
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Fooddata) {
                console.log(Fooddata)
                dispatch({
                    type:
                    TYPES.FOODINFO.MAINTABLE, Fooddata
                });
            }).catch(function (e) {
                console.log("Oops, error");
            });

        });
    }
}
//时间
function getNowFormatNDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

//添加菜品
export function AddFoods(a, b, c, d, e, f, g) {
    let NowData = getNowFormatNDate();
    return (dispatch) => {
        fetch(url + '/eagle/menu/addMenu.do', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body:
            'AfoodName=' + a +
            '&AddfoodClass=' + b +
            '&AFoodPrice=' + c +
            '&AfoodWord=' + d +
            '&AddFoodSize=' + e +
            '&AddFoodCL=' + f +
            '&AddFoodMark=' + g +
            '&NowData=' + NowData
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Fooddata) {
                dispatch({
                    type:
                    TYPES.FOODINFO.MAINTABLE, Fooddata
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//编辑
//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

//首页
export function NowTableNum(a) {
    let Data = getNowFormatDate();
    return (dispatch) => {
        dispatch({type: TYPES.ORDERPAGE.CHOOSEFOOD, TableNumber: a, NowData: Data})
    }
}
//
export function ChooseFoodsClass(a, b, c) {
    return (dispatch) => {
        dispatch({type: TYPES.ORDERPAGE.CHOOSEFOODCLASS, foodName: a, foodPrice: b, FoodSum: c})
    }
}

export function NotEnought() {
    return (dispatch) => {
        fetch(url + '/eagle/menu/selectByMenu', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (noEnough) {
                dispatch({type: TYPES.ORDERPAGE.NOTENOUGH, noEnough})
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//菜品选项卡
export function FoodTabs() {
    return (dispatch) => {
        fetch(url + '/eagle/menu/selectCuisineMenu', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
        }).then( (response)=>{
            //打印返回的json数据
            response.json().then((FoodTabs)=> {
                console.log('这是测试')
               console.log(FoodTabs)
                dispatch({
                    type: TYPES.ORDERPAGE.FOODSTABS, FoodTabs:FoodTabs
                })

            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }

}

//生成桌号
export function TablesSum() {
    return (dispatch) => {
        fetch(url + '/eagle/tables/selectStatus', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                dispatch({
                    type:
                    TYPES.ORDERPAGE.TABLESNUM, tablenSum: data
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//提交订单
export function submitOrder(a,b,c,d,e) {
    return (dispatch) => {
        fetch(url + '/eagle/roder/commitOrder', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body:'tableId='+a+'&orderDate='+b+'&orderMoney='+c+'&orderNum='+d+'&menuNum='+e
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Fooddata) {
                dispatch({
                    type:
                    TYPES.FOODINFO.MAINTABLE, Fooddata
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

export function DeleteFood(a) {
    return (dispatch) => {
        dispatch({type: TYPES.ORDERPAGE.DELETEFOODS, NewFoodClass: a})
    }
}


export function DeleteFoodClass(a) {
    return (dispatch) => {
        fetch(url + '/eagle/menu/deleteMenu.do', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'cors',
            body:'menuName='+a
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                dispatch({
                    type:
                    TYPES.ORDERPAGE.TABLESNUM, tablenSum: data
                })
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}