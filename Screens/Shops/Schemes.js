import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';



export default class Schemes extends Component {
constructor(props) {
    super(props);
    this.state = {  };
}

static navigationOptions = {
    // title: 'Order Preview',
    // color: 'white',
    // headerStyle: {
    //     backgroundColor: '#221818'
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //     color: '#fff'
    // },
     headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.Shops() }>  
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
                 style={{height:hp('100'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         > 
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/*Total Shops  */}
                <View style= {styles.totalSchemesMainContainer}>
                    <View style= {styles.schemesColContainer}>
                        <Text  style = {styles.schemesCountTextStyle}>
                                8
                        </Text>
                        <Text  style = {styles.schemesHeadingTextStyle}>
                                Total No. Schemes
                        </Text>
                    </View>
                    {/* Filter Icon */}
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

                {/* Brand Product Card */}
                <View style={styles.brandCardMainContainer}>
                    {/* Card White BG */}
                    <View style={styles.brandCardCardBG}>
                        <Text style={styles.brandNameTextStyle}>
                            Brand / Product Name
                        </Text>
                         {/* Image */}
                        <View style={styles.schemesImgBG}>
                                <Image style={styles.schemesImgStyle}  
                                                source = {require('../../Assets/Icons/Schemes.png')}
                                    />
                        </View>
                        {/* Schemes Details */}
                        <View style={styles.schemesDetailsContainer}>
                            <Text style={styles.schemesDetailsTextStyle}>
                                Scheme details in 2 lines. Scheme details in 2 lines. Scheme details in 2 lines. Scheme details in 2 lines.
                            </Text>
                        </View>
                        {/* Dash line */}
                        <View style={styles.cardDashLineMainContainer}>
                            <Dash style={styles.cardDashStyle} 
                                dashLength = {2}
                                dashColor = '#E6DFDF'
                            />
                        </View>
                        {/* Publish Last Date */}
                        <View style={styles.PLDateainContainer}>
                            <View style={styles.publishDateColContainer}>
                                    <Text style={styles.publishDateLabelStyle}>
                                        PUBLISH DATE
                                    </Text>
                                    <Text style={styles.publishDateTextStyle}>
                                        20 Dec 2019
                                    </Text>
                            </View>
                            <View style={styles.lastDateColContainer}>
                                    <Text style={styles.lastDateLabelStyle}>
                                        LAST DATE
                                    </Text>
                                    <Text style={styles.lastDateTextStyle}>
                                        12 Jan 2020
                                    </Text>
                            </View>
                            <View style={styles.viewDetailColContainer}>
                                <Text style={styles.viewDetailsLabelStyle}>
                                    View Details
                                </Text>
                            {/* </View>
                            <View style={{flex:1, flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end', }}> */}
                                <Image  style={styles.viewDetailesArrowStyle}
                                        source = {require('../../Assets/Icons/right_arrow_front.png')}
                                />
                            </View>
                        </View>


                    </View> 
                </View>

               


            </ScrollView>
         </ImageBackground>
        </View>       
        );
    }
}

const styles = StyleSheet.create({
    totalSchemesMainContainer:{ 
        flex:1, 
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    schemesColContainer:{ 
        flex:8, 
        flexDirection:'column', 
        alignItems:'center',
        justifyContent:'center',
    },

    schemesCountTextStyle: {  
        color: '#221818', 
        fontSize:RFValue(20), 
        fontWeight: 'bold',
        // marginLeft: wp('15'), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova',   
    },

    schemesHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        alignSelf:'center',
        // marginLeft: wp('5'), 
        fontFamily: 'Proxima Nova', 
    },

    filterIconContainer:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-end',
        marginTop:hp('1'),
    },

    filterIconStyle:{ 
        justifyContent: 'center',
        height:hp('4'),
        width:wp('8'), 
        marginRight:wp('5'),
    },

    dashLineContainer: {
        flex:1, 
        marginTop:hp('3'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('100'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },

    brandCardMainContainer:{ 
        marginTop:hp('3'),
    },

    brandCardCardBG: {
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        flex:1, 
        borderColor: '#E6DFDF',
        alignSelf:'center',
        borderRadius: wp('2'), 
        height: hp('53'), 
        width: wp('90'),
        borderWidth: hp('0.2'), 
    },

    brandNameTextStyle:{
        marginTop:hp('2'), 
        marginLeft:wp('3'), 
        color:'#796A6A',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova',
        fontSize:RFValue(14),
    },

    schemesImgBG:{
        marginTop:hp('3'), 
        backgroundColor:'#F8F4F4', 
        alignSelf:'center',
        height:hp('25'), 
        width:wp('81'), 
        borderRadius:wp('1'),
        justifyContent:'center',
    },

    schemesImgStyle:{
        alignSelf:'center', 
        height:hp('9'),
    },

    schemesDetailsContainer:{
        flexDirection:'row', 
        marginTop:hp('2'),
        marginLeft:wp('4'),
        marginRight:wp('4'), 
    },

    schemesDetailsTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova',
        fontSize:RFValue(12), 
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

    PLDateainContainer:{
        marginTop:hp('1'), 
        flexDirection:'row', 
        marginLeft:wp('4'),
    },

    publishDateColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    publishDateLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    publishDateTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13 ), 
        marginTop:hp('1'),
    },

    lastDateColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        marginRight:wp('7'),
    },

    lastDateLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    lastDateTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
         marginTop:hp('1'),
    },

    viewDetailColContainer:{
        flex:1, 
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center', 
        // marginBottom:wp('3'),
    },

    viewDetailsLabelStyle:{
        color:'#3955CB',
        // fontWeight:'normal',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        alignSelf:'center',  
    },

    viewDetailesArrowStyle:{
        tintColor:'#3955CB', 
        height:hp('2.5'),
        alignSelf:'center',
    },


})