import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';


const data = [{
    value: 'Product 1',
    }, {
    value: 'Product 2',
    }, 
];

export default class Manual extends Component {
constructor(props) {
    super(props);
    this.state = { 
        value: '',
    };
}

modelNameCard =  () => {

    if(this.state.value !== '' ){
        return(
            //  {/* Model Name Card */}
            <View style={styles.pastSurveysCardContainer}>
                <View style={styles.pastSurveysCardBG}>
                    <View style={styles.pastSurveyimageContainer}>  
                        <Image style={styles.pastSurveyimageStyles} 
                                source = {require('../../Assets/Icons/SurveyCard.png')}/>       
                    </View>
                    <View style={styles.pastSurveyContainer}>
                        <Text style={styles.pastSurveyNameTextStyle}>
                            Model Name   
                        </Text >
                        <Text style={styles.companyNameTextStyle}>
                            Product Type 
                        </Text>
                        <Text style={styles.dateTimeTextStyle}>
                            Product Location 
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
render() {
    return (
    <View >
        <ImageBackground
                // source={require('../../Assets/Icons/android_BG.png')}
            style={{backgroundColor:'grey',height:hp('70'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        > 
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View>
                {/* Choose Product type  */}
                <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            CHOOSE PRODUCT TYPE
                        </Text>
                </View>
                <View style={styles.nameTextBoxMainContainer}>
                        <Dropdown
                        placeholder= 'Select'
                        itemCount = {4} 
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('89.5')}}
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-3.4}
                        dropdownOffset={{top:20, left:18,}}
                        rippleOpacity={0}
                    />
                </View>

                 {/* Select Model  */}
                <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            SELECT MODEL
                        </Text>
                </View>
                <View style={styles.nameTextBoxMainContainer}>
                        <Dropdown
                        placeholder= 'Select'
                        itemCount = {4} 
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('89.5')}}
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-3.4}
                        dropdownOffset={{top:20, left:18,}}
                        rippleOpacity={0}

                        onChangeText={(value)=> {this.setState({
                            value
                        });}}
                    />
                </View>

                {/* Modal Card View */}
                <View>
                    {this.modelNameCard()}
                </View>

            </View>
        </ScrollView>
            <View>
                {/* CONFIRM Button */}
                <View style={styles.confirmButtonMainContainer}>
                    <TouchableOpacity  onPress={() => Actions.AuditAssetStep2()} >
                        <View style={styles.confirmButtonInnerContainer}>
                            <Text style={styles.confirmTextStyle}>
                                    CONFIRM
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
    );
}
}

const styles = StyleSheet.create({

    nameMainContainer: {
        flex:1,
    },

    nameTextStyle: { 
        color:'#FFFFFF', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'),
    },

    nameTextBoxMainContainer:{
        flex:1, 
        marginTop:hp('1.5')
    },

    dropDownContainer : {
        borderColor:'#E6DFDF', 
        borderRadius: wp('2'), 
        width: wp('90'), 
        height: hp('9'),
        backgroundColor: '#FFFFFF',
        paddingHorizontal:hp('2'), 
        borderWidth:wp('0.3'), 
        alignSelf:'center',
        padding: -1,
    },

    pastSurveysCardContainer:{
        marginTop:hp('2'),
    },

    pastSurveysCardBG: {
        backgroundColor:'#FFFFFF', 
        borderColor:'#E6DFDF', 
        borderWidth:wp('0.3'),
        borderRadius:wp('1.5'), 
        height:hp('17'), 
        width:wp('90'), 
        alignSelf:'center',
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center' , 
        marginTop:hp('1.5'),  
    },

    pastSurveyimageContainer: { 
        flex:1, 
        alignItems: 'flex-start',
    },

    pastSurveyimageStyles: { 
        marginLeft: wp('5'),
        height:hp('9'),
        width:wp('16'),
    },

    pastSurveyContainer: { 
        flex:3, 
        flexDirection:'column', 
        alignItems: 'flex-start',
        marginTop: hp('-3'),
        marginLeft: wp('7'),
    },

    pastSurveyNameTextStyle: { 
        color:'#796A6A',  
        fontWeight: 'bold',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(17),
        marginTop: hp('2.5'),
    },

    companyNameTextStyle: { 
        color:'#796A6A', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(10), 
        marginTop:wp('2.5'),
    },

    dateTimeTextStyle: { 
        color:'#796A6A', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(10),
        marginTop:wp('2.5'),

    },

    confirmButtonMainContainer: {
        marginTop:hp('3'), 
        alignItems:'center', 
        justifyContent:'center',
        marginBottom:hp('5'),
    },

    confirmButtonInnerContainer:{
        backgroundColor:'#221818', 
        height:hp('9'), 
        width:wp('90'), 
        borderRadius:wp('2'), 
        alignItems:'center',
        justifyContent:'center',
    },

    confirmTextStyle:{ 
        color: '#FFFFFF', 
        fontSize:RFValue(15), 
        fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
    },


});
