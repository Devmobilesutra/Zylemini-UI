import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import CommonStrings from '../../Components/CommonStrings/CommonStrings';
import { Actions } from 'react-native-router-flux';
// import Route from '../../Screens/Route/Route'



export default class Form extends Component {
// Dashboard() {
//     Actions.Dashboard()
//   }
  
  // Route() {
  //   Actions.Route()
  // }
  

    render() { 
      
         return ( 
            <View style={styles.container}>
            
                <TextInput style={styles.inputBox} 
                // placeholder={CommonStrings.userId}
                // placeholder={"@string/app_name"}
                placeholder= "User Id"
                placeholderTextColor= "grey"
                selectionColor= "black"
                onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox} 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor= "grey"
                selectionColor= "black"
                ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('Main')} >
                  <Text style={styles.buttonText} > LOGIN </Text>
                </TouchableOpacity>
              
            </View>
           );
      }
  }
  const styles = StyleSheet.create({
    container: {
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
    }
  });