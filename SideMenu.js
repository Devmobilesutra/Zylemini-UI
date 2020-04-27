import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';


const DrawerList = [
    {
        home: 'Home',
        shops: 'Shops',
    },
]

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            DrawerList.map((item, index) => (
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.headerBackgrounContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerImgContainer}>
                            <Image style={styles.headerImgStyle}
                                source={require('./Assets/Icons/shopImg.png')}/>
                        </View>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerNameStyle}>
                                John Snow
                            </Text>
                            <Text style={styles.headerSubNameStyle}>
                                Sr. Sales Executive@
                            </Text>
                        </View>
                    </View>
                </View>

                {/* List */}
                <View style={styles.drawerListContainer}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                        <TouchableOpacity onPress={() => Actions.drawerToggle()}>                
                            <View style={styles.drawerNameImgContainer}>
                                <Image style={styles.drawerLabelImgStyle}
                                    source={require('./Assets/Icons/home_normal_sidebar.png')}/>

                                <Text style={styles.drawerLabelStyle}>
                                    {item.home}
                                </Text>  
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.Shops()}>                
                            <View style={styles.drawerNmaeImgContainer2}>
                                <Image style={styles.drawerLabelImgStyle2}
                                    source={require('./Assets/Icons/Shop_sidebar.png')}/>
                                <Text style={styles.drawerLabelStyle2}>
                                        {item.shops}
                                </Text> 
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Actions.CreateNewOrderFirst()}>                
                            <View style={styles.drawerNmaeImgContainer2}>
                                <Image style={styles.drawerLabelImgStyle2}
                                    source={require('./Assets/Icons/Shop_sidebar.png')}/>
                                <Text style={styles.drawerLabelStyle2}>
                                        CreateNewOrderFirst
                                </Text> 
                            </View>
                        </TouchableOpacity>

                         <TouchableOpacity onPress={() => Actions.TabBarSurveys()}>                
                            <View style={styles.drawerNmaeImgContainer2}>
                                <Image style={styles.drawerLabelImgStyle2}
                                    source={require('./Assets/Icons/Shop_sidebar.png')}/>
                                <Text style={styles.drawerLabelStyle2}>
                                        Surveys
                                </Text> 
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Footer Styles */}
                <View  style={styles.footerMainContainer}>
                    <View style={styles.zyleminiTextContainer}>
                        <Text style={styles.zylememiniTextStyle}>ZYLEMINI</Text>
                    </View>

                    <View style= {styles.middleLineTextContainer}>
                        <View style= {styles.PPtextContainer}>
                            <Text  style = {styles.PPTextStyle}>
                                Privacy Policy 
                            </Text>
                        </View>

                        <View style= {styles.SNTextContainer}>
                            <Text  style = {styles.SNTextStyle}>
                                Security Notice
                            </Text>
                        </View>

                        <View style= {styles.aboutTextContainer}>
                            <Text  style = {styles.aboutTextStyle}>
                                About
                            </Text>
                        </View>
                    </View>
                </View>

                <View >
                    <Text style={styles.copyRightTextStyle}>
                        opyright 2019 Smile Automation Pvt Ltd.
                    </Text>
                </View>
            </View>
            ))
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        // marginVertical: wp('5'),
        // marginHorizontal: hp('2')
    },

    headerBackgrounContainer: {
        flex:0.35,
        backgroundColor:'#F8F4F4',
    },

    headerContainer: {
        flex: 0.3, 
        marginTop:hp('10'), 
        flexDirection:'row',
    },

    headerImgContainer: {
        flex:0.7, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center', 
    },

    headerImgStyle: {
        width: wp('23'), 
        height: hp('13'),
    },

    headerTextContainer: {
        flex:1.5, 
        flexDirection:'column', 
        justifyContent:'center', 
        marginLeft:wp('5'),
    },

    headerNameStyle: { 
        fontSize: wp('5'), 
        fontWeight: 'bold', 
        fontFamily: 'Proxima Nova', 
        color: '#362828', 
    },

    headerSubNameStyle: {
        fontSize: wp('3'), 
        fontFamily: 'Proxima Nova',
        color: '#362828',
    },

    drawerListContainer: {
        flex:1,
        marginTop:hp('4'),
        marginHorizontal:hp('4'),
    },

    drawerNameImgContainer: {
        flexDirection:'row', 
        alignItems:'flex-start',
        alignItems:'center',
    },

    drawerLabelImgStyle: {
        width: wp('6'), 
        height: hp('4'),
    },

    drawerLabelStyle: {
        color:'#362828', 
        fontFamily: 'Proxima Nova', 
        fontSize:hp('2.5'),
        marginLeft:wp('4'),
    },

    drawerNmaeImgContainer2: {
        flexDirection:'row', 
        alignItems:'flex-start',
        alignItems:'center',
        marginTop:hp('4'), 
    },

    drawerLabelImgStyle2: {
        width: wp('6'), 
        height: hp('4'),
    },

    drawerLabelStyle2: {
        color:'#362828', 
        fontFamily: 'Proxima Nova', 
        fontSize:hp('2.5'),
        marginLeft:wp('4'),
    },

    footerMainContainer: {
        flex: 0.3, 
        flexDirection:'column',
    },

    zyleminiTextContainer: {
        flexDirection:'column',
        alignItems:'center', 
        justifyContent:'center',
    },

    zylememiniTextStyle: {
        fontSize:wp('12'),
        fontWeight:'bold',
        color:'brown',
    },

    middleLineTextContainer: { 
        flex:0.1, 
        flexDirection:'row', 
        marginLeft:wp('5'), 
    },

    PPtextContainer: { 
        flex: 0.5, 
        flexDirection:'column', 
    },

    PPTextStyle: {  
        color: '#362828', 
        fontSize: wp('2.5'), 
        fontFamily: 'Montserrat', 
        marginTop:hp('2'), 
    },

    SNTextContainer: { 
        flex: 0.7, 
        flexDirection:'column',
        alignItems:'flex-start', 
        alignItems:'center',
    },

    SNTextStyle: {  
        color: '#362828', 
        fontSize: wp('2.5'), 
        fontFamily: 'Montserrat', 
        marginTop:hp('2'), 
        marginLeft:wp('7'),
    },

    aboutTextContainer: { 
        flex: 0.5, 
        flexDirection:'column', 
        alignItems:'flex-end', 
        marginRight:wp('5'), 
    },

    aboutTextStyle: {  
        color: '#362828', 
        fontSize: wp('2.5'),
        marginTop: hp('2'), 
        fontFamily: 'Montserrat',  
    },

    copyRightTextStyle: {
        color: '#868686', 
        fontSize: wp('2.5'), 
        marginLeft:wp('5'),
        marginBottom:hp('3'),
        marginTop:hp('-1'), 
        fontFamily: 'Montserrat',  
    },


});