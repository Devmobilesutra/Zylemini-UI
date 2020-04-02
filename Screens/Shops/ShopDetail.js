import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Router, Scene, Stack, Drawer, Tabs } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { FloatingAction } from "react-native-floating-action";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import Dialog, { DialogContent, DialogFooter, DialogButton, DialogTitle} from 'react-native-popup-dialog';

import Info from './Info';
import Orders from './Orders';
import Payments from './Payments';
import Assets from './Assets';
import Surveys from './Surveys';
import Schemes from './Schemes';


import TabBar from './TabBar'

const actions = [
  {
    text: "Create New Order",
    color: 'transperent',
    name: "bt_create", 
    position: 4,
  },
  {
    text: "Accept Payment",
    color: 'transperent',
    name: "bt_payment", 
    position: 3,
  },
  {
    text: "Take A Survey",
    color: 'transperent',
    name: "bt_survey", 
    position: 2,
  },
  {
    text: "Audit Assets",
    color: 'transperent',
    name: "bt_assets", 
    position: 1,
  },

];


export default class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: '',    
        };
    }
// componentWillMount() {
// this.props.navigation.setParams({ handleSave: this._saveDetails.bind(this) });
// // this.props.navigation.setParams({ handleFalse: this.saveFalse.bind(this) });
// // this.props.navigation.setParams({ handleDialog: this.getDialog.bind(this) });
// }

// _saveDetails() {
// //const { navigation } = this.props;
//     this.setState({ visible: true });
//    alert('hiii')
// }

// saveFalse() {
//     this.setState({ visible: false });
// }

// // getVisible() {
// //     alert('hii');
// // }

// getDialog(){
//     alert('hii');
// }

// showLocPopUp =  () => {
// const { navigation } = this.props;
//    this.setState({ visible: true });
// }

// applicablePopUp =  () => {
// const { navigation } = this.props;
//    this.setState({ visible: true });
// }

static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    //const { navigation } = this.props;
     return {
    // title: 'Shops',
    color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },
    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    ),  
    headerRight: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
        
            <TouchableOpacity  
                // onPress={() => params.handleSave()}
                // onPress={() => alert('hii')}
                //  onPress={this.applicablePopUp.bind(this)}
            >     
              <View style={{backgroundColor: '#CC1167',justifyContent:'center',marginRight:hp('3'),
                                borderColor: '#CC1167',height:hp('4'),width:wp('23'),borderRadius:wp('5')}}>
                <Text style={{alignSelf:'center', color:'#FFFFFF', fontFamily:'Proxima Nova',fontSize:RFValue('12'),
                                fontWeight: 'bold',padding:10}}>
                    CHECK IN
                </Text>
             </View>
            </TouchableOpacity>

            <Image  style={{marginRight:hp('2'), marginBottom:hp('0.5'), height:hp('4'), width:wp('6'),}}
                source = {require('../../Assets/Icons/edit.png')}
            />    
        </View>
    )
    }
}
floatAction(name)
{
    Actions.CreateNewOrderFirst()
}
render() {
    return (
        <View>
         <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style = {{ backgroundColor: '#210305' }}>
                <Text style = {{ color:'#F8F4F4', fontSize:RFValue(24), fontFamily: 'Proxima Nova',
                                  fontWeight: 'bold', marginLeft: wp('6'), marginTop:hp('2') }} >
                      Shop Name
                </Text>
                 <Text style = {{ color:'#FFFFFF', fontSize:RFValue(11), fontFamily: 'Proxima Nova',
                                  fontWeight: 'bold', marginLeft: wp('6'), marginTop:hp('1'),marginBottom:hp('5') }} >
                      Kothrud, Pune
                </Text> 
            </View>
            {/* Tab Bar View */}
            <View>
                <TabBar />
            </View>


        </ScrollView>

             <FloatingAction
                color='#a10d59'
                actions={actions}
                buttonSize= {hp('9')}
                distanceToEdge = {10}
                // floatingIcon= {require('../../Assets/Icons/Floating.png')}
                // iconWidth={wp(20)}
                // iconHeight={hp(16)}
                iconWidth={wp(5)}
                iconHeight={hp(3)}
                shadow= 'null'
                overlayColor= '#221818'
                showBackground= {true}
                onPressItem={name => {
                    // if(name = "bt_create"){ 
                            Actions.CreateNewOrderFirst()
                    // }
                   
                }}
            />
        </View>       
    );
}
}


const styles = StyleSheet.create({
tabBar: {
height: 50,
borderTopColor: 'darkgrey',
borderTopWidth: 1,
opacity: 0.98,
justifyContent:'space-between'
},

  appliSchemesMainContainer: {
    flex:1,
    marginVertical: wp('10'),
  },

  appliSchemesRowContainer: { 
    flex:1, 
    alignItems: 'flex-start',
    flexDirection: 'row',  
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  appliSchemeTextStyle: {
    marginLeft:wp('2'),
    fontFamily: 'Proxima Nova', 
    fontSize: wp('5'), 
    color:'#3955CB',
  },

    schemesDescriptionMainContainer: {
    flex:1 ,
    alignItems:'flex-start', 
    justifyContent:'center',
    marginVertical:hp('10'), 
    marginLeft:wp('5'), 
    marginRight:wp('3'),
  },

  descriptionTextStyle: { 
    color: '#796A6A', 
    fontSize: wp('3%'), 
    fontFamily: 'Proxima Nova', 
  },

  validityDateMainContainer: {
    flex:1, 
    flexDirection:'column', 
    alignItems:'flex-start', 
    justifyContent:'center',
    marginVertical:hp('4'),
    marginHorizontal:wp('5'),
  },

  validityTextStyle: { 
    color: '#362828', 
    fontSize: wp('3.5%'), 
    fontFamily: 'Proxima Nova', 
    fontWeight: 'bold', 
  },

  validytyDateTextStyle: { 
    color: '#796A6A', 
    fontSize: wp('3%'), 
    fontFamily: 'Proxima Nova',
    marginTop:hp('1'),
  },
});

