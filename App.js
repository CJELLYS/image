/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  processColor,
  Alert,
  Dimensions
} from 'react-native';
import BMTokenMarketsSQLite from './BMTokenMarketsSQLite';
import SpikeActivityView  from "react-native-scrollview-uniteanimated"

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;
var sqLite = new BMTokenMarketsSQLite();
var db;
export default class App extends Component {

  constructor(props) {
    super(props);
    this.timeAry = [{ "title": "08:00", "subTitle": "已完毕" }, { "title": "11:00", "subTitle": "抢购中" }, { "title": "12:00", "subTitle": "抢购中" },
    { "title": "13:00", "subTitle": "即将开始" }, { "title": "14:00", "subTitle": "即将开始" }, { "title": "15:00", "subTitle": "即将开始" }, { "title": "16:00", "subTitle": "即将开始" }, { "title": "17:00", "subTitle": "即将开始" }]
  }

  componentWillMount() {
    // //开启数据库  
    // if (!db) {
    //   db = sqLite.open();
    // }
    // //建表 
    // // sqLite.dropTable();
    // sqLite.createTable();
    // //删除数据  
    // // sqLite.deleteData();
    // let exchangeItem = {
    //   asset: {
    //     name: 'BiAN',
    //     id: 'bian'
    //   }
    // }
    // let exchangeMarkets = {
    //   "LTC/BTC": {
    //     "limits": {},
    //     "precision": {},
    //     "tierBased": undefined,
    //     "percentage": undefined,
    //     "taker": 0.002,
    //     "maker": 0.0015,
    //     "id": "ltc_btc",
    //     "symbol": "LTC/BTC",
    //     "base": "LTC",
    //     "quote": "BTC",
    //     "baseId": "ltc",
    //     "quoteId": "btc",
    //     "info": {},
    //     "type": "spot",
    //     "spot": true,
    //     "future": false,
    //     "lot": 0.000001,
    //     "active": true
    //   }
    // }
    // // 模拟插入一条数据  
    // let insertDataAry = [];
    // for (let marketsKey in exchangeMarkets) {
    //   if (exchangeMarkets[marketsKey].active || exchangeItem.asset.id === 'huobipro') {//只有激活的才能使用,因为货币没有active 字段,
    //     insertDataAry.push({
    //       exchange_id: exchangeItem.asset.id,
    //       token_id: exchangeMarkets[marketsKey].id,
    //       token_symbol: exchangeMarkets[marketsKey].symbol,
    //       token_base: exchangeMarkets[marketsKey].base,
    //       token_base_id: exchangeMarkets[marketsKey].baseId,
    //       token_quote: exchangeMarkets[marketsKey].quote,
    //       token_quote_id: exchangeMarkets[marketsKey].quoteId,
    //       token_active: exchangeMarkets[marketsKey].active
    //     })
    //   }
    // }
    // //插入数据  
    // sqLite.insertData(insertDataAry);
    // // 查询  
    // db.transaction((tx) => {
    //   tx.executeSql("select * from tokenmarkets", [], (tx, results) => {
    //     for (let i = 0; i < results.rows.length; i++) {
    //       var u = results.rows.item(i);
    //       //一般在数据查出来之后，  可能要 setState操作，重新渲染页面 
    //       console.log("======results.rows>>>>>>", u);
    //     }
    //   });
    // }, (error) => {//打印异常信息  
    //   console.log(error);
    // });
  }
 


  componentDidMount() {
   
  }

  compennetDidUnmount() {
    sqLite.close();  //关闭数据库
    console.log("关闭数据库");
  }

  addLabelAction(list) {
    console.log("-=======>>>>>", list);
  }

  subScrollView() {
    let ary = [];
    for (var i = 0; i < this.timeAry.length; i++) {
      if (i % 2 == 0) {
        ary.push(
        <View  key={i} style={{ backgroundColor: 'red', flex:1 }}>
        </View>)
      } else {
        ary.push(
        <View key={i} style={{ backgroundColor: 'rgb(230,100,150)', flex:1}}>
        </View>
        )
      }
    }
    return ary;
  }

  onCureenTimeProps(index) {
    console.log("===index=>>>>", index);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop:20,marginBottom:20}}>爱好地方大大东方</Text>
        <SpikeActivityView
          itemsTopArray={this.timeAry}
          fatherViewBackgroundColor={'#F0F0F0'}
          topViewStyle={{ backgroundColor: '#FC6345', height: 45, width: ScreenWidth }}
          moveIndexViewBackgroundColor={"white"}
          topViewTitleStyle={{ color: 'white', fontSize: 12 }}
          scrollViewSubView={this.subScrollView()}
          onCureenTimeProps={(index) => this.onCureenTimeProps(index)}
          moveIndexViewWidth={50}
          topTimeListViewCellWidth={70}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  chart: {
    width: 250,
    height: 250
  }
});
