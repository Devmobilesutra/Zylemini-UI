import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Router, Scene, Stack, Drawer, Tabs } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import Info from './Info';
import Orders from './Orders';
import Payments from './Payments';
import Assets from './Assets';
import Surveys from './Surveys';
import Schemes from './Schemes';


export default class TabBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            // <View>
        <Router>
            {/* <Stack key="Tabbar"  panHandlers={null} > */}
              {/* <Stack> */}
             <Scene key='Tabbar' tabs={true} tabBarStyle={styles.tabBar} default='Main'  
                            swipeEnabled
                            scrollEnabled
                            showLabel={true}
                            tabBarPosition='top'
                            tabBarStyle={{ backgroundColor: '#221818', }}
                            tabStyle={{width:wp('21.1')}}
                            labelStyle={{ fontFamily:'Proxima Nova',width:wp(15), height:hp('3'),}}
                            indicatorStyle={{ backgroundColor: '#CC1167', height:hp('0.8') }}
                            activeBackgroundColor="white"
                            //navBar={MediaNavBar}
                            // lazy
                            headerMode="screen"
                            wrap={false}
                            hideNavBar={true}
             >
            <Scene key='Info' initial={true} component={Info} title='INFO'  hideNavBar={true}/>
            <Scene key='Orders'  component={Orders}  title='ORDERS'  hideNavBar={true}/>
            <Scene key='Payments'  component={Payments}  title='PAYMENTS'  hideNavBar={true}/>
            <Scene key='Assets'  component={Assets}  title='ASSETS'  hideNavBar={true}/>
            <Scene key='Surveys'  component={Surveys}  title='SURVEYS'  hideNavBar={true}/>
            <Scene key='Schemes'  component={Schemes}  title='SCHEMES'  hideNavBar={true}/>
             </Scene>
            {/* </Stack> */}
               </Router>
            //   </View>
        // <View>
        // <Text>Hii</Text>
        // </View>
        );
    }
}


const styles = StyleSheet.create({
tabBar: {
height: 50,
// borderTopColor: 'darkgrey',
borderTopWidth: 1,
opacity: 0.98,
// justifyContent:'space-between'
}
});