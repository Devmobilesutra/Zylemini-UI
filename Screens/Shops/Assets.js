import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dash from 'react-native-dash';



export default class Assets extends Component {
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

                 {/*Total Shops  */}
                <View style= {styles.totalAssetsMainContainer}>
                    <View style= {styles.assetsColContainer}>
                        <Text  style = {styles.assetsCountTextStyle}>
                                8
                        </Text>
                        <Text  style = {styles.assetsHeadingTextStyle}>
                                Total No. Of Assets
                        </Text>
                    </View>
                    {/* Filter Icon */}
                    <View style= {styles.filterIconContainer}>
                        <TouchableOpacity >
                            <Image  source={require('../../Assets/Icons/filter_list_shop.png')}
                                style={styles.filterIconStyle}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>

                
               {/* Dash Line */}
                <View style={styles.dashLineContainer}>
                    <Dash style={styles.dashLineStyle}
                        dashLength = {2}
                        dashColor = '#ADA2A2'
                    />
                </View>

                {/* Assets List */}
                <View style={styles.assetListMainContainer}>
                    {/* Header Asset is */}
                    <View style={styles.cardHeaderBGContainer}>
                            <Text style={styles.assetIdTextStyle}>
                                ASSET ID
                            </Text>
                    </View>
                    {/* Below Header White BG */}
                    <View style={styles.cardWhiteBGContainer}>
                        {/* Images Gray BG */}
                        <View style={styles.imgBGContainer}>
                                <Image style={styles.imgStyle}  
                                            source = {require('../../Assets/Icons/shopImg.png')}
                                />
                        </View>
                        {/* Installation Audit Condition */}
                        <View style={styles.IACMainContainer}>
                            <View style={styles.instColContainer}>
                                    <Text style={styles.instLabelTextStyle}>
                                        INSTALLATION DATE
                                    </Text>
                                    <Text style={styles.instDateTextStyle}>
                                        20 Dec 2016
                                    </Text>
                            </View>
                            <View style={styles.lastAudMainContainer}>
                                    <Text style={styles.lastAudLabelStyle}>
                                        LAST AUDIT
                                    </Text>
                                    <Text style={styles.lastAuditDatStyle}>
                                        8 Dec 2019
                                    </Text>
                            </View>
                            <View style={styles.conditionMainContainer}>
                                    <Text style={styles.conditionLabelStyle}>
                                        CONDITION
                                    </Text>
                                    <Text style={styles.conditionStatusStyle}>
                                        Working
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

                        {/* Asset Brand Model */}
                        <View style={styles.ABMMainContainer}>
                            <View style={styles.assetTypeColContainer}>
                                    <Text style={styles.assetTypeLabelStyle}>
                                        ASSET TYPE
                                    </Text>
                                    <Text style={styles.assetsTypeTextStyle}>
                                        Refrigerator
                                    </Text>
                            </View>
                            <View style={styles.brandColContainer}>
                                    <Text style={styles.brandLabelStyle}>
                                        BRAND
                                    </Text>
                                    <Text style={styles.brandsTypeTextStyle}>
                                        Bosch
                                    </Text>
                            </View>
                            <View style={styles.modelNoColContainer}>
                                    <Text style={styles.modelNoLabelStyle}>
                                        MODEL NO
                                    </Text>
                                    <Text style={styles.modelNosNoStyle}>
                                        MD236
                                    </Text>
                            </View>
                        </View>
                        {/* View Detailes */}
                        <View style={styles.viewDetailsMainContainer}>
                         <TouchableOpacity>
                            <View style={styles.viewDetailsRowContainer}>
                                <Text style={styles.viewDetailsLabelStyle}>
                                    View Details
                                </Text>
                            {/* </View>
                            <View style={{flex:1, flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end', }}> */}
                                 <Image  style={styles.viewDetailesArrowStyle}
                                        source = {require('../../Assets/Icons/right_arrow_front.png')}
                                    />
                            </View>
                         </TouchableOpacity>
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
    totalAssetsMainContainer:{ 
        flex:1, 
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    assetsColContainer:{ 
        flex:8, 
        flexDirection:'column', 
        alignItems:'center',
        justifyContent:'center',
    },

    assetsCountTextStyle: {  
        color: '#221818', 
        fontSize:RFValue(20), 
        fontWeight: 'bold',
        // marginLeft: wp('15'), 
        alignSelf:'center',
        fontFamily: 'Proxima Nova',   
    },

    assetsHeadingTextStyle:{  
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

    assetListMainContainer:{
        marginTop:hp('3'),
    },

    cardHeaderBGContainer:{
        backgroundColor: '#796A6A',
        height:hp('8'),
        width:wp('90'),
        borderTopLeftRadius: wp('2'), 
        borderTopRightRadius: wp('2'), 
        marginTop:hp('-1'),
        alignSelf:'center',
        justifyContent:'center',
    },

    assetIdTextStyle:{  
        color:'#FFFFFF', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(14),
        marginLeft:wp('4'),
    },

    cardWhiteBGContainer:{
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        flex:1, 
        borderColor: '#E6DFDF',
        alignSelf:'center',
        borderBottomLeftRadius: wp('2'), 
        borderBottomRightRadius: wp('2'),
        height: hp('56'), 
        width: wp('90'),
        borderWidth: hp('0.2'),
        borderTopWidth:hp('0'), 
    },

    imgBGContainer:{
        marginTop:hp('3'), 
        backgroundColor:'#F8F4F4',
        alignSelf:'center',
        height:hp('25'), 
        width:wp('81'), 
        borderRadius:wp('1'),
        justifyContent:'center',
    },

    imgStyle:{
        alignSelf:'center', 
        height:hp('20'),
    },

    IACMainContainer:{
        marginTop:hp('2'), 
        flexDirection:'row', 
        marginLeft:wp('4'),
    },

    instColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    instLabelTextStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    instDateTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13 ), 
        marginTop:hp('1.5'),
    },

    lastAudMainContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:wp('0'),
    },

    lastAudLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    lastAuditDatStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13), 
        marginTop:hp('1.5'), 
    },

    conditionMainContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end', 
        justifyContent:'center',
        marginLeft:wp('2'),
    },

    conditionLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        alignSelf:'flex-start',  
    },

    conditionStatusStyle:{
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

    ABMMainContainer:{
        marginTop:hp('2'), 
        flexDirection:'row', 
        marginLeft:wp('4'),
    },

    assetTypeColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
    },

    assetTypeLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    assetsTypeTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13 ), 
        marginTop:hp('1.5'),
    },

    brandColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        marginRight:wp('7'),
    },

    brandLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    brandsTypeTextStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
         marginTop:hp('1.5'),
    },

    modelNoColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end', 
        justifyContent:'center',
        marginRight:wp('2'),
    },

    modelNoLabelStyle:{
        color:'#362828',
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        alignSelf:'flex-start',
    },

    modelNosNoStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(13),
        marginTop:hp('1.5'), 
        alignSelf:'flex-start',
    },

    viewDetailsMainContainer:{
        marginTop:hp('4'), 
        flexDirection:'row', 
        alignItems:'flex-end',
        marginRight:wp('7'),
    },

    viewDetailsRowContainer: {
        flex:1, 
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end', 
    },

    viewDetailsLabelStyle:{
        color:'#3955CB',
        // fontWeight:'normal',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        alignSelf:'flex-end',  
    },

    viewDetailesArrowStyle:{
        tintColor:'#3955CB', 
        height:hp('2.5'),
    },

});