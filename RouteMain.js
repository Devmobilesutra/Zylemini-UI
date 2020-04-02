import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import { Router, Scene, Stack, Drawer, Tabs, } from 'react-native-router-flux';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { Root } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SideMenu from './SideMenu';

import SplashScreen from './Screens/SplashScreenComponent/SplashScreen'
import Login from './Screens/LoginComponent/Login';
import ForgetUserIdOrPass from './Screens/LoginComponent/ForgetUserIdOrPass';
import Dashboard from './Screens/Dashboard/Dashboard';
import CreateNewOrderFirst from './Screens/CreateNewOrder/CreateNewOrderFirst';
import CreateNewOrderSecond from './Screens/CreateNewOrder/CreateNewOrderSecond';
import FilterPage from './Screens/CreateNewOrder/FilterPage';
import CreateNewOrderPreview from './Screens/CreateNewOrder/CreateNewOrderPreview';
import AddNewOutlet from './Screens/CreateNewOrder/AddNewOutlet';

import Shops from './Screens/Shops/Shops';
import ShopCardView from './Screens/Shops/ShopCardView';
import ShopDetail from './Screens/Shops/ShopDetail';
import TabBar from './Screens/Shops/TabBar'

import Info from './Screens/Shops/Info';
import Orders from './Screens/Shops/Orders';
import Payments from './Screens/Shops/Payments';
import Assets from './Screens/Shops/Assets';
import Surveys from './Screens/Shops/Surveys';
import Schemes from './Screens/Shops/Schemes';
import AddNewShop from './Screens/Shops/AddNewShop';






export default class RouteMain extends Component{

    render() { 
        return ( 
        
            <Router>
                <Stack key="root" >
                    <Scene key="SplashScreen" component={SplashScreen} title="SplashScreen" initial={true} hideNavBar={true}/>
                    <Scene key="Login" component={Login} title="Login" hideNavBar={true} back/>
                    <Scene key="ForgetUserIdOrPass" component={ForgetUserIdOrPass} title="ForgetUserIdOrPass" hideNavBar={true}/>
                    <Scene key="Dashboard" component={Dashboard} title="Home"   hideNavBar={true}/>
                    <Scene key="CreateNewOrderFirst" component={CreateNewOrderFirst} title="Create New Order" />
                    <Scene key="CreateNewOrderSecond" component={CreateNewOrderSecond} title="CreateNewOrderSecond" hideNavBar={true}/>
                    <Scene key="FilterPage" component={FilterPage} title="FilterPage" hideNavBar={true}/>
                    <Scene key="CreateNewOrderPreview" component={CreateNewOrderPreview} title="CreateNewOrderPreview" hideNavBar={true}/>
                    <Scene key="AddNewOutlet" component={AddNewOutlet} title="AddNewOutlet" />

                    <Scene key="Shops" component={Shops} title="Shops"/>
                    <Scene key="AddNewShop" component={AddNewShop} title="Add New Party"/>
                    <Scene key="ShopCardView" component={ShopCardView} title="Shops"/>
                    <Scene key="ShopDetail" component={ShopDetail}  />


                    {/* <Scene key='TabBar'  tabs={true} component={TabBar} title='TabBar'  hideNavBar={true}/> */}
                    {/* <Scene key='Info' tabs={true} component={Info} title='INFO'  hideNavBar={true}/>
                    <Scene key='Orders'  tabs={true} component={Orders}  title='ORDERS'  hideNavBar={true}/>
                    <Scene key='Payments' tabs={true} component={Payments}  title='PAYMENTS'  hideNavBar={true}/>
                    <Scene key='Assets' tabs={true} component={Assets}  title='ASSETS'  hideNavBar={true}/>
                    <Scene key='Surveys' tabs={true}  component={Surveys}  title='SURVEYS'  hideNavBar={true}/>
                    <Scene key='Schemes' tabs={true}  component={Schemes}  title='SCHEMES'  hideNavBar={true}/> */}

                    <Drawer
                          hideNavBar
                          key="drawerMenu"
                          contentComponent={SideMenu}
                          drawerWidth={wp('70')}
                          drawerPosition="left"
                    >
                      <Scene
                          key="Dashboard"
                          component={Dashboard}
                      />
                       <Scene
                          key="Shops"
                          component={Shops}
                      /> 
                      <Scene
                          key="CreateNewOrderFirst"
                          component={CreateNewOrderFirst}
                      />
                    </Drawer>

                <Scene key='Tabbar' tabs={true} tabBarStyle={styles.tabBar} default='Main'  
                            swipeEnabled
                            scrollEnabled
                            showLabel={true}
                            tabBarPosition='top'
                            tabBarStyle={{ backgroundColor: '#221818', }}
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
             
                            
                </Stack>
              </Router>
        )}
}

const styles = StyleSheet.create({
    navBar: {
    backgroundColor:'#221818',
},
navBarTitle:{
    color:'#FFFFFF'
},
barButtonTextStyle:{
    color:'#FFFFFF'
},
barButtonIconStyle:{
    tintColor:'#FFFFFF'
},
tabBar: {
height: 40,
borderTopColor: 'darkgrey',
borderTopWidth: 1,
opacity: 0.98,
justifyContent:'space-between'
}
})


