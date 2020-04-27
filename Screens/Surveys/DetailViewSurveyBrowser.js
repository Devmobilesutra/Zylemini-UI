import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';


export default class DetailViewSurveyBrowser extends Component {
constructor(props) {
    super(props);
    this.state = {  };
}

static navigationOptions = {
  title: 'Survey Name',
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
            <TouchableOpacity   onPress={() =>Actions.AvailableSurveys() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
 )                               
}


render() {
    return (
        <View>
         <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{ height:hp('100'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         > 
          <ScrollView
                    showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style = {styles.container}>
                <View style= {styles.companyBrandContainer}>
                    <Text  style = {styles.companyBrandTextStyle}>
                        Company Brand Name
                    </Text>
                    <Text  style = {styles.publishDateStyle} >
                        Published on 12/12/2020
                    </Text>
                </View>
                <View style= {styles.timeRequiredRowContainer}>
                    <Text  style = {styles.timeRequiredTextStyle}>
                            Time Required: 15.17 Min
                     </Text>
                </View>
            </View>

            {/* Blue Card */}
            <View style={styles.blueCardMainContainer}>
                <View style={styles.blueCardInnerContainer}>

                    <View style={styles.surveyImgContainer}>
                        <Image  style={styles.surveyImgStyle}
                            source = {require('../../Assets/Icons/Survey.png')}
                        />
                    </View>  
                    <View style={styles.questionLableContainer}>
                        <Text style={styles.questionLableStyle}>
                            Question 1
                        </Text>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionStyle}>
                            Which is your favourite beer brand in India ?
                        </Text>
                    </View>

                    {/* Middle Line */}
                    <View
                        style={styles.middleLineStyle}
                    />
                </View>
            </View>
          </ScrollView>
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

    companyBrandContainer: {
        flex:0.5, 
        flexDirection:'column', 
        alignItems: 'flex-start',
        marginLeft: wp('6')
    },

    companyBrandTextStyle: {
        color: '#796A6A', 
        fontSize:RFValue(12),
        fontWeight: 'bold',
        marginTop: hp('3%'), 
        fontFamily: 'Proxima Nova', 
        marginLeft: wp('5%'),
    },
  
    publishDateStyle: {
        color: '#796A6A', 
        fontSize:RFValue(12), 
        marginTop: hp('1%'), 
        marginLeft: wp('5%'),
        fontFamily: 'Proxima Nova', 
        marginBottom:hp('2')
    },


    timeRequiredRowContainer: {
        flex:0.5, 
        flexDirection:'row', 
        alignItems: 'flex-end',
        marginLeft: wp('4'),
    },

    timeRequiredTextStyle: {
        color: '#796A6A', 
        fontSize:RFValue(12),
        marginTop: hp('1%'), 
        marginRight: wp('5%'), 
        fontFamily: 'Proxima Nova', 
        marginBottom:hp('2') ,
    },

    blueCardMainContainer:{
        marginTop:hp('2'), 
        alignItems:'center',
    },

    blueCardInnerContainer:{ 
        height:hp('75'), 
        width:wp('90'), 
        backgroundColor:'#85c6de', 
        borderRadius:wp('2'), 
    },

    surveyImgContainer:{
        alignItems:'center',
    },

    surveyImgStyle:{
        height:hp('12'), 
        width:wp('15'), 
        marginTop:hp('10'), 
    },

    questionLableContainer:{
        marginTop:hp('1'), 
        marginLeft:wp('4'), 
        marginRight: wp('2'),
    },

    questionLableStyle:{
        color: 'white', 
        fontSize:RFValue(15), 
        fontFamily: 'Proxima Nova',  
    },

    questionContainer:{
        marginTop:hp('1'), 
        marginLeft:wp('4'), 
        marginRight: wp('2'),
    },

    questionStyle:{
        color: 'white', 
        fontSize:RFValue(20), 
        fontWeight:'bold',
        fontFamily: 'Proxima Nova', 
    },

    middleLineStyle:{
        width:wp('70'),    
        borderBottomColor: 'black',
        borderBottomWidth: wp('0.1'),
        alignSelf:'center',
        marginTop: hp('2.5')
    },

});