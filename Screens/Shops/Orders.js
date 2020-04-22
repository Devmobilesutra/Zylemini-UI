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
    position: 4,
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
    position: 2,
  },
  {
    text: "Audit Assets",
    color: 'transperent',
    name: "bt_assets", 
    position: 1,
  },

];


export default class Orders extends Component {
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
                <View style= {styles.totalShopsMainContainer}>
                    <View style= {styles.processColContainer}>
                        <Text  style = {styles.inProcessCountTextStyle}>
                                2
                        </Text>
                        <Text  style = {styles.inProcessHeadingTextStyle}>
                                In-Process
                        </Text>
                    </View>
                    <View style= {styles.deliveredColContainer}>
                        <Text  style = {styles.deliveredCountTextStyle}>
                                18
                        </Text>
                        <Text  style = {styles.deliveredHeadingTextStyle}>
                                Delivered
                        </Text>
                    </View>
                    <View style= {styles.totalCountMainContainer}>
                        <Text  style = {styles.totalCountTextStyle}>
                                20
                        </Text>
                        <Text  style = {styles.totalCountHeadingTextStyle}>
                                Total
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

                {/* Order Detailes */}
                <View style={styles.orderDetailsMainContainer}>
                    {/* Header Background */}
                    <View style={styles.orderHeaderBGContainer}>
                        <View style={styles.ordHeaderRowContainer}>
                            <View style={styles.orderLabelContainer}>
                                <Text style={styles.orderLabelTextStyle}>
                                    ORDER 102235444444444444444444444444444
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
                    <View style={styles.oredrDetaileWhiteBG}>
                        <View style={styles.orderDateRowContainer}>
                            <View style={styles.orderDateColContainer}>
                                <Text style={styles.ordDateLabelStyle}>
                                    ORDER DATE
                                </Text>
                                <Text style={styles.orderDateDateStyle}>
                                    20 Dec 2019
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
                        <View style={styles.ordDetDashContainer}>
                            <Dash style={styles.ordDetDashStyle}
                                dashLength = {2}
                                dashColor = '#E6DFDF'
                            />
                        </View>
                        
                        {/* Delivery */}
                        <View style={styles.deliveryStatusContainer}>
                            <View style={styles.deliverySeparateContainer}>
                                <View style={styles.deliveryColContainer}>
                                    <Text style={styles.deliveryLabelStyle}>
                                        DELIVERY
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.deliveryStusMainContainer}>
                                <View style={styles.deliveryStatusColContainer}>
                                    <View style={styles.statusPinkBG}>
                                        <Text style={styles.statusTextStyle}>
                                            In Progress
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.viewDetailsMainContainer}>
                                    <TouchableOpacity onPress={ () => Actions.OrderViewDetails() }  >
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
                </View>


                 {/* Order Detailes */}
                <View style={styles.orderDetailsMainContainer}>
                    {/* Header Background */}
                    <View style={styles.orderHeaderBGContainer}>
                        <View style={styles.ordHeaderRowContainer}>
                            <View style={styles.orderLabelContainer}>
                                <Text style={styles.orderLabelTextStyle}>
                                    ORDER 102235444444444444444444444444444
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
                    <View style={styles.oredrDetaileWhiteBG}>
                        <View style={styles.orderDateRowContainer}>
                            <View style={styles.orderDateColContainer}>
                                <Text style={styles.ordDateLabelStyle}>
                                    ORDER DATE
                                </Text>
                                <Text style={styles.orderDateDateStyle}>
                                    20 Dec 2019
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
                        <View style={styles.ordDetDashContainer}>
                            <Dash style={styles.ordDetDashStyle}
                                dashLength = {2}
                                dashColor = '#E6DFDF'
                            />
                        </View>
                        
                        {/* Delivery */}
                        <View style={styles.deliveryStatusContainer}>
                            <View style={styles.deliverySeparateContainer}>
                                <View style={styles.deliveryColContainer}>
                                    <Text style={styles.deliveryLabelStyle}>
                                        DELIVERY
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.deliveryStusMainContainer}>
                                <View style={styles.deliveryStatusColContainer}>
                                    <Text style={styles.deliveredDateStyle}>
                                        25 Nov 2019
                                    </Text>
                                </View>
                                <View style={styles.viewDetailsMainContainer}>
                                    <TouchableOpacity onPress={ () => Actions.OrderViewDetails() } >
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
                        // if(name = "bt_create"){ 
                                Actions.CreateNewOrderFirst()
                        // }
                    
                    }}
                />

            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    totalShopsMainContainer:{ 
        flex:1, 
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    processColContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    inProcessCountTextStyle: {  
        color: '#221818', 
        fontSize:RFValue(22), 
        fontWeight: 'bold',
        marginLeft: wp('12'), 
        fontFamily: 'Proxima Nova',   
    },

    inProcessHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        marginLeft: wp('5'), 
        fontFamily: 'Proxima Nova', 
    },

    deliveredColContainer:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-start',
    },

    deliveredCountTextStyle:{  
        color: '#221818', 
        fontSize:RFValue(22), 
        fontWeight: 'bold', 
        marginLeft:wp('7'),
        fontFamily: 'Proxima Nova', 
        fontWeight: 'bold',  
    },

    deliveredHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',  
        marginTop:hp('0.5'),
        marginLeft:wp('2'),
        fontFamily: 'Proxima Nova', 
    },

    totalCountMainContainer:{
        alignItems:'flex-end',
        flexDirection:'column',
    },

    totalCountTextStyle: {  
        color: '#221818', 
        fontSize:RFValue(22), 
        fontWeight: 'bold', 
        marginRight:wp('13'),
        fontFamily: 'Proxima Nova', 
        fontWeight: 'bold',  
    },

    totalCountHeadingTextStyle: {  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',  
        marginTop:hp('0.5'),
        marginRight:wp('13'),
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
        marginTop: hp('1'),
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

    orderDetailsMainContainer: {
        marginTop:hp('3'),
    },

    orderHeaderBGContainer: {
        backgroundColor: '#796A6A',
        height:hp('8'),
        width:wp('90'),
        borderTopLeftRadius: wp('2'), 
        borderTopRightRadius: wp('2'), 
        marginTop:hp('-1'),
        alignSelf:'center',
        justifyContent:'center',
    },

    ordHeaderRowContainer:{
        flexDirection:'row',
    },

    orderLabelContainer:{
        flex:2.5,
        alignItems:'flex-start', 
        flexDirection:'column',
        justifyContent:'center',
    },

    orderLabelTextStyle:{
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
        justifyContent:'center',
    },

    amtTextStyle:{
        color:'#FFFFFF', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(14),
        marginRight:wp('4'),
    },

    oredrDetaileWhiteBG:{
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

    orderDateRowContainer:{
        flex:1,
        flexDirection:'row', 
        marginTop:hp('2'), 
    },

    orderDateColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    ordDateLabelStyle:{
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    orderDateDateStyle:{
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

    ordDetDashContainer: {
        // flex:1, 
        marginTop:hp('-5'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    ordDetDashStyle:{  
        width:wp('85'),  
        height:hp('1'),
    },

    deliveryMainContainer: {
        flex:1,
        flexDirection:'row', 
        marginTop:hp('2'), 
    },

    deliveryColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    deliveryLabelStyle:{
        color:'#362828', 
        fontWeight: 'bold', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(12),
    },

    deliveryStatusContainer:{
        flex:1,
        flexDirection:'column',
        marginTop:hp('-2'), 
    },

    deliverySeparateContainer: {
        flexDirection:'row', 
        marginTop:hp('3'),
    },

    deliveryStusMainContainer: {
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    deliveryStatusColContainer:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:wp('4'),
    },

    statusPinkBG:{
        backgroundColor: '#CC1167',
        justifyContent:'center',
        marginRight:hp('3'),
        borderColor: '#CC1167',
        height:hp('4'),
        width:wp('22'),
        borderRadius:wp('5'),
    },

    statusTextStyle:{
        alignSelf:'center', 
        color:'#FFFFFF', 
        fontFamily:'Proxima Nova',
        fontSize:RFValue('11'), 
        fontWeight: 'bold', 
        padding:10,
    },

    deliveredDateStyle:{
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

})
