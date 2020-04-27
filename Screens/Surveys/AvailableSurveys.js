import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
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

export default class AvailableSurveys extends Component {
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
               <View style={styles.noOfSurveysColContainer}>
                    <Text style={styles.noOfSurveysLabelStyle}>
                        No. Of Surveys
                    </Text>
               </View>
                <View style={styles.noOfSurveysCountContainer}>
                    <Text style={styles.noOfSurveysCountStyle}>
                        460
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

            <View style={styles.surveyCardMainContainer}>

                {
                list.map((item, index) => (
                // {/* Survey Card */}
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
                     <TouchableOpacity  onPress={() => Actions.DetailViewSurveyBrowser()}>
                        <View style={styles.buttonBGStyle}>
                            <Text style={styles.buttonTextStyle}>
                                TAKE SURVEY
                            </Text>
                        </View>
                     </TouchableOpacity>
                    </View>
                </View>
                  ))
                }
            </View>
            <View style={{marginTop:hp('10')}}></View>
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

    noOfSurveysColContainer:{
        flex:0.5,
        flexDirection:'column', 
        alignItems:'flex-start',  
        justifyContent:'center',
        marginLeft:wp('3'),
    },

    noOfSurveysLabelStyle:{ 
        color: '#221818', 
        fontSize:RFValue(13), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova',  
    },

    noOfSurveysCountContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'center',  
        justifyContent:'center',
        marginLeft:wp('6'),
    },

    noOfSurveysCountStyle:{ 
        color: '#221818', 
        fontSize:RFValue(20), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova', 
        fontWeight:'bold',  
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

    surveyCardMainContainer:{
        marginTop:hp('1')
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
        marginTop: hp('2')
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

});
