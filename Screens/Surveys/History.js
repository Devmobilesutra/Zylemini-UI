import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

const list = [
    {
        surveyname: 'Survey Name',
        company: 'Company / Brand Name',
        date: '22 Dec 2019',
        time: '3.30 PM',
    },
    {
        surveyname: 'Survey Name',
        company: 'Company / Brand Name',
        date: '22 Dec 2019',
        time: '3.30 PM',
    },
    {
        surveyname: 'Survey Name',
        company: 'Company / Brand Name',
        date: '22 Dec 2019',
        time: '3.30 PM',
    },
    
];


export default class History extends Component {
constructor(props) {
    super(props);
    this.state = {  };
}

render() {
    return (
        <View>
         <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         > 
          <ScrollView
                    showsVerticalScrollIndicator={false}
          >

            {/*No of Surveys */}
            <View style= {styles.surveyTakenAvilableMainContainer}>
               <View style={styles.surveyTakenRowContainer}>
                    <Text style={styles.surveysTakenLabelStyle}>
                        Surveys Taken
                    </Text>
                    <Text style={styles.surveysTakenCountStyle}>
                        40
                    </Text>
               </View>
                <View style= {styles.filterIconContainer}>
                    <Image  source={require('../../Assets/Icons/filter_list_shop.png')}
                            style={styles.filterIconStyle}>
                    </Image>
                </View>
            </View>

             {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                />
            </View>

            {/* History Card */}
            <View style={styles.pastSurveysCardContainer}>
            {
                list.map((item, index) => (
                <View style={styles.pastSurveysCardBG}>
                    <View style={styles.pastSurveyimageContainer}>
                        {/* <View style={{}}> */}
                            <Image style={styles.pastSurveyimageStyles} 
                                source = {require('../../Assets/Icons/SurveyCard.png')}/>
                        {/* </View> */}
                    </View>
                    <View style={styles.pastSurveyContainer}>
                        <Text style={styles.pastSurveyNameTextStyle}>
                                {item.surveyname}
                        </Text >
                        <Text style={styles.companyNameTextStyle}>
                                {item.company}
                        </Text>
                        <Text style={styles.dateTimeTextStyle}>
                                {item.date}     {item.time}
                        </Text>
                    </View>
                </View>
                ))
                }
            </View>
            <View style={{marginTop:hp('15')}}></View>
          </ScrollView>
         </ImageBackground>
        </View>
    ); 
}
}


const styles = StyleSheet.create({

    surveyTakenAvilableMainContainer:{
        flex:1,
        flexDirection:'row', 
        marginTop:hp('2'),
        justifyContent:'center',
    },

    surveyTakenRowContainer:{
        flex:0.4,
        flexDirection:'row', 
        alignItems:'flex-start',  
        justifyContent:'center',
        marginLeft:wp('-2'),
    },

    surveysTakenLabelStyle:{ 
        color: '#221818', 
        fontSize:RFValue(13), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova',   
    },

    surveysTakenCountStyle:{ 
        color: '#221818', 
        fontSize:RFValue(20), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova', 
        fontWeight:'bold', 
        marginLeft: wp('5'),
    },

    filterIconContainer:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-end',
        marginTop:hp('1'),
        justifyContent:'center',
    },

    filterIconStyle:{ 
        justifyContent: 'center',
        height:hp('5'),
        width:wp('6'), 
        marginRight:wp('5'),
        // marginTop: hp('1'),
    },

    dashLineContainer: {
        flex:1, 
        marginTop:hp('2'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('100'), 
        height:hp('1'), 
        color: '#ADA2A2',
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

});
