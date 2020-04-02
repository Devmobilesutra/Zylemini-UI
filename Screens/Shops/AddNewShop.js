import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

import NextButton from '../../Components/Common/NextButton';

export default class AddNewShop extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

static navigationOptions = {
    title: 'Add New Party',
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
            <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    ),  
}
    render() {
        return (
        <View>
         <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        OUTLET NAME
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>

            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        OWNER NAME
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>
            
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        ADDRESS
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>

            <View style={styles.AddLocMainContainer}>
                <View style={styles.AddLocRowContainer}>
                    <View style={styles.AddLocTextContainer}>
                        <Text style={styles.AddLocTextStyle}>
                                ADD LOCATION
                        </Text>
                    </View>
                    
                    <View style={styles.deviceLocationColContainer}>
                        <Text style={styles.deviceLocTextStyle}>
                            Turn on the device location
                        </Text>
                    </View>
                </View>

                <View style={styles.addLocTextBoxMainCont}>
                   <View style={styles.addLocTextBoxColCont}>
                        <TextInput
                                placeholder= "Type Here"
                                style={styles.addLocTextBoxStyle}
                                // onChangeText={text => onChangeText(text)}
                                // value={Type Here}
                        />
                    </View>
                    <View style={styles.addLocBGStyle}>
                        <TouchableOpacity>
                         <Image style={styles.addLocImgStyle}
                                source = {require('../../Assets/Icons/geo_location.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

             <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        ADD PICTURES
                    </Text>
                </View>

                <View style={styles.horiIMGSMainCont}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        
                        <View style={styles.imgBG}>
                            <Image  styles={styles.imgStyle}
                                source = {require('../../Assets/Icons/Add_Images.png')}/>
                        </View>

                        <View style={styles.imgBG}>
                            <Image  styles={styles.imgStyle}
                                source = {require('../../Assets/Icons/Add_Images.png')}/>
                        </View>

                        <View style={styles.imgBG}>
                            <Image  styles={styles.imgStyle}
                                source = {require('../../Assets/Icons/Add_Images.png')}/>
                        </View>

                        <View style={styles.lastIMGBG}>
                            <Image  styles={styles.imgStyle}
                                source = {require('../../Assets/Icons/Add_Images.png')}/>
                        </View>


                    </ScrollView> 
                </View>
            </View>


        <View style={{marginTop:hp('6')}}></View>
            </ScrollView>
            {/* Next Button */}
            <View>
                <TouchableOpacity>
                    <NextButton/>
                </TouchableOpacity>
            </View>
         </ImageBackground>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    OODMainContainer: {
        flex:1,
    },

    OODTextStyle: { 
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'),
    },

    OODTextBoxMainContainer:{
        flex:1, 
        marginTop:hp('1.5')
    },

    OODTextBoxSelfContainer:{ 
        height: hp('9'), 
        width:wp('89'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1,
        borderRadius:wp('2') , 
        backgroundColor: '#ffffff',
        alignSelf:'center', 
        padding: 15,
    },

    AddLocMainContainer:{
        flexDirection:'column',
    },

    AddLocRowContainer:{
        flex:1, 
        flexDirection:'row',
    },

    AddLocTextContainer:{ 
        flex:1,
        alignItems:'flex-start', 
        flexDirection:'column',
    },

    AddLocTextStyle:{  
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'), 
    },

    deviceLocationColContainer:{ 
        flex:1, 
        alignItems:'flex-end', 
        flexDirection:'column',
    },

    deviceLocTextStyle:{
        flex:1, 
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop:hp('3'),
        alignItems:'flex-end',
        marginRight:wp('6'), 
    },

    addLocTextBoxMainCont:{
        marginTop:hp('1.5'), 
        flexDirection:'row',
        alignSelf:'center',
    },

    addLocTextBoxColCont:{
        flexDirection:'column',
    },

    addLocTextBoxStyle:{ 
        height: hp('9'),
        width:wp('80'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1, 
        borderRadius:wp('2') , 
        backgroundColor: '#ffffff',
        alignSelf:'center', 
        padding: 15, 
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderColor:'#E6DFDF', 
        borderRadius: wp('2%'), 
        borderRightWidth:hp('0'),
        borderTopRightRadius: wp('0'), 
        borderBottomRightRadius: wp('0'),
    },

    addLocBGStyle:{
        flexDirection:'column',
        backgroundColor:'#ffffff',  
        height:hp('9'),
        width:wp('8'),
        justifyContent:'center',                                    
        borderRightWidth:hp('0.18'), 
        borderTopWidth:hp('0.18'),                                 
        borderBottomWidth:hp('0.18'),                              
        borderTopRightRadius: wp('2'),
        borderTopLeftRadius: wp('0'), 
        borderBottomRightRadius: wp('2'), 
        borderBottomLeftRadius: wp('0'),  
        borderColor:'#E6DFDF', 
    },

    addLocImgStyle:{
        height:hp('4'), 
        width:wp('8'), 
        alignSelf:'center', 
        marginRight:wp('3'),
    },

    horiIMGSMainCont:{
        flex:1, 
        marginTop:hp('3'), 
        marginLeft:wp('3'),
    },

    imgBG:{
        backgroundColor:'#E6DFDF', 
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('2'),
    },

    imgStyle: {
        alignSelf:'center',  
    },

    lastIMGBG:{
        backgroundColor:'#E6DFDF', 
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('2'), 
        marginRight:wp('2'),
    },
});