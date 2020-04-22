import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';


const data = [{
    value: 'Shop 1',
    }, {
    value: 'Shop 2',
    }, 
];

export default class AddNewShopNext extends Component {
constructor(props) {
    super(props);
    this.state = { 

    };
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
            <TouchableOpacity   onPress={() =>Actions.Orders() }>  
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
                style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Contact Person */}
                <View style={styles.contactPersonMainContainer}>
                    <Text style={styles.contactPersonLabelStyle}>
                        CONTACT PERSON
                    </Text>
                </View>

                {/* Name */}
                <View>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            NAME
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <TextInput
                                placeholder= "Type Here"
                                style={styles.nameTextBoxSelfContainer}
                                // onChangeText={text => onChangeText(text)}
                            />
                    </View>
                </View>

                 {/* Mobile No */}
                <View>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            MOBILE NO.
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <TextInput
                                placeholder= "Type Here"
                                 keyboardType= "numeric"
                                style={styles.nameTextBoxSelfContainer}
                                // onChangeText={text => onChangeText(text)}
                            />
                    </View>
                </View>

                {/* Middle Gray Line */}
                <View style={{marginTop:hp('3')}}>
                    <View style={{height:hp('1'), width:wp('100'), backgroundColor:'#E6DFDF', }}></View>
                </View>

                {/* Shop Type */}
                <View style={{marginTop:hp('1')}}>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            SHOP TYPE
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <Dropdown
                        placeholder= 'Select'
                        itemCount = {4} 
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('89.2')}}
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-3.4}
                        dropdownOffset={{top:20, left:18,}}
                        rippleOpacity={0}
                    />
                    </View>
                </View>

                {/* Shop Id */}
                <View>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            SHOP ID
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <TextInput
                                placeholder= "Type Here"
                                //  keyboardType= "numeric"
                                style={styles.nameTextBoxSelfContainer}
                                // onChangeText={text => onChangeText(text)}
                            />
                    </View>
                </View>

                {/* Shop Area */}
                <View>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            SHOP AREA
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <Dropdown
                        placeholder= 'Select'
                        itemCount = {4} 
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('89.2')}}
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-3.4}
                        dropdownOffset={{top:20, left:18,}}
                        rippleOpacity={0}
                    />
                    </View>
                </View>

                {/* Shop Registration no */}
                <View>
                    <View style={styles.nameMainContainer}>
                        <Text style={styles.nameTextStyle}>
                            REGISTRATION NO.
                        </Text>
                    </View>
                    <View style={styles.nameTextBoxMainContainer}>
                        <TextInput
                                placeholder= "Type Here"
                                // keyboardType= "numeric"
                                style={styles.nameTextBoxSelfContainer}
                                // onChangeText={text => onChangeText(text)}
                            />
                    </View>
                </View>

            <View style={{marginTop:hp('10')}}></View>
            </ScrollView>
                {/* Register Button */}
                <TouchableOpacity>
                    <View>
                        <View style={styles.button}>
                            <Text style={styles.buttonText} > REGISTER </Text>
                        </View>
                    </View>
                </TouchableOpacity>
         </ImageBackground>
        </View>
    );
}
}

const styles = StyleSheet.create({
    contactPersonMainContainer:{
        marginTop:hp('4'),
        marginLeft:wp('5'),
    },

    contactPersonLabelStyle:{ 
        color:'#796A6A', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
    },

    nameMainContainer: {
        flex:1,
    },

    nameTextStyle: { 
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'),
    },

    nameTextBoxMainContainer:{
        flex:1, 
        marginTop:hp('1.5')
    },

    nameTextBoxSelfContainer:{ 
        height: hp('9'), 
        width:wp('90'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1,
        borderRadius:wp('2') , 
        backgroundColor: '#ffffff',
        alignSelf:'center', 
        padding: 15,
    },

    dropDownContainer : {
        borderColor:'#E6DFDF', 
        borderRadius: wp('2'), 
        width: wp('90'), 
        height: hp('9'),
        backgroundColor: '#FFFFFF',
        paddingHorizontal:hp('2'), 
        borderWidth:wp('0.3'), 
        alignSelf:'center',
        padding: -1,
    },

    button: {
        width: wp('100'),
        height: hp('8'),
        backgroundColor: '#46BE50',
        marginVertical: 1,
        paddingVertical: 15,
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
    },

});
