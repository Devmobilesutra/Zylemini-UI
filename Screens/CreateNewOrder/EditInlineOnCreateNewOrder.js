import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';


const data = [{
    value: 'Box',
    }, {
    value: 'Unit',
    }, 
];


export default class EditInlineOnCreateNewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { navigation } = this.props;
        return (

        <View style={styles.container}> 
        {/* <ScrollView
                 showsVerticalScrollIndicator={false}
              > */}
            <View style={styles.oredrFreeMainContainer}>
                <View style= {styles.orderFreeColumnContainer}>
                    <Text style={styles.orderTextStyle}>
                        Order
                    </Text>
                    <Text style={styles.freeTextStyle}>
                        Free
                    </Text>
                </View>

                <View style= {styles.boxColumnContainer}>
                    <Text style={styles.boxTextStyle}>
                        Box
                    </Text>
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.boxTextBoxStyle}
                    />
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.boxTextBoxStyle}
                    />
                </View>

                <View style= {styles.unitColumContainer}>
                    <Text style={styles.unitTextStyle}>
                        Unit
                    </Text>
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.unitTextBoxStyle}
                    />
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.unitTextBoxStyle}
                    />
                </View>
            </View>

            {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View>
    
            <View  style={styles.rateContainer}>
                <View style= {styles.rateColumnContainer}>
                    <Text style={styles.rateTextStyle}>
                        Rate Per
                    </Text>
            </View>

            <View style= {styles.boxUnitDropContainer}>
                {/* <ModalDropdown
                    showsVerticalScrollIndicator= {false}
                    onSelect={(index, value) => { this.setState({ selected: value }) }}
                    options={['Box', 'Unit']}
                    defaultValue= 'Box'
                    dropdownTextStyle={styles.dropDownTextStyle} 
                    textStyle={styles.dropDownTextsStyle}
                    dropdownStyle={styles.dropdownStyle}
                    style={styles.dropDownStyless}
                /> */}
                 <Dropdown
                        // value={'Select'}
                        placeholder= "Box"
                        itemCount = {2} 
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('30')}}                        //28-03
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        // fontSize = '10'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-2}
                        dropdownOffset={{top:8, left:18,}}
                        rippleOpacity={0}
                        // style={styles.dropDownStyless}
                    />
            </View>
                    
            <View style= {styles.rateTextBoxContainer}>
                <TextInput
                    keyboardType= "numeric"
                    placeholder="0"
                    style={styles.rateTextBoxStyle}
                 />
            </View>
            </View>

            {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View> 

            <View style = {{ flex:0.1 }}>
                <View style= {styles.grossMainContainer}>
                    <View style= {styles.grossTextContainer}>
                        <Text  style = {styles.grossTextStyle}>
                            Gross Amount
                        </Text>
                    </View>

                    <View style= {styles.grossTextBoxContainer}>
                        <TextInput
                            keyboardType= "numeric"
                            placeholder="0"
                            style={styles.grossTextBoxStyle}
                        />
                    </View>
                </View>
            </View>

            <View  style={styles.discountMainContainer}>
                <View style= {styles.discountColumnContainer}>
                    <Text style={styles.discountTextStyle}>
                        Discount In
                    </Text>
                </View>

                <View style= {styles.discountDropContainer}>
                   {/* <ModalDropdown
                        showsVerticalScrollIndicator= {false}
                        onSelect={(index, value) => { this.setState({ selected: value }) }}
                        options={['Box', 'Unit']}
                        defaultValue= ' % Percent'
                        dropdownTextStyle={styles.discountDropdownTextStyle}/ 
                        textStyle={styles.discountDropTextStyle}
                        dropdownStyle={styles.discountDropDownStyle}
                        style={styles.discountDropStyle}
                    /> */}

                    <Dropdown
                        // value={'Select'}
                        placeholder= "% Percent"
                        itemCount = {2} 
                        containerStyle={styles.dropDownContainerDiscount}
                        pickerStyle={{width:wp('30')}}                        //28-03
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        // fontSize = '10'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-2}
                        dropdownOffset={{top:8, left:18,}}
                        rippleOpacity={0}
                    />

                </View>
                    
                <View style= {styles.discountTextBoxContainer}>
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.discountTextBoxStyle}
                        />
                </View>
            </View>

              {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View> 


            <View style={styles.applicableMainContainer}>
                <View style={styles.roundedtext}></View>
                <Text style= {styles.applicableTextStyle}>
                    Applicable Schemes :
                </Text>
            </View>

              {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View> 

            <View style={styles.applyDeleteMainContainer}>
                <View style={styles.applyImgContainer}>
                    <Image style={styles.applyImgStyle} 
                                source={require('../../Assets/Icons/apply_green.png')}
                    /> 
                </View>
 
                <View style={styles.applyTextContainer}>
                    <Text style={styles.applyTextStyle}> 
                        APPLY 
                    </Text>
                </View>
               
                <View style={styles.deleteImgContainer}>
                    <Image style={styles.deleteImgStyle} 
                                source={require('../../Assets/Icons/delete_red.png')}
                    /> 
                </View>
                <View style={styles.deleteTextContainer}>
                    <Text style={styles.deleteTextStyle}> 
                        DELETE
                    </Text>
                </View>
                
            </View>
        {/* </ScrollView> */}
        </View>
        );
    }
}


const styles = StyleSheet.create({

 container: {
    flex:1,
 },

 oredrFreeMainContainer: { 
     flex:1, 
     flexDirection:'row', 
 },

 orderFreeColumnContainer: { 
      flex:0.5, 
      flexDirection:'column', 
      alignItems:'flex-start', 
      marginHorizontal:wp('3')
 },

 orderTextStyle: { 
      marginTop:hp('5'), 
      color: '#796A6A', 
      fontSize: wp('3%'), 
      fontFamily: 'Proxima Nova', 
 },

 freeTextStyle: { 
      marginTop:hp('1'), 
      color: '#796A6A', 
      fontSize: wp('3%'), 
      fontFamily: 'Proxima Nova',
      marginTop:hp('4')
 },

 boxColumnContainer: { 
      flex:0.5, 
      flexDirection:'column', 
      alignItems:'flex-start', 
 },

 boxTextStyle: { 
      color: '#796A6A', 
      fontSize: wp('3%'), 
      fontFamily: 'Proxima Nova',
      marginHorizontal:wp('2'), 
      fontWeight: 'bold',
 },

 boxTextBoxStyle: {
      height: hp('5.5'), 
      width:wp('30'), 
      borderColor: '#E6DFDF', 
      borderWidth: 1, 
      borderRadius:wp('1'),
      backgroundColor: '#ffffff',
      marginLeft:wp('-10'), 
      marginRight:wp('10'),  
      marginTop:hp('1'),
      textAlign: 'center',
 },

 unitColumContainer: { 
    flex:0.5, 
    flexDirection:'column', 
 },

 unitTextStyle: { 
    color: '#796A6A', 
    fontSize: wp('3%'), 
    fontFamily: 'Proxima Nova', 
    marginHorizontal:wp('9'),
    fontWeight: 'bold',  
 },

 unitTextBoxStyle: { 
    height: hp('5.5'), 
    width:wp('30'), 
    borderColor: '#E6DFDF', 
    borderWidth: 1, 
    borderRadius:wp('1'),
    backgroundColor: '#ffffff', 
    marginLeft:wp('-3'), 
    marginRight:wp('10'),   
    marginTop:hp('1'), 
    textAlign: 'center',
 },

 rateContainer: { 
    flex:0.7, 
    flexDirection:'row', 
    marginTop:hp('1'),
 },

 rateColumnContainer: { 
    flex:0.4, 
    flexDirection:'column', 
    alignItems:'flex-start', 
    marginHorizontal:wp('2'),
 },

 rateTextStyle: {
    marginTop:hp('2'), 
    color: '#796A6A', 
    fontSize: wp('3%'), 
    fontFamily: 'Proxima Nova',
 },

 boxUnitDropContainer: { 
    flex:0.5, 
    flexDirection:'column', 
    alignItems:'flex-start', 
 },

 dropDownContainer : {
      borderColor: '#E6DFDF', 
      borderRadius: wp('1'), 
      width: wp('30'), 
      height: hp('5.5'),
      marginTop: hp('0'), 
      marginHorizontal: wp('1'),
      backgroundColor: '#FFFFFF',
      paddingHorizontal:hp('1'), 
      alignSelf:'center',
      flex: 1, 
      marginVertical: 10, 
      borderWidth:wp('0.5'), 
      marginRight:wp('8'),
       borderWidth:hp('0.15'), 
  },

//  dropDownTextStyle: { 
//     backgroundColor: '#fff', 
//     fontSize: wp('3'), 
//     color:'black', 
//  },

//  dropDownTextsStyle: { 
//     fontSize: wp('3'), 
//     // color:'gunmetal', 
//     alignSelf: 'flex-start', 
//     marginLeft: wp('3'), 
//  },

//  dropdownStyle: { 
//     flex: 1, 
//     width: wp('30'), 
//     height:hp('11'), 
//     marginVertical: 10, 
//     borderWidth:wp('0.5'), 
//     borderColor: '#E6DFDF', 
//  },

 dropDownStyless: { 
    flex: 1, 
    width: wp('30'), 
    height:hp('5'), 
    backgroundColor: 'white', 
    justifyContent: 'center',
    marginLeft:wp('-6'),  
    borderColor: '#E6DFDF', 
    borderWidth: 1, 
    borderRadius:wp('1'),
 },

 rateTextBoxContainer: { 
    flex:0.5, 
    flexDirection:'column', 
    alignItems:'flex-end',
 },

 rateTextBoxStyle: { 
    height: hp('5.5'), 
    width:wp('30'), 
    borderColor: '#E6DFDF', 
    borderWidth: 1, 
    borderRadius:wp('1'),
    backgroundColor: '#ffffff',
    marginRight:wp('-2'),
    marginTop:hp('0'), 
    textAlign: 'center',
 },

 dashLineContainer: {
      flex:1, 
      marginTop:hp('3'), 
      alignContent: 'center', 
      alignItems: 'center',
  },

 dashLineStyle: {
      width:wp('89'), 
      height:hp('1'), 
      color: '#ADA2A2',
 },

 grossMainContainer: {
      flex:1, 
      flexDirection:'row',
 },

 grossTextContainer: {
    flex: 0.5, 
    flexDirection:'column', 
 },

 grossTextStyle: {
      color: '#796A6A', 
      fontSize: wp('3'), 
      marginTop: hp('2'), 
      marginLeft: wp('0.5'), 
      fontFamily: 'Proxima Nova',
 },

 grossTextBoxContainer: {
      flex: 0.5, 
      flexDirection:'column', 
      alignItems:'flex-end',
 },

 grossTextBoxStyle: { 
      height: hp('5.5'), 
      width:wp('30'), 
      borderColor: '#E6DFDF', 
      borderWidth: 1, 
      borderRadius:wp('1'),
      backgroundColor: '#ffffff',
      marginRight:wp('-2'),
      marginTop:hp('1'),
      textAlign: 'center',
 },

 discountMainContainer: { 
      flex:0.5, 
      flexDirection:'row', 
      marginTop:hp('2'),
 },

 discountColumnContainer: { 
      flex:0.4, 
      flexDirection:'column', 
      alignItems:'flex-start', 
      marginHorizontal:wp('1'),
 },

 discountTextStyle: {
      marginTop:hp('1'), 
      color: '#796A6A', 
      fontSize: wp('3%'), 
      fontFamily: 'Proxima Nova', 
      marginTop:hp('2'),
 },

 discountDropContainer: { 
      flex:0.5, 
      flexDirection:'column', 
      alignItems:'flex-start', 
 },

 
 dropDownContainerDiscount : {
      flex: 1, 
      width: wp('30'),  
      borderColor: '#E6DFDF', 
      borderRadius: wp('1'), 
      height: hp('5.5'),
      marginTop: hp('0'), 
      marginHorizontal: wp('1'),
      backgroundColor: '#FFFFFF',
      paddingHorizontal:hp('1'), 
      alignSelf:'center',
      marginVertical: 10, 
      borderWidth:wp('0.5'), 
      marginRight:wp('6.5'),
      borderWidth:hp('0.15'), 
  },

//  discountDropdownTextStyle: { 
//       backgroundColor: '#fff',
//       fontSize: wp('3'), 
//       color:'black',
//  },

//  discountDropTextStyle: {
//       fontSize: wp('3'), 
//     //   color:'gunmetal', 
//       alignSelf: 'flex-start',
//       marginLeft: wp('3'),
//  },

//  discountDropDownStyle: { 
//       flex: 1, 
//       width: wp('30'), 
//       height:hp('11'), 
//       marginVertical: 10, 
//       borderWidth:wp('0.5'), 
//       borderColor: '#E6DFDF', 
//  },

 discountDropStyle: { 
      flex: 1, 
      width: wp('30'), 
      height:hp('5'), 
      backgroundColor: 'white', 
      justifyContent: 'center',
      marginLeft:wp('-4'),  
      borderColor: '#E6DFDF', 
      borderWidth: 1, 
      borderRadius:wp('1'),
 },

 discountTextBoxContainer: { 
      flex:0.5, 
      flexDirection:'column', 
      alignItems:'flex-end',
 },

 discountTextBoxStyle: { 
      height: hp('5.5'), 
      width:wp('30'), 
      borderColor: '#E6DFDF',
      borderWidth: 1, 
      borderRadius:wp('1'),
      backgroundColor: '#ffffff', 
      marginRight:wp('-2'),
      marginTop:hp('0'), 
      textAlign: 'center',
 },

 applicableMainContainer: { 
      flex:1, 
      marginTop:hp('2'), 
      alignItems:'flex-start', 
      flexDirection: 'row',
      marginLeft:wp('-4'),
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

 applicableTextStyle: {
      marginLeft:wp('4'),
      fontFamily: 'Proxima Nova', 
      fontSize: wp('3'), 
      color:'#3955CB',
      marginTop:hp('0.7'),
 },

 applyDeleteMainContainer: { 
      flex:1, 
      marginTop:hp('2'), 
      flexDirection: 'row', 
 },

 applyImgContainer: {
      flex: 1, 
      flexDirection: 'column', 
      alignItems:'flex-start',
      justifyContent:'center',
 },

 applyImgStyle: { 
      marginLeft:wp('10'), 
      height:hp('3'),
      width:wp('4'),
 },

 applyTextContainer: {
      flex: 1,
      flexDirection: 'column', 
      alignItems:'flex-start',
      justifyContent:'center', 
 },

 applyTextStyle: { 
      fontFamily: 'Proxima Nova',
      color:'#2FC36E', 
      fontWeight:'bold', 
      marginLeft:wp('-1'), 
 },

 deleteImgContainer: {
      flex: 1,
      flexDirection: 'column', 
      alignItems:'flex-end', 
      justifyContent:'center',
      marginRight:wp('7',) 
 },

 deleteImgStyle: {  
      height:hp('3'), 
      width:wp('4'),
 },

 deleteTextContainer: {
      flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
 },

 deleteTextStyle: { 
      fontFamily: 'Proxima Nova',
      color:'#E23333', 
      fontWeight:'bold',
      marginLeft:wp('-4'),
 },



  


})