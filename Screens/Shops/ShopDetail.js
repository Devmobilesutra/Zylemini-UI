import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Router, Scene, Stack, Drawer, Tabs } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { FloatingAction } from "react-native-floating-action";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import Dialog, { DialogContent, DialogFooter, DialogButton, DialogTitle} from 'react-native-popup-dialog';


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
            checkIn: false, 
        };
    }

    

applicablePopUp =  () => {
  const { navigation } = this.props;
     this.setState({ visible: true });
      this.setState({ checkIn: true });
    // alert('hii')
}

checkInFuc =  () => {
  if( this.state.checkIn == false ){
    return(
      <View style={styles.checkInLableBGStyle}>
          <Text style={styles.checkInLabelTextStyle}>
              CHECK IN
          </Text>
      </View> 
    );
  }

  else if( this.state.checkIn == true ) {
     return(
      <View style={styles.checkInLableAfterCheckingBGStyle}>
          <Text style={styles.checkInLabelTextStyle}>
              CHECK IN
          </Text>
      </View> 
    )
  }

}


render() {
    return (
      <View>
        <View style={styles.mainContainer}>
          <View style={styles.backArrowContainer}>
              <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                  <Image  style={styles.backArrowStyle}
                      source = {require('../../Assets/Icons/Back_White.png')}
                  />
              </TouchableOpacity>
          </View>

        <View style={styles.checkInPopUpMainContainer}>
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
              > 
              <DialogContent>
                <View style={styles.dialogContenetContainer}>
                  <TouchableOpacity   onPress={() => { this.setState({ visible: false });}}>  
                    <View style={styles.closeDialogCrossContainer}>
                        <Image style={styles.closeDialogCrossImgStyle}
                          source = {require('../../Assets/Icons/FAB_Close_Menu.png')}/>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.mapIconContainer}>
                    <Image style={styles.mapIconStyle}
                        source = {require('../../Assets/Icons/FAB_Close_Menu.png')}/>
                  </View>
                  <View style={styles.checkingInTextContainer}>
                    <Text style={styles.checkInTextStyle}>
                      You are Checking-In
                    </Text>
                  </View>
                  <View style={styles.storeNameContainer}>
                    <Text style={styles.storeNameTextStyle}>
                      Mangalam Store
                    </Text>
                  </View>
                  <View style={styles.confirmButtonMainContainer}>
                    <TouchableOpacity   onPress={() => { this.setState({ visible: false });}}>         
                      <View style={styles.confrimButtonBGStyle}>
                        <Text style={styles.confirmButtonTextStyle}>
                          CONFIRM
                        </Text>
                      </View>
                    </TouchableOpacity>      
                  </View>
                  <View style={{marginTop:hp('1')}}></View>
                </View>
              </DialogContent>
              </Dialog>
            </View>
 
          {/* <View style={styles.checkInLableBGStyle}>
            <Text style={styles.checkInLabelTextStyle}>
                CHECK IN
            </Text>
         </View> */}
         {this.checkInFuc()}
        </TouchableOpacity>

        <Image  style={styles.editIconStyle}
            source = {require('../../Assets/Icons/edit.png')}
        />    
    </View>

        </View>
        <View>
            {/* Header */}
            <View style = {styles.shopNameBG}>
                <Text style = {styles.shopNameTextStyle} >
                      Shop Name
                </Text>
                 <Text style = {styles.shopAddressTextStyle} >
                      Kothrud, Pune
                </Text> 
            </View>
           
        </View>   
        </View>    
    );
}
}


const styles = StyleSheet.create({

  mainContainer:{
    flexDirection:'row',
    backgroundColor: '#221818', 
    color: '#fff', 
    height:hp('8'),
  },

  backArrowContainer: {
    flexDirection:"column", 
    alignItems:'flex-start',
    flex:1,
    alignSelf:'center',
  },

  backArrowStyle:{
    marginLeft:wp('4'),
  },

  checkInPopUpMainContainer:{
    flexDirection:"row",
    alignSelf:'center',
  },

  dialogContenetContainer:{
    flexDirection:'column'
  },

  closeDialogCrossContainer: {
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },

  closeDialogCrossImgStyle:{
    alignSelf:'flex-end',
  },

  mapIconContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop:hp('-5'),
  },

  mapIconStyle:{
    alignSelf:'center',
  },

  checkingInTextContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  checkInTextStyle:{
    alignSelf:'center',  
    color:'black', 
    fontSize:RFValue(13),
    fontFamily: 'Proxima Nova',
    marginTop:hp('1')
  },

  storeNameContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  storeNameTextStyle:{
    alignSelf:'center',  
    color:'black', 
    fontSize:RFValue(13),
    fontFamily: 'Proxima Nova',
    fontWeight:'bold', 
    marginTop:hp('0.5'),
  },

  confirmButtonMainContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: hp('4'),
  },

  confrimButtonBGStyle:{
    backgroundColor:'#46BE50',
    borderRadius:wp('8'), 
    height:hp('7'), 
    width:wp('50'),
    alignItems:'center',
    justifyContent:'center',
  },

  confirmButtonTextStyle:{
    alignSelf:'center', 
    color:'#ffffff', 
    fontSize:RFValue(13),
    fontFamily: 'Proxima Nova',
    fontWeight:'bold',
  },

  checkInLableBGStyle:{
    backgroundColor: '#CC1167',
    justifyContent:'center',
    marginRight:hp('3'),
    borderColor: '#CC1167',
    height:hp('4'),
    width:wp('23'),
    borderRadius:wp('5'),
  },

  checkInLableAfterCheckingBGStyle:{
    backgroundColor: 'red',
    justifyContent:'center',
    marginRight:hp('3'),
    borderColor: '#CC1167',
    height:hp('4'),
    width:wp('23'),
    borderRadius:wp('5'),
  },

  checkInLabelTextStyle:{
    alignSelf:'center', 
    color:'#FFFFFF', 
    fontFamily:'Proxima Nova',
    fontSize:RFValue('12'),
    fontWeight: 'bold',
    padding:10,
  },

  editIconStyle:{
    marginRight:hp('2'), 
    height:hp('4'), 
    width:wp('6'),
  },

  shopNameBG:{ 
    backgroundColor: '#210305', 
  },

  shopNameTextStyle:{ 
    color:'#F8F4F4', 
    fontSize:RFValue(24), 
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold', 
    marginLeft: wp('6'),
     marginTop:hp('2'), 
  },

  shopAddressTextStyle:{ 
    color:'#FFFFFF', 
    fontSize:RFValue(11), 
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold', 
    marginLeft: wp('6'),
    marginTop:hp('1'),
    marginBottom:hp('5'), 
  },
  

});

