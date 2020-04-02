import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dash from 'react-native-dash';
import { Dropdown } from 'react-native-material-dropdown';
import { Card } from 'react-native-elements';
import { FAB, Searchbar} from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import {Calendar } from 'react-native-calendars';
import { Actions } from 'react-native-router-flux';

import NextButton from '../../Components/Common/NextButton';
import DropdownCommon from '../../Components/Common/DropdownCommon';
import SublistExtended from './SublistExtended';



const data = [{
    value: 'Route 1',
    }, {
    value: 'Route 2',
    }, {
    value: 'Route 3',
    }, {
    value: 'Route 4',
}];

export default class CreateNewOrderSecond extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             collapsed:false,
             productChoose: 'false',
             isCollapsed: false,
             collaseColor: '#FFFFFF'
         };
    }

    static navigationOptions = {
    title: 'Create New Order',
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
            <TouchableOpacity   onPress={() =>Actions.CreateNewOrderFirst() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
     )    
    }

    // toggle(){
    //     if(this.state.collapsed == false){
    //         this.setState({collapsed:true})
    //     }
    //     else if(this.state.collapsed == true){
    //         this.setState({collapsed:false})
    //     }
    // }

    SchemesArrow(){
        if( this.state.collapsed == false){
            return(
                <View>
                <Image style={styles.downSublistArrowStyle} 
                    source = {require('../../Assets/Icons/Add.png')}/>
                </View>
            )
        }
        else {
             return(
                <View>
                <Image style={styles.downSublistArrowStyle} 
                    source = {require('../../Assets/Icons/minus_white.png')}/>
                </View>
            )
        }
    }



    searchResult(){
        const { navigation } = this.props;
        if( this.state.productChoose == 'true' ){
        return(
            <View>
                <View style={styles.searchResultContainer}>
                    <Text style= {styles.searchResultTextStyle} >
                        Search Results
                    </Text>
                </View>
                               
                <View style={styles.searchResultsResulContainer}>
                
                    <Collapse 
                        //isCollapsed={this.state.collapsed} 
	                    onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                        // onToggle={this.toggle()}
                    >

                    <CollapseHeader style={styles.collapseHeaderStyle}>
                        <View style={styles.nameOfBrandContainer}>
                                        <Text style= {styles.nameOfBrandTextStyle}>
                                        Name of Brand Name of Brand  Name of Brand Name of Brand  Name of Brand  Name of Brand 
                                        </Text>
                        </View>
                        <View style={styles.schemesIconContainer}>
                                         <View style={styles.roundedtext}></View>
                        </View>
                        <View style={styles.schemesDownArrowContainer}>
                                        {/* <Image style={styles.downSublistArrowStyle} 
                                                   source = {require('../../Assets/Icons/Add.png')}/> */}
                               {this.SchemesArrow()}
                        </View>  
                       
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <SublistExtended navigation={navigation}/>
                        </ListItem>
                    </CollapseBody>
                    </Collapse>  
                </View>
            </View>
           );
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
                            <TouchableOpacity >
                                <Image style={styles.calendarImg} 
                                    source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                            </TouchableOpacity>
                      </View>
                    </View>
                </View>

                {/* Store Name Id and History */}
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

                <View style= {{ flexDirection:'row' }}>
                     <Text  style = {styles.storeIdText}>
                        Store ID :
                    </Text>

                     <Text  style = {styles.storeIdStyle}>
                         0122
                    </Text>
                </View>
                </View>

                {/* Dash Line */}
                <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
                </View>

                <View style = {styles.textDropdownContainer}>
                    <Text style = {styles.dropdownheadingTitleText}>CHOOSE PRODUCT</Text>
                    <Searchbar
                          style={styles.searchbarContainerStyle}
                          theme={false}
                          icon= {false}
                          placeholder="Search"
                          onChangeText={ query => { this.setState({ productChoose: 'true' });}}
                        //   value={firstQuery}
                    />
                </View>

                {this.searchResult()}


              </ScrollView>
              

                {/* Filter Button */}
                <View style = {styles.filterButtonContainer}>
                    <FAB
                        style={styles.fab}
                        color="#ffffff"
                        onPress={() => this.props.navigation.navigate('FilterPage')}
                        icon=  "filter-variant"

                    />
                    
            </View>
              {/* Next Button */}
               <View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('CreateNewOrderPreview')}>
                        <NextButton/>
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

  storeIdText: {
      color: '#796A6A', 
      fontSize: wp('2%'), 
      fontWeight: 'bold', 
      marginTop: hp('1%'), 
      marginLeft: wp('6%'), 
      fontFamily: 'Proxima Nova'
  },

  storeIdStyle: {
      color: '#796A6A', 
      fontSize: wp('2%'), 
      marginTop: hp('1%'),
      marginLeft: hp('2%'),
      fontFamily: 'Proxima Nova', 
      alignContent: 'flex-end',
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

  textDropdownContainer : {
      flex: 1,
      alignItems: 'flex-start',
      marginTop: hp('2'),
    //   marginVertical: hp('3'),
      marginHorizontal: wp('4'),
  },

  dropdownheadingTitleText : {
      fontSize: wp('3'), 
      color: '#796A6A',
      fontWeight: 'bold',
      fontFamily:'Proxima Nova',
      marginLeft: wp('1'),
      marginVertical: wp('1'),
  },

  searchbarContainerStyle: {
      height:hp('9'),
      width:wp('88'),
      borderColor: '#E6DFDF',
      borderWidth: wp('0.4'),
      borderRadius: wp('2'),
      marginTop: hp('1'),
      alignSelf:'center',
      elevation: 0,    
  },


   filterCircleColor: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
      backgroundColor: '#CC1167',
      padding: 10,
      alignItems:'center',
      justifyContent: 'center',
      marginVertical: hp('2'),
      marginHorizontal: wp('4'),
       resizeMode: 'contain',

  },

  filterImageStyle: {
      height:hp('4'),
      width:wp('7'),
  },

  dropDownStyle: {
      width: wp('90'),
    //   backgroundColor: 'white',

  },

  searchResultContainer: {
    flex:1, 
    alignItems:'flex-start', 
    marginHorizontal: hp('3'),
    marginTop: wp('2'),
    marginTop: hp('3'),
  },

  searchResultTextStyle: {
    color:'#8C7878',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    fontSize:RFValue(11), 
  },

  searchResultsResulContainer: {
    flex:1,
    marginTop: wp('4')
  },

  collapseHeaderStyle: {
    alignItems:'center' ,
    alignSelf:'center',
    flexDirection:'row',
    backgroundColor:  '#ffffff',
    borderColor: '#E6DFDF',
    borderRadius: wp('2'), 
    height: hp('9'), 
    width: wp('88'),
    borderWidth: hp('0.2'), 
    // marginHorizontal: wp('4'),
  },

  nameOfBrandContainer: { 
    flex:3,                                                                                  //28-03
    alignItems: 'flex-start',
  },

  nameOfBrandTextStyle: {
    marginLeft:wp('5'),
    fontFamily: 'Proxima Nova', 
    fontSize:RFValue(13), 
    color:'#362828'
  },

  schemesIconContainer: { 
    flex:1,                                                                                 //28-3
    alignItems: 'flex-end', 
    flexDirection:'row',
    //marginRight: wp('-4')
  },

  schemesDownArrowContainer: {
    // marginRight:wp('6'),
  },

  schemesIconStyle: { 
    marginLeft: wp('27'), 
  },

roundedtext: {
      width: 18,
      height: 18, 
    //flexWrap:"wrap",                                                  //28-03
    //   justifyContent: 'center',
    //   alignItems: 'center',
      borderRadius: 18 / 2,
      backgroundColor: "#EAA304",
      borderColor: '#EAA304',
      borderWidth: 3,
    marginLeft: wp('12'),                                               //28-03                                                                              
},

  downSublistArrowStyle: { 
    // marginLeft: wp('2'), 
    height:hp('4'),
    width:wp('7'),
    marginRight: wp('4'),
  },

  filterButtonContainer: {
    alignItems:'flex-end',
  },



   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#CC1167",
  },



 
});