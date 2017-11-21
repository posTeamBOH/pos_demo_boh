import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {} from 'antd';
import {Button, Tabs} from 'antd';
import '../../style/pendingorder.less';
import {connect} from 'react-redux';
import {ChooseFoodsClass,FoodTabs} from '../../action/action'

const TabPane = Tabs.TabPane;


class TabsS extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    ChooseFood=(e)=>{
        console.log('点击了')
        let foodsInfo=e.target.value.split("&");
        let {ChooseFoodsClass}=this.props;
        ChooseFoodsClass(foodsInfo[0],foodsInfo[1],1);
    }

    componentWillReceiveProps() {

    }
    componentDidMount() {
        let {FoodTabs}=this.props;
        FoodTabs();
    }

    render() {
        let self=this;
        let TabsShow = null;
      if(this.props.store.FoodTabs!=null){
          TabsShow = this.props.store.FoodTabs.map((item)=>{
              return (
                  <TabPane tab={item.foodClass} key={item.key}>
                      <div className="fbutton">
                          {item.food.map((item)=>{
                              let foodValue=item.menuName+'&'+item.menuMoney;
                              return(
                                  < Button type="primary" onClick={self.ChooseFood} value={foodValue}>{item.menuName} {item.menuMoney}￥</Button>
                              )
                          })
                          }
                      </div>
                  </TabPane>

              )
          })

      }


        return (
            <div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition='left'
                    style={{height: 440}}
                >
                {TabsShow}
                </Tabs>
            </div>
        )
    }
};

const propertys = state => {
    return {store:state.rootData.RouterData.pageData}
}
TabsS = connect(propertys,{ChooseFoodsClass,FoodTabs})(TabsS)
module.exports = TabsS;








