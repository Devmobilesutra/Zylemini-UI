import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity, ScrollView, TextInput, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import  {Dialog, DialogContent, DialogFooter, DialogButton, DialogTitle} from 'react-native-popup-dialog';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

import SublistExtended from './SublistExtended';
import SaveOrderButton from  '../../Components/Common/SaveOrderButton';
import DiscardOrderButton from  '../../Components/Common/DiscardOrderButton';
import EditInlineOnOrderPreview from './EditInlineOnOrderPreview';


export default class CreateNewOrderPreview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: '',
          collapsed:false,
        };
    }

static navigationOptions = {
    title: 'Order Preview',
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
            <TouchableOpacity   onPress={() =>Actions.CreateNewOrderSecond() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
    )    
}


applicablePopUp =  () => {
const { navigation } = this.props;
   this.setState({ visible: true });
  // alert('hii')
}

SchemesArrow(){
  if( this.state.collapsed == false){
    return(
        <View>
          <Image style={styles.sublistIconStyle} 
              source = {require('../../Assets/Icons/Add_white.png')}/>
        </View>
      )
  }
  else {
    return(
        <View>
          <Image style={styles.sublistIconStyle}  
                source = {require('../../Assets/Icons/minus_white.png')}/>
        </View>
      )
  }
}


    render() {
        const { navigation } = this.props;
        return (
          <View style = {{ flex: 10 }}>
            <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
            >
              <ScrollView
                 showsVerticalScrollIndicator={false}
              >

                 {/* Header */}
                <View style = {styles.container}>
                    <View style= {styles.totalOrderContainer}>
                        <Text  style = {styles.totalOrderValueText}>
                            TOTAL ORDER VALUE
                        </Text>
                        <Text  style = {styles.totalOrderValuesValueText} >
                            0
                        </Text>
                    </View>

                    <View style= {styles.orderDateContainer}>
                        <Text  style = {styles.orderDateText}>
                            ORDER DATE
                        </Text>
                      <View style= {styles.dateCalendarRowContainer}>
                            <Text  style = {styles.orderDatesDate}>
                                16/012020
                            </Text>
                            <TouchableOpacity>
                                <Image style={styles.calendarImg} 
                                    source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                            </TouchableOpacity>
                      </View>
                    </View>
                </View>

                {/* Store Name and History */}
                 <View style = {{ flex:0.1 }}>
                    <View style= {styles.storeInfoMainContainer}>
                        <View style= {styles.storeTextContainer}>
                            <Text  style = {styles.storeNameText}>
                                MANGALAM STORE
                            </Text>
                        </View>

                        <View style= {styles.historyTextContainer}>
                            <Text  style = {styles.historyText}>
                                HISTORY
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Dash Line */}
                <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
                </View>

                {/* Order Preview */}
                <View style = {{ flex:0.1 }}>
                    <View style= {styles.orderPreivewContainer}>
                        <View style= {styles.OrderPreviewTextContainer}>
                            <Text  style = {styles.orderPreviewText}>
                                Order Preview
                            </Text>
                        </View>

                        <View style= {styles.amountINRTextContainer}>
                            <Text  style = {styles.amountINRText}>
                                Amount in INR
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Order Search Result */}
                <View style={styles.orderSerchResultMainContainer}>
                    <Collapse 
                      onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                    >
                    <CollapseHeader style={styles.collapseHeaderStyle }>
                        <View style={ styles.brandNameContainer }>
                                        <Text style= {styles.brandNameTextContainer}>
                                        Name of Brand  Name of Brand  Name of Brand  Name of Brand  Name of Brand
                                        </Text>
                        </View>
                        <View style={styles.sublistExtendIconAmountContainer}>
                                        <Text style= {styles.sublistAmountTextStyle}>
                                        20,000
                                        </Text>
                                        <View>
                                        {this.SchemesArrow()}
                                        </View>
                                        {/* <Image style={styles.sublistIconStyle} 
                                              source = {require('../../Assets/Icons/Add_white.png')}/> */}
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <EditInlineOnOrderPreview navigation={navigation}/>
                        </ListItem>
                    </CollapseBody>
                    </Collapse>  
                </View>

                {/* Order Search Result */}
                <View style={styles.orderSerchResultMainContainer}>
                    <Collapse 
                      onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                    >
                    <CollapseHeader style={styles.collapseHeaderStyle }>
                        <View style={ styles.brandNameContainer }>
                                        <Text style= {styles.brandNameTextContainer}>
                                        Name of Brand  Name of Brand  Name of Brand  Name of Brand  Name of Brand
                                        </Text>
                        </View>
                        <View style={styles.sublistExtendIconAmountContainer}>
                                        <Text style= {styles.sublistAmountTextStyle}>
                                        20,000
                                        </Text>
                                        <View>
                                        {this.SchemesArrow()}
                                        </View>
                                        {/* <Image style={styles.sublistIconStyle} 
                                              source = {require('../../Assets/Icons/Add_white.png')}/> */}
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <EditInlineOnOrderPreview navigation={navigation}/>
                        </ListItem>
                    </CollapseBody>
                    </Collapse>  
                </View>

                 {/* Dash Line Below Order Preview*/}
                <View style={styles.dashLineContainerBelowOrderPreview}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
                </View>

                {/* Applicable Schemes */}
                 <View style={styles.applicableSchemesMainContainer}>
                    <View style={styles.applicableSchemesCardContainer}>
                          <View style={styles.applicableSchemesIconLabelContainer}>
                                <View style={styles.roundedtext}></View>

                                <Text style= {styles.appliSchemesTextStyle}>
                                     Applicable Schemes( 12 )
                                </Text>
                          </View>
                          <View style={styles.appliSchemesArrowContainer}>
                                    <TouchableOpacity  onPress={this.applicablePopUp.bind(this)}>
                                      <View >
                                            {/* <Button
                                                title="Show Dialog"
                                                onPress={() => {
                                                this.setState({ visible: true });
                                                }}
                                            /> */}
                                            <Dialog
                                                visible={this.state.visible}
                                                onTouchOutside={() => {
                                                this.setState({ visible: false });
                                                }}
                                                 width={wp('90')}
                                                //  height={hp('50')}
                                                // dialogTitle={
                                                //     <DialogTitle
                                                //       title="Applicable Schemes"
                                                //       style={{
                                                //         // backgroundColor: '#F7F7F8',
                                                //          color:'#3955CB',
                                                //       }}
                                                //       hasTitleBar={false}
                                                //       // align="left"
                                                //     />
                                                //   }
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

                            <Image style={styles.appliSchemesArrowStyle} 
                                source = {require('../../Assets/Icons/right_arrow_blue.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                 </View>

                {/* Dash Line Below Applicable Schemes*/}
                <View style={styles.dashLineContainerBelowApplicableSchemes}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
                </View>

                {/* Expected Delivery Date */}
                 <View style={styles.expectedDeliveryDateContainer}>
                    <Text style= {styles.expectedDeliveryDateTextStyle} >
                         EXPECTED DELIVERY DATE
                    </Text>
                </View>

                <View style={styles.expectedDeliveryDateCardMainContainer}>
                    <View style={styles.expectedDeliveryDateCardStyle}>
                          <View style={styles.expectedDeliDateSelfContainer}>
                                <Text style= {styles.expectedDeliDateTextStyle}>
                                     16 Jan 2020
                                </Text>
                          </View>
                          <View style={styles.expectedDeliveryDateCalendarContainer}>
                                <TouchableOpacity>
                                    <Image style={styles.expecDeliCalenderStyle} 
                                                source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                                </TouchableOpacity>
                        </View>
                    </View>
                 </View>

                 {/* Remarks */}
                 <View style={styles.remarkMainContainer}>
                    <Text style= {styles.remarkTextStyle} >
                         REMARKS
                    </Text>
                </View>
                <View style={styles.remarkTextViewContainer}>
                    <TextInput
                        //multiline= {}
                        style={styles.remarkTextInputStyle}
                        // onChangeText={text => onChangeText(text)}

                     />
                </View>

                <View style={{marginVertical:hp('2')}}></View>

              </ScrollView>

              {/* Confirm Order Button */}
               {/* <View>
                    <TouchableOpacity >
                        <ConfirmOrderButton/>
                    </TouchableOpacity>
                </View> */}

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity >
                        <SaveOrderButton/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <DiscardOrderButton/>
                    </TouchableOpacity>
                </View>
              </ImageBackground>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container : {
    flex:5, 
    flexDirection:'row',
    backgroundColor: '#210305'
  },
  roundedtext: {
      width: 25,
      height: 25, 
            // flexWrap:"wrap",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25 / 2,
      backgroundColor: "#EAA304",
      borderColor: '#EAA304',
      borderWidth: 3,
      marginLeft:wp('5')
    },

   totalOrderContainer: {
      flex:0.5, 
      flexDirection:'column', 
      alignItems: 'flex-start',
  },

  totalOrderValueText: {
      color: '#796A6A', 
      fontSize: wp('2.5%'),
      fontWeight: 'bold',
      marginTop: hp('3%'), 
      fontFamily: 'Proxima Nova', 
      marginLeft: wp('5%'),
  },
  
  totalOrderValuesValueText: {
      color: 'white', 
      fontSize: wp('3%'), 
      marginTop: hp('1%'), 
      marginLeft: wp('5%'),
      fontFamily: 'Proxima Nova', 
      marginBottom:hp('2')
  },

  orderDateContainer: {
      flex:0.5, 
      flexDirection:'column', 
      alignItems: 'flex-end',
  },

  orderDateText: {
      color: '#796A6A', 
      fontSize: wp('2.5%'), 
      fontWeight: 'bold', 
      marginTop: hp('3%'), 
      marginRight: wp('19%'), 
      fontFamily: 'Proxima Nova',
  },

  dateCalendarRowContainer: {
       flex:0.5, 
       flexDirection:'row', 
       alignItems: 'flex-end',
  },

  orderDatesDate: {
       color: '#796A6A', 
       fontSize: wp('3%'), 
       marginTop: hp('1%'), 
       marginRight: wp('5%'), 
       fontFamily: 'Proxima Nova', 
       marginBottom:hp('2') ,
  },

  calendarImg: {
      marginRight: wp('10'),
       marginTop: hp('1%'), 
       marginBottom:hp('2') ,
  },

   storeInfoMainContainer: {
      flex:1, 
      flexDirection:'row',
  },

  storeTextContainer: {
    flex: 0.5, 
    flexDirection:'column', 
  },

  historyTextContainer: {
    flex: 0.5, 
    flexDirection:'column', 
    alignItems:'flex-end',
  },

  storeNameText: {
      color: '#796A6A', 
      fontSize: wp('3.5%'), 
      fontWeight: 'bold', 
      marginTop: hp('3%'), 
      marginLeft: wp('6%'), 
      fontFamily: 'Proxima Nova',
  },

  historyText: {
      color: '#3955CB', 
      fontSize: wp('3%'), 
      fontWeight: 'bold', 
      marginTop: hp('3%'), 
      fontFamily: 'Proxima Nova', 
      marginRight: wp('9%'),
  },

    dashLineContainer: {
      flex:1, 
      marginTop:hp('2'), 
      alignContent: 'center', 
      alignItems: 'center',
  },

  dashLineStyle: {
      width:wp('89'), 
      height:hp('1'), 
      color: '#ADA2A2',
  },

/////////////

  orderPreivewContainer: {
      flex:1, 
      flexDirection:'row',
  },

    OrderPreviewTextContainer: {
    flex: 0.5, 
    flexDirection:'column', 
  },

  orderPreviewText: {
      color: '#796A6A', 
      fontSize: wp('3%'), 
      fontWeight: 'bold', 
      marginTop: hp('1%'), 
      marginLeft: wp('6%'), 
      fontFamily: 'Proxima Nova',
  },

  
  amountINRTextContainer: {
    flex: 0.5, 
    flexDirection:'column', 
    alignItems:'flex-end',
    justifyContent: 'center',
  },

  amountINRText: {
      color: '#796A6A', 
      fontSize: wp('2%'), 
      fontWeight: 'bold', 
      marginTop: hp('1%'), 
      fontFamily: 'Proxima Nova', 
      marginRight: wp('9%'),
  },

  orderSerchResultMainContainer: {
    flex:1,
    marginVertical: wp('3'),
  },

  collapseHeaderStyle: {
    alignItems:'center' ,
    flexDirection:'row',
    backgroundColor: '#362828',
    borderColor: '#E6DFDF',
    borderRadius: wp('2'), 
    height: hp('9'),
    width: wp('88'),
    borderWidth: hp('0.2'), 
    marginHorizontal: wp('4'),
    alignSelf:'center',
  },
 
  brandNameContainer: { 
    flex:2.5,                                                               //28-03
    alignItems: 'flex-start',
 },

  brandNameTextContainer: {
    marginLeft:wp('5'),
    fontFamily: 'Proxima Nova', 
    fontSize: wp('3'), 
    color:'#FFFFFF',
    fontSize:RFValue(13),
    justifyContent:'center',
  },

  sublistExtendIconAmountContainer: { 
    flex:1, 
    alignItems: 'flex-end', 
    flexDirection:'row', 
    justifyContent:'flex-end',
  },

  sublistAmountTextStyle: {
    marginRight:wp('3'),
    fontFamily: 'Proxima Nova', 
    fontSize:RFValue(13),
    color:'#FFFFFF',
    alignSelf:'center',
  },

  sublistIconStyle: { 
    marginRight:wp('4') ,
    alignSelf:'center',
    height:hp('4'),
    width:wp('8'),
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

  applicableSchemesMainContainer: {
    flex:1,
    marginVertical: wp('4')
  },

  applicableSchemesCardContainer: {
    alignItems:'center' ,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6DFDF',
    borderRadius: wp('2'), 
    height: hp('9'), 
    width: wp('88'),
    borderWidth: hp('0.2'), 
    marginHorizontal: wp('4'),
    alignSelf:'center',
  },

  applicableSchemesIconLabelContainer:{ 
    flex:1, 
    alignItems: 'center',
    flexDirection: 'row',     
    justifyContent: 'center',
    alignItems: 'center',
  },

  appliSchemesTextStyle: {
    marginLeft:wp('2'),
    fontFamily: 'Proxima Nova', 
    fontSize: wp('3'), 
    color:'#3955CB',
  },

  appliSchemesArrowContainer: { 
    flex:1, 
    alignItems: 'flex-end', 
    flexDirection:'row', 
    justifyContent:'flex-end', 
    alignItems: 'center',
  },

  appliSchemesArrowStyle: { 
    marginRight:wp('4'), 
  },

  expectedDeliveryDateContainer: {
    flex:1, 
    alignItems:'flex-start',
    marginHorizontal: hp('3'),
    marginVertical: wp('4'),
  },

  expectedDeliveryDateTextStyle: {
    color:'#8C7878',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    fontSize: wp('3%'), 
  },

  expectedDeliveryDateCardMainContainer: {
    flex:1,
    marginVertical: wp('-2'),
  },

  expectedDeliveryDateCardStyle: {
    alignItems:'center' ,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6DFDF',
    borderRadius: wp('2'), 
    height: hp('9'), 
    width: wp('88'),
    borderWidth: hp('0.2'), 
    marginHorizontal: wp('4'),
    alignSelf:'center',
  },

  expectedDeliDateSelfContainer: { 
    flex:1, 
    alignItems: 'center', 
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  expectedDeliDateTextStyle: {
    marginLeft:wp('4'),
    fontFamily: 'Proxima Nova', 
    fontSize: wp('3'), 
    color:'#8C7878'
  },

  expectedDeliveryDateCalendarContainer: { 
    flex:1, 
    alignItems: 'flex-end', 
    flexDirection:'row', 
    justifyContent:'flex-end', 
    alignItems: 'center',
  },

  expecDeliCalenderStyle: { 
    marginRight:wp('5'), 
    tintColor:'#8C7878', 
    height:hp('5'), 
    width:wp('6'),
  },

  remarkMainContainer: {
    flex:1, 
    alignItems:'flex-start', 
    marginHorizontal: hp('3'),
    marginVertical: wp('8'),
    
  },

  remarkTextStyle: {
    color:'#8C7878',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    fontSize: wp('3%'), 
  },

  remarkTextViewContainer: {
    flex:1, 
    marginVertical:hp('-3'), 
    marginHorizontal:wp('5'),
    alignSelf:'center',
    // padding:1,
  },

  remarkTextInputStyle: { 
    height: hp('15'),
    width:wp('88'), 
    borderColor: '#E6DFDF', 
    borderWidth: 1, 
    borderRadius:wp('2') , 
    backgroundColor: '#ffffff',
    padding:5,
  },

  dashLineContainerBelowOrderPreview: {
      flex:1, 
      marginTop:hp('4'), 
      alignContent: 'center', 
      alignItems: 'center',
  },

  dashLineContainerBelowApplicableSchemes: {
      flex:1, 
      marginTop:hp('2'), 
      alignContent: 'center', 
      alignItems: 'center',
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

 


})