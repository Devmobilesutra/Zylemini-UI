import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FAB, Portal, Provider } from 'react-native-paper';



export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

render() {
    return (
    <View>
     <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={styles.backgroundImgStyle}
     >
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* Horizontal Images */}
            <View>
                <View style={styles.horiImagesMainContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    > 
                        <Image  style={styles.horiImageStyles}
                                            source = {require('../../Assets/ShopInfoImg/Koala.jpg')}
                        />
                        <Image  style={styles.horiImageStyles}
                                            source = {require('../../Assets/ShopInfoImg/Desert.jpg')}
                        />
                        <Image  style={styles.horiImageStyles}
                                            source = {require('../../Assets/ShopInfoImg/Hydrangeas.jpg')}
                        />
                        <Image  style={styles.horiImageStyles}
                                            source = {require('../../Assets/ShopInfoImg/Penguins.jpg')}
                        />
                    </ScrollView>
                </View>
            </View>

            {/* Address */}
            <View>
                <View style={styles.addressMainContainer}>
                    <Text style={styles.addressHeaderTextStyle}>
                        ADDRESS
                    </Text>

                    <Text style={styles.addressTextStyle}>
                        Block 1, Commercial Complex, Street Name, Nearby, Landmark, Kothrud, Pune, Maharashtra, India 
                    </Text>

                    <Text style={styles.addressTextStyle}>
                        Pincode: 411 055
                    </Text>

                    <Image  style={styles.mapImgStyle}
                                            source = {require('../../Assets/Icons/MapImg2.png')}
                    />
                    <TouchableOpacity>
                     <Text style={styles.navigateTextStyle}>
                        Navigate
                    </Text>
                    </TouchableOpacity>
                </View> 
            </View>

            {/* Owner Details */}
            <View>
                <View style={styles.ownerDetailMainContainer}>
                    {/* Owner */}
                    <View style={styles.ownerColumnContainer}>
                        <Text style={styles.ownerHeaderTextStyles}>
                            OWNER
                        </Text>
                        <Text style={styles.ownerNameTextStyle}>
                             First Middle Surname
                        </Text>
                    </View>
                    {/* Middle Line */}
                    <View
                        style={styles.middleLineStyle}
                    />
                    {/* Mob No. */}
                    <View style={styles.mobNoMainContainer}>
                        <View style={styles.mobNoInnerContainer}>
                            <Text style={styles.mobNoTextStyle}>
                                +91 9999 999 999
                            </Text>
                        </View>
                        <View style={styles.messageColumnContainer}>
                            <TouchableOpacity>
                            <Text style={styles.messageTextStyle}>
                                Message
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.callColumnContainer}>
                            <TouchableOpacity>
                            <Text style={styles.callTextStyle}>
                                Call
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                     {/* Middle Line */}
                    <View
                        style={styles.middleLineStyle}
                    />
                    {/* owner's email  */}
                    <Text style={styles.emailTextStyle}>
                            Owneremail@gmail.com
                    </Text>
                </View>
            </View>

            {/* Conract Person */}
            <View>
                <View style={styles.contactPersonMainContainer}>
                     {/* Contact Person */}
                    <View style={styles.contactPersonColumnContainer}>
                        <Text style={styles.contactPersonTextStyle}>
                            Contact Person
                        </Text>
                        <Text style={styles.contactPersonNameStyle}>
                            First Middle Surname
                        </Text>
                    </View>
                    {/* Middle Line */}
                    <View
                       style={styles.middleLineStyle}
                    />
                     {/* Mob No. */}
                    <View style={styles.CPMobNoMainContainer}>
                        <View style={styles.CPMobInnerContainer}>
                            <Text style={styles.CPMobNoTextStyle}>
                                +91 9999 999 000
                            </Text>
                        </View>
                        <View style={styles.CPMessageContainer}>
                            <TouchableOpacity>
                            <Text style={styles.CPMessageTextStyle}>
                                Message
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CPCallContainer}>
                        <TouchableOpacity>
                            <Text style={styles.CPCallTextStyle}>
                                Call
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            {/* Registration View */}
            <View>
                <View style={styles.registrationMainContainer}>
                    {/* Registration no */}
                    <View style= {styles.regiNoRowContainer}>
                        <View style= {styles.regNoColContainer}>
                            <Text  style = {styles.regNoTextStyle}>
                                REGISTRATION NO.
                            </Text>
                            <Text  style = {styles.regNameTextStyle}>
                                First Middle Surname
                            </Text>
                        </View>
                        <View style= {styles.shopIdColContainer}>
                            <Text  style = {styles.shopIdTextContainer}>
                                SHOP ID
                            </Text>
                            <Text  style = {styles.shopNameTextStyle}>
                                Name
                            </Text>
                        </View>
                    </View>
                    {/* Middle Line */}
                    <View
                        style={styles.middleLineStyle}
                    />
                     {/* Shop Area */}
                    <View style= {styles.shopAreaRowContainer}>
                        <View style= {styles.shopAreaColContainer}>
                            <Text  style = {styles.areaHeaderTextContainer}>
                                SHOP AREA
                            </Text>
                            <Text  style = {styles.areaCountTextStyle}>
                                2500 Sq.ft
                            </Text>
                        </View>
                        <View style= {styles.typeColContainer}>
                            <Text  style = {styles.typeHeaderTextStyle}>
                                TYPE
                            </Text>
                            <Text  style = {styles.typeTextStyle}>
                                General Stores
                            </Text>
                        </View>
                    </View>
                    {/* Registered On */}
                    <View style= {styles.regOnColContainer}>
                            <Text  style = {styles.regOnHeaderStyle}>
                                REGISTERED ON
                            </Text>
                            <Text  style = {styles.regOnDateTextStyle}>
                                05 Dec 2016
                            </Text>
                    </View>
                </View>
            </View>


        <View style={{height:hp('10')}}></View>
        </ScrollView>

     </ImageBackground>
    </View>       
        );
    }
}


const styles = StyleSheet.create({
    backgroundImgStyle: {
        // height:hp('163'), 
        width:wp('100'), 
        resizeMode: 'cover',  
        justifyContent: 'center',
    },

    horiImagesMainContainer:{
        alignItems:'center' ,
        flexDirection:'row',
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        justifyContent:'center', 
        alignSelf:'center',
        height: hp('26'),  
        width: wp('100'), 
        marginBottom:hp('1'),
    },

    horiImageStyles: {
        marginLeft:hp('3'), 
        marginBottom:hp('0.5'), 
        height:hp('20'), 
        width:wp('40'),
        borderRadius:wp('2'),
    },

    addressMainContainer: {
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        marginBottom:hp('1'),
        borderColor: '#E6DFDF', 
        height: hp('49'),  
        width: wp('100'),
    },

    addressHeaderTextStyle: {
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('6'), 
        marginTop:hp('3'),
    },

    addressTextStyle: {
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'),
        marginTop:hp('1'),
        marginRight:hp('1'),
    },

    mapImgStyle:{
        height:hp('25'), 
        width:wp('88'),
        marginTop:hp('2'),
        borderRadius:wp('2'), 
        alignSelf:'center',
    },

    navigateTextStyle:{
        color:'#3955CB', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        marginTop:hp('2'), 
        alignSelf:'center',
    },

    ownerDetailMainContainer:{
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        marginBottom:hp('1'),
        borderColor: '#E6DFDF', 
        height: hp('28'),  
        width: wp('100'),
    },

    ownerColumnContainer:{
        flexDirection:'column',
    },

    ownerHeaderTextStyles:{
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('6'), 
        marginTop:hp('3'),
    },

    ownerNameTextStyle:{
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'), 
        marginTop:hp('1'),
    },

    middleLineStyle:{
        width:wp('90'),    
        borderBottomColor: '#E6DFDF',
        borderBottomWidth: wp('0.5'),
        alignSelf:'center',
        marginTop: hp('2.5')
    },

    mobNoMainContainer:{
        flexDirection:'row',
        marginTop:hp('3'),
    },

    mobNoInnerContainer:{
        flex:2,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    mobNoTextStyle:{
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'), 
    },

    messageColumnContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    messageTextStyle:{
        color:'#3955CB', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
    },

    callColumnContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    callTextStyle:{
        color:'#3955CB', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginRight:wp('8'),
    },

    emailTextStyle:{
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'), 
        marginTop:hp('2.5'),
    },

    contactPersonMainContainer: {
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        marginBottom:hp('1'),
        borderColor: '#E6DFDF', 
        height: hp('20'),  
        width: wp('100'),
    },

    contactPersonColumnContainer:{
        flexDirection:'column',
    },

    contactPersonTextStyle:{
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('6'), 
        marginTop:hp('3'),
    },

    contactPersonNameStyle:{
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'), 
        marginTop:hp('1'),
    },

    CPMobNoMainContainer:{
        flexDirection:'row',
        marginTop:hp('3'),
    },

    CPMobInnerContainer:{
        flex:2,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    CPMobNoTextStyle:{
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginLeft: wp('6'), 
    },

    CPMessageContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    CPMessageTextStyle:{
        color:'#3955CB', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
    },

    CPCallContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    CPCallTextStyle:{
        color:'#3955CB', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginRight:wp('8'),
    },

    registrationMainContainer:{
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        marginBottom:hp('1'),
        borderColor: '#E6DFDF', 
        height: hp('33'),  
        width: wp('100'),
    },

    regiNoRowContainer:{
        flexDirection:'row',
    },

    regNoColContainer:{ 
        flexDirection:'column',
    },

    regNoTextStyle: { 
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold',
        marginTop: hp('3'), 
        marginLeft: wp('6%'),
    },

    regNameTextStyle: { 
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop: hp('1'), 
        marginLeft: wp('6%'),
    },

    shopIdColContainer:{
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
    },

    shopIdTextContainer: {
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop: hp('3'), 
    },

    shopNameTextStyle:{ 
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop: hp('1'),
        marginRight:wp('5'), 
    },

    shopAreaRowContainer:{
        flexDirection:'row',
    },

    shopAreaColContainer: { 
        flexDirection:'column', 
    },

    areaHeaderTextContainer: { 
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop: hp('3'), 
        marginLeft: wp('6%'),
    },

    areaCountTextStyle:{ 
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop: hp('1'), 
        marginLeft: wp('6%'),
    },

    typeColContainer:{
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
    },

    typeHeaderTextStyle:{
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop: hp('3'),  
        marginLeft:wp('8'),
    },

    typeTextStyle:{ 
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop: hp('1'),  
        marginLeft:wp('20'),
    },

    regOnColContainer:{ 
        flexDirection:'column', 
    },

    regOnHeaderStyle:{ 
        color:'#362828', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop: hp('3'), 
        marginLeft: wp('6%'),
    },

    regOnDateTextStyle:{ 
        color:'#362828', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop: hp('1'), 
        marginLeft: wp('6%'),
    },
})
