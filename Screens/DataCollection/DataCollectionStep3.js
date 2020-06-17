import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground,
                FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

import EditInLineDataCollectionPreview from './EditInLineDataCollectionPreview';


const data = [{
    value: 'Box',
    }, {
    value: 'Unit',
    }, 
];


export default class DataCollectionStep3 extends Component {
constructor(props) {
    super(props);
    this.state = {
        visible: '',
        collapsed:false,
    };
}

static navigationOptions = {
  title: 'Data Collection : Step 3/3',
  color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff',
        fontSize: RFValue(15),
    },

    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.DataCollectionStep2() }>  
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

      {/* Store Name Id and History */}
      <View style = {{ flex:0.1 }}>
        <View style= {styles.storeInfoMainContainer}>
          <View style= {styles.storeTextContainer}>
            <Text  style = {styles.storeNameText}>
                MANGALAM STORE
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

      {/* search results */}
      <View style= {styles.searchResultTextRowContainer}>
        <View style= {styles.searchResultTextColContainer}>
          <Text  style = {styles.searchResultText}>
            Search Results
          </Text>
        </View>

        <View style= {styles.CPDMaintContainer}>
          <View>
            <Text  style = {styles.CPDTextStyle}>
              Collected Product Data
            </Text>
          </View>
          <View style={styles.roundedtextBlue}>
            <Text style={styles.roundInnerValue}> 
              1
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
                Name of Brand
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
              <EditInLineDataCollectionPreview navigation={navigation} radioVal2={this.props.navigation.state.params.valueRadio1}/>
            </ListItem>
          </CollapseBody>
        </Collapse>  
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

      <View style={{marginVertical:hp('4')}}></View>
    </ScrollView>
      {/* Submit Button */}
      <TouchableOpacity>
        <View style= {styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText} > SUBMIT </Text>
          </View>
        </View>
      </TouchableOpacity>

    </ImageBackground>
    </View>
  );
}
}

const styles = StyleSheet.create({
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

    searchResultTextRowContainer: { 
        flex:1, 
        flexDirection:'row' 
    },

    searchResultTextColContainer: { 
        flex:0.5, 
        flexDirection:'column', 
    },

    searchResultText: {
        color:'#8C7878',
        // fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
        fontSize:RFValue(12), 
        marginTop: hp('3'), 
        marginLeft: wp('5'), 
        fontFamily: 'Proxima Nova',
    },

    CPDMaintContainer:{ 
        flex:0.5, 
        flexDirection:'row', 
        alignItems:'flex-end',
    },

    CPDTextStyle:{ 
        color: '#3955CB', 
        fontFamily: 'Proxima Nova',   
        fontSize:RFValue(12), 
        fontWeight: 'bold', 
        justifyContent:'center', 
        alignItems:'center',
        marginRight: wp('2'), 
        marginLeft: wp('6')
    },

    roundedtextBlue: {
        width: 25,
        height: 25, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25 / 2,
        backgroundColor: "#3955CB",
        borderColor: '#3955CB',
        borderWidth: 3,
    },

    roundInnerValue: {
        color: '#ffffff', 
        fontFamily: 'Proxima Nova',  
        fontSize:RFValue(13), 
    },

    orderSerchResultMainContainer: {
      flex:1,
      marginTop: hp('4'),
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

  button: {
      width: wp('100'),
      height: hp('8'),
      backgroundColor: '#46BE50',
      marginVertical: 1,
      paddingVertical: 15,
      justifyContent: 'center',
  },

   
  buttonText: {
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontFamily: 'Proxima Nova',
  },


});
