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

    

applicablePopUp =  () => {
  const { navigation } = this.props;
     this.setState({ visible: true });
    // alert('hii')
  }
render() {
    return (
      <View>
        <View style={{flexDirection:'row',backgroundColor: '#221818', color: '#fff'}}>
      
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
        
        <TouchableOpacity        
          onPress={this.applicablePopUp.bind(this)}
           >
            <View >
                                         <Dialog
                                            visible={this.state.visible}
                                            onTouchOutside={() => {
                                            this.setState({ visible: false });
                                            }}
                                              width={wp('90')}
                                              footer={
                                               <DialogFooter>
                                                 <DialogButton
                                                   text="OK"
                                                   textStyle = {{color:'white'}}
                                                   style = {{backgroundColor:'#46BE50'}}
                                                   onPress={() => { this.setState({ visible: false });}}
                                                   
                                                 />
                                               </DialogFooter>
                                             }
                                            > 
                                             <DialogContent>
                                               <View style={styles.appliSchemesMainContainer}>
                                                   <View style={styles.appliSchemesRowContainer}>
                                                               <View style={styles.roundedtext}></View>

                                                               <Text style= {styles.appliSchemeTextStyle}>
                                                                   Applicable Schemes( 12 )
                                                               </Text>
                                                         </View>
                                               </View>
                                               {/* Scheme Description */}
                                               <View style={styles.schemesDescriptionMainContainer}>
                                                       <Text style={styles.descriptionTextStyle}>
                                                           Dummy Scheme Description.Dummy Scheme Description. Dummy Scheme Description.Dummy 
                                                           Scheme Description. Dummy Scheme Description.
                                                       </Text>
                                               </View>

                                               <View style={styles.validityDateMainContainer}>
                                                   <Text style={styles.validityTextStyle}>
                                                       Validity
                                                   </Text>
                                                   <Text style={styles.validytyDateTextStyle}>
                                                       12 Feb 2020
                                                   </Text>
                                               </View>
                                             </DialogContent>
                                         </Dialog>
                                 </View>
 
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

        </View>
        <View>
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
           
        </View>   
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

