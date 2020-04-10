import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Alert, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";
import { Actions } from 'react-native-router-flux';
import { FAB} from 'react-native-paper';

import TodaysRoute  from './TodaysRoute';
import Today from './Today';
import Payment from './Payment';
import Schemes from './Schemes';
import MyProductivity from './MyProductivity';


const actions = [
  {
    text: "Create New Order",
    color: 'transperent',
    name: "bt_accessibility",
    position: 1,
    
  },
];

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
         };
    }

static navigationOptions =  ({ navigation }) => ({
    // title: 'Home',
    color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    color: '#fff'
    },
    headerRight: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <Image style={{marginRight:wp('3')}} 
                    source = {require('../../Assets/Icons/SearchHeader.png')}
            />
        </View>
    ),

    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity  onPress={() => Actions.drawerToggle()}>
            <Image style={{marginLeft:wp('2'),}}
                    color='white'
                    source = {require('../../Assets/Icons/menu_white.png')}     
            />
            </TouchableOpacity>
        </View>
    )      
});

  _onStateChange = ({ open }) => this.setState({ open });

    render() {
         const { open } = this.state;
        return (
        
            <View style = {{ flex: 10 }}>
            <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('90'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
                >
              <ScrollView>
                {/* Header */}
                <View style = {{ flex:0.3, backgroundColor: '#210305' }}>
                    <Text style = {{ color:'white', fontSize: 30, type: 'font-awesome', marginTop: hp('6%'),
                                        marginLeft: wp('2%') }} >
                       Hello, Sanyukta 
                    </Text>
                </View>
                  <TodaysRoute />
                  <Today />
                  <Payment />
                  <Schemes />
                  <MyProductivity />
                    
            </ScrollView>
           {/*Floating button....always at the end of view and not in scrollview*/}
            <FloatingAction
                open={open}
                color='#a10d59'
                actions={actions}
                buttonSize= {hp('9.5')}
                floatingIcon= {require('../../Assets/Icons/Floating.png')}
                iconWidth={wp(20)}
                iconHeight={hp(16)}
                // iconWidth={wp(5)}
                // iconHeight={hp(3)}
                shadow= 'null'
                overlayColor= '#221818'
                showBackground= {true}
                onStateChange={this._onStateChange}
                onPressItem={name => {
                    Actions.CreateNewOrderFirst()
                }}
            />

                {/* FAB Right Bottom (Orange) */}
                 {/* <FAB.Group
                    open={open}
                    icon={open ? 'plus' : 'menu'}

                    actions={[
                    { icon: 'add', onPress: () => console.log('Pressed add') },
                    { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
                    { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
                    { icon: 'bell', label: 'Remind', onPress: () => console.log('Pressed notifications') },
                    ]}
                    onStateChange={this._onStateChange}
                    onPress={() => {
                    if (open) {
                        
                        // do something if the speed dial is open
                    }
                    }}
                /> */}
             </ImageBackground>
        </View>
       
       
        );
    }
}
