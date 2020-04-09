import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dash from 'react-native-dash';



export default class Payments extends Component {
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
                <View style= {styles.totalOutstandingMainContainer}>
                    <View style= {styles.outstandinColContainer}>
                        <Text  style = {styles.outstandinCountTextStyle}>
                                23,00,000
                        </Text>
                        <Text  style = {styles.outstandinHeadingTextStyle}>
                                Total Outstanding  ( In INR )
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

                 <View style={styles.invoiceMainContainer}>
                    {/* Header Background */}
                    <View style={styles.invoiceHeaderBGContainer}>
                        <View style={styles.invHeaderRowContainer}>
                            <View style={styles.invoiceLabelContainer}>
                                <Text style={styles.invoiceLabelTextStyle}>
                                    INVOICE 102235
                                </Text>
                            </View>
                            <View style={styles.amtContainer}>
                                <Text style={styles.amtTextStyle}>
                                    40,000 INR
                                </Text>
                            </View> 
                        </View>
                    </View>
                    {/* Below Header White Background */}
                    <View style={styles.invoiceDetaileWhiteBG}>
                        <View style={styles.invoiceDateRowContainer}>
                            <View style={styles.invoiceDateColContainer}>
                                <Text style={styles.invDateLabelStyle}>
                                    INVOICE DATE
                                </Text>
                                <Text style={styles.invoiceDateDateStyle}>
                                    20 Dec 2020
                                </Text>
                            </View>
                            <View style={styles.salesColContainer}>
                                <Text style={styles.salesLabelStyle}>
                                    SALESMAN
                                </Text>
                                <Text style={styles.salesNameStyle}>
                                    Kumar Subramanyam
                                </Text>
                            </View>
                        </View>
                        {/* Dash line */}
                        <View style={styles.invDetDashContainer}>
                            <Dash style={styles.invDetDashStyle}
                                dashLength = {2}
                                dashColor = '#E6DFDF'
                            />
                        </View>

                        {/* Delivery */}
                        <View style={styles.paymentMainContainer}>
                             <View style={styles.paymentColContainer}>
                                <Text style={styles.paymentLabelStyle}>
                                    PAYMENT DATE
                                </Text>
                            </View>
                        </View>

                        <View style={styles.paymentDateContainer}>
                            <View style={styles.paymentDateColContainer}>
                                {/* <View style={styles.statusPinkBG}>
                                    <Text style={styles.statusTextStyle}>
                                        In Progress
                                    </Text>
                                </View> */}
                                <Text style={styles.paymentDateStyle}>
                                30 Dec 2019
                                </Text>
                                
                            </View>
                            <View style={styles.viewDetailsMainContainer}>
                                <TouchableOpacity>
                                <View style={styles.viewDetailesLabelContainer}>
                                    <Text style={styles.viewDetaileTextStyle}>
                                        View Details 
                                    </Text>
                                </View>
                                <View style={styles.viewDetailesArrowContainer}>
                                    <Image  style={styles.viewDetailsArrowStyle}
                                        source = {require('../../Assets/Icons/right_arrow_front.png')}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
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
    totalOutstandingMainContainer:{ 
        flex:1, 
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    outstandinColContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    outstandinCountTextStyle: {  
        color: '#E23333', 
        fontSize:RFValue(20), 
        fontWeight: 'bold',
        marginLeft: wp('15'), 
        fontFamily: 'Proxima Nova',   
    },

    outstandinHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        marginLeft: wp('5'), 
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

    invoiceMainContainer: {
        marginTop:hp('3'),
    },

    invoiceHeaderBGContainer: {
        backgroundColor: '#796A6A',
        height:hp('8'),
        width:wp('90'),
        borderTopLeftRadius: wp('2'), 
        borderTopRightRadius: wp('2'), 
        marginTop:hp('-1'),
        alignSelf:'center',
        justifyContent:'center',
    },

    invHeaderRowContainer:{
        flexDirection:'row',
    },

    invoiceLabelContainer:{
        flex:1,
        alignItems:'flex-start', 
        flexDirection:'column',
    },

    invoiceLabelTextStyle:{
        color:'#FFFFFF', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(14),
        marginLeft:wp('4'),
    },

    amtContainer:{
        flex:1,
        alignItems:'flex-end', 
        flexDirection:'column',
    },

    amtTextStyle:{
        color:'#FFFFFF', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(14),
        marginRight:wp('4'),
    },

    invoiceDetaileWhiteBG:{
        flexDirection:'column',
        backgroundColor: '#FFFFFF', 
        flex:1,
        borderColor: '#E6DFDF',
        alignSelf:'center',
        borderBottomLeftRadius: wp('2'), 
        borderBottomRightRadius: wp('2'),
        height: hp('24'), 
        width: wp('90'),
        borderWidth: hp('0.2'),
        borderTopWidth:hp('0'), 
    },

    invoiceDateRowContainer:{
        flex:1,
        flexDirection:'row', 
        marginTop:hp('2'), 
    },

    invoiceDateColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    invDateLabelStyle:{
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    invoiceDateDateStyle:{
        color:'#362828', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        marginTop:hp('1'),
    },

    salesColContainer:{
        flex:2,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('2'),
    },

    salesLabelStyle:{
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
    },

    salesNameStyle:{
        color:'#362828',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
        marginTop:hp('1'),
    },

    invDetDashContainer: {
        // flex:1, 
        marginTop:hp('1'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    invDetDashStyle:{  
        width:wp('85'),  
        height:hp('1'),
    },

    paymentMainContainer: {
        flex:1,
        flexDirection:'row', 
        marginTop:hp('2'), 
    },

    paymentColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    paymentLabelStyle:{
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    paymentDateContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:hp('-4'), 
    },

    paymentDateColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    // statusPinkBG:{
    //     backgroundColor: '#CC1167',
    //     justifyContent:'center',
    //     marginRight:hp('3'),
    //     borderColor: '#CC1167',
    //     height:hp('4'),
    //     width:wp('22'),
    //     borderRadius:wp('5'),
    // },

    // statusTextStyle:{
    //     alignSelf:'center', 
    //     color:'#FFFFFF', 
    //     fontFamily:'Proxima Nova',
    //     fontSize:RFValue('11'), 
    //     fontWeight: 'bold', 
    //     padding:10,
    // },

    paymentDateStyle:{
        color:'#362828', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12), 
        marginTop:hp('0.5'),
    },

    viewDetailsMainContainer:{
        flex:1,
        flexDirection:'column',  
    },

    viewDetailesLabelContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    viewDetaileTextStyle:{
        color:'#3955CB', 
        fontFamily:'Proxima Nova',
        fontSize:RFValue('13'), 
        marginRight:wp('9'), 
        marginTop:hp('0.5'),
    },

    viewDetailesArrowContainer:{
        flexDirection:'column', 
        alignItems:'flex-end',
        marginTop:hp('0'),
        marginRight:wp('4'),
    },

    viewDetailsArrowStyle:{
        tintColor:'#3955CB', 
        height:hp('4'), 
        width:wp('4'),
    },

});