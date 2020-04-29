import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Create New Order",
    color: 'transperent',
    name: "bt_create", 
    position: 2,
    
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
    position: 4,
  },
  {
    text: "Audit Assets",
    color: 'transperent',
    name: "bt_assets", 
    position: 1,
  },

];

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

export default class Surveys extends Component {
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
            {/* Surveys Taken n Available */}
            <View style= {styles.surveyTakenAvilableMainContainer}>
                <View style= {styles.surveyTakenColContainer}>
                    <Text  style = {styles.surTakenCountStyle}>
                            8
                    </Text>
                    <Text  style = {styles.surTakenLabelStyle}>
                            Surveys Taken
                    </Text>
                </View>
                <View style= {styles.availabelSurveyColContainer}>
                    <Text  style = {styles.availableSurveyCountStyle}>
                            1
                    </Text>
                    <Text  style = {styles.availableSurveyLabelStyle}>
                            Available Surveys
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

            <View style={styles.surveyCardMainContainer}>
                {/* Survey Card */}
                <View style={styles.surveyCardCardBG}>
                    <Text style={styles.surveyNameTextStyle}>
                        Survey Name
                    </Text>
                    {/* Image */}
                    <View style={styles.surveyImgBG}>
                            <Image style={styles.surveyImgStyle}  
                                            source = {require('../../Assets/Icons/Survey.png')}
                                />
                    </View>
                    {/* Publish date Company Time Required */}
                    <View style={styles.PCRMainContainer}>
                        <View style={styles.publishColContainer}>
                            <Text style={styles.publishLabelTextStyle}>
                                PUBLISH DATE
                            </Text>
                            <Text style={styles.publishDateTextStyle}>
                                20 Dec 2016
                            </Text>
                        </View>
                        <View style={styles.companyMainContainer}>
                            <Text style={styles.companyLabelStyle}>
                                COMPANY
                            </Text>
                            <Text style={styles.companyNameStyle}>
                                XYZ Corp
                            </Text>
                        </View>
                        <View style={styles.timeReqMainContainer}>
                            <Text style={styles.timeReqLabelStyle}>
                                TIME REQUIRED
                            </Text>
                            <Text style={styles.timeReqTimeStyle}>
                                15-20 Mins
                            </Text>
                        </View>
                    </View>

                    {/* Dash line */}
                    <View style={styles.cardDashLineMainContainer}>
                        <Dash style={styles.cardDashStyle} 
                            dashLength = {2}
                            dashColor = '#E6DFDF'
                        />
                    </View>

                    <View style={styles.buttonMainContainer}>
                     <TouchableOpacity>
                        <View style={styles.buttonBGStyle}>
                            <Text style={styles.buttonTextStyle}>
                                TAKE SURVEY
                            </Text>
                        </View>
                     </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Past Surveys */}
            <View style={styles.pastSurveyMainContainer}>
                <View style={styles.pastSurveysRowContainer}>
                    <Text style={styles.pastSurveysLabelStyle}>
                        PAST SURVEYS
                    </Text>
                     <Text style={styles.pastSurveysCountStyle}>
                        8
                    </Text>
                </View>
            </View>

            {/* Small Card */}

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

            <View style={{height:hp('10')}}></View>
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
                    if(name == "bt_assets"){ 
                            Actions.AssetUpdate()
                    }
                    else if(name == "bt_create"){ 
                            Actions.CreateNewOrderFirst()
                    }
                   
                }}
            />
        </ImageBackground>
        </View>       
        );
    }
}

const styles = StyleSheet.create({

    surveyTakenAvilableMainContainer:{
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    surveyTakenColContainer:{ 
        flex:1, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    surTakenCountStyle:{  
        color: '#221818', 
        fontSize:RFValue(20), 
        fontWeight: 'bold',
        alignSelf:'center',
        fontFamily: 'Proxima Nova',    
    },

    surTakenLabelStyle:{
        color: '#8C7878',
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova', 
    },

    availabelSurveyColContainer:{ 
        flex:1, 
        flexDirection:'column', 
        alignItems:'flex-end',
        justifyContent:'center',
    },

    availableSurveyCountStyle:{  
        color: '#221818', 
        fontSize:RFValue(20), 
        fontWeight: 'bold',
        alignSelf:'center',
        fontFamily: 'Proxima Nova',     
    },

    availableSurveyLabelStyle:{
        color: '#8C7878',
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova',
    },

    dashLineContainer: {
            flex:1, 
            marginTop:hp('2.5'), 
            alignContent: 'center', 
            alignItems: 'center',
    },

    dashLineStyle: {
            width:wp('100'), 
            height:hp('1'), 
            color: '#ADA2A2',
    },

    surveyCardMainContainer:{
        marginTop:hp('3')
    },

    surveyCardCardBG: {
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        flex:1, 
        borderColor: '#E6DFDF',
        alignSelf:'center',
        borderRadius: wp('2'), 
        height: hp('56'), 
        width: wp('90'),
        borderWidth: hp('0.2'), 
    },

    surveyNameTextStyle:{
        marginTop:hp('2'), 
        marginLeft:wp('3'), 
        color:'#796A6A',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova',
        fontSize:RFValue(14),
    },

    surveyImgBG:{
        marginTop:hp('3'), 
        backgroundColor:'#F8F4F4', 
        alignSelf:'center',
        height:hp('25'), 
        width:wp('81'), 
        borderRadius:wp('1'),
        justifyContent:'center',
    },

    surveyImgStyle:{
        alignSelf:'center', 
        height:hp('9'),
    },

    PCRMainContainer:{
        marginTop:hp('2'), 
        flexDirection:'row', 
        marginLeft:wp('4'),
    },

    publishColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    publishLabelTextStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    publishDateTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13 ), 
        marginTop:hp('1.5'),
    },

    companyMainContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:wp('-3'),
    },

    companyLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    companyNameStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13), 
        marginTop:hp('1.5'), 
    },

    timeReqMainContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end', 
        justifyContent:'center',
        marginLeft:wp('5'),
    },

    timeReqLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        alignSelf:'flex-start',  
    },

    timeReqTimeStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
        marginTop:hp('1.5'), 
        alignSelf:'flex-start',
    },

    cardDashLineMainContainer:{ 
        marginTop:hp('3'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    cardDashStyle:{
        width:wp('85'),   
        height:hp('1'),
    },

    buttonMainContainer:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
    },

    buttonBGStyle:{
        backgroundColor:'#2FC36E', 
        borderRadius:wp('7'), 
        height:hp('5'),
        width:wp('55'), 
        justifyContent:'center',
    },

    buttonTextStyle:{
        color:'#FFFFFF',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(10), 
        alignSelf:'center', 
    },

    pastSurveyMainContainer:{
        marginTop:hp('4')
    },

    pastSurveysRowContainer:{
        backgroundColor:'#E6DFDF', 
        height:hp('10'), 
        width:wp('100'),
        flexDirection:'row',
        alignItems:'center', 
        marginTop:hp('2'),
    },

    pastSurveysLabelStyle:{
        flex:6, 
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('10'), 
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
    },

    pastSurveysCountStyle:{
        flex:1, 
        flexDirection:'column', 
        alignItems:'flex-end',
        color:'#221818', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
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
