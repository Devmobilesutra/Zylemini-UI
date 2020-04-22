import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput,ImageBackground, BackHandler } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';

import Logo from '../../Components/Common/Logo';
import Form from './Form';


export default class Login extends Component {
// ForgetUserIdOrPass() {
//     Actions.Main()
// }

render() { 
  // const { navigation } = this.props;
    return ( 
        <View style={styles.container}>
         <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('100'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
          >
        <ScrollView 
           showsVerticalScrollIndicator={false}
        >
          <Logo/>
          {/* <Form navigation={navigation}/> */}
          <View style={styles.containerForm}>
                <TextInput style={styles.inputBox} 
                // placeholder={CommonStrings.userId}
                // placeholder={"@string/app_name"}
                placeholder= "User Id"
                placeholderTextColor= "grey"
                selectionColor= "black"
                keyboardType= "default"
                // onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox} 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor= "grey"
                selectionColor= "black"
                keyboardType= "default"
                // ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} onPress={() =>  Actions.drawerMenu()} >
                  <Text style={styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
              
            </View>

          <View style={styles.forgetTextCont}>
              <TouchableOpacity  onPress={() =>Actions.ForgetUserIdOrPass() }>
                <Text style={styles.forgetText}>Forget User ID or Password? </Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
        </ImageBackground>
        </View>
         );
    }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   forgetTextCont : {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: hp('3'),
    flexDirection: 'row',
  },
   forgetText : {
    color: '#362828',
    fontSize: hp(2),
    fontFamily: 'Proxima Nova',
  },
  containerForm: {
      flexGrow: 1,
      // justifyContent: 'center',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: hp('7')
    },
    inputBox: {
        width: wp('90'),
        height: hp('8'),
        borderColor: '#E6DCDC',
        borderWidth: wp('0.5'),
        paddingHorizontal: hp('3'),
        fontSize: hp(2),
        color: 'black',
        marginVertical: hp('1.5'),
        borderRadius: wp('2'),
    },
    buttonText: {
      fontSize: 16,
      // fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontFamily: 'Proxima Nova'

    },
    button: {
      width: wp('90'),
      height: hp('8'),
      backgroundColor: '#362828',
      borderRadius: wp('2'),
      marginVertical: 10,
      paddingVertical: 13,
      justifyContent: 'center',
    }
 
  
});
