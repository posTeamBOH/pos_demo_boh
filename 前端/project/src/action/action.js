import TYPES from '../services/$redux/rootTypes.js'
//订单明细
export function main_Table(e) {
    return (dispatch) => {
    let sum=0;
        fetch('http://localhost:8080/eagle/roder/seclectMenuByOrderId', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body:'orderId='+e
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Datildata) {
    for(var p in Datildata){//遍历json数组时，这么写p为索引，0,1
        sum+=parseInt(Datildata[p].count)*parseInt(Datildata[p].money);
    }
                console.log(Datildata);
                dispatch({
                    type:
                    TYPES.ORDERINFO.MAIN_TABLE, Datildata,sum
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
        fetch('http://localhost:8080/eagle/roder/getOrders', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body:'orderId=' + a + '&begin=' + b + '&end=' + c
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                console.log(data);
                dispatch({
                    type:
                    TYPES.ORDERINFO.CHECK_ALL,data
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
        fetch('http://localhost:8080/eagle/roder/empty', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },

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
export function FoodAllTable(e) {
    const
        Fooddata = [{
            key: '1',
            name: '麻婆豆腐',
            price: 32,
            surplus: '0',
            dates: '2017-11-11',
            abc: 'MPDF',
            types: '素菜',
            material: '水，肉片,哇哈哈哈。。。',
            remark: '不吃香菜',
        }];
    // return (dispatch) => {
    //     fetch('asa', {
    //         method: 'post',
    // headers: {
    //     'Accept': 'application/json, text/javascript, */*; q=0.01',
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // },
    //
    //     }).then(function (response) {
    //         //打印返回的json数据
    //         response.json().then(function (Fooddata) {
    //             console.log(data);
    //             dispatch({
    //                 type:
    //                 TYPES.FOODINFO.MAINTABLE, Fooddata
    //             })
    //         });
    //     }).catch(function (e) {
    //         console.log("Oops, error");
    //     });
    // }
    return {type: TYPES.FOODINFO.MAINTABLE, Fooddata}

}

//查询菜品
export function FoodSearch(a, b, c) {

    return (dispatch) => {
        fetch('http://localhost:8080/eagle/menu/getMenu.do', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'foodName=' + a + '&beginTime=' + b + '&endTime=' + c
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (Fooddata) {
                console.log(data);
                dispatch(type
            :
                TYPES.FOODINFO.MAINTABLE, Fooddata
            )
            });
        }).catch(function (e) {
            console.log("Oops, error");
        });
    }
}

//添加菜品
export function AddFoods(a, b, c, d, e, f,g) {

    return (dispatch) => {
        fetch('http://localhost:8080/eagle/menu/addMenu.do', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body:'AfoodName='+a+
                 '&AddfoodClass='+b+
            '&AFoodPrice='+c+
            '&AfoodWord='+d+
            '&AddFoodSize='+e+
            '&AddFoodCL='+f+
            '&AddFoodMark='+g
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



//首页
export function NowTableNum(a) {
  return (dispatch)=>{
      dispatch({type:TYPES.ORDERPAGE.CHOOSEFOOD,TableNumber:a})
  }
}

