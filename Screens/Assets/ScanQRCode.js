import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';


export default class ScanQRCode extends Component {
constructor(props) {
    super(props);
    this.state = { 

    };
}

render() {
    return (
        <View>
         <ImageBackground
                // source={require('../../Assets/Icons/android_BG.png')}
                 style={{backgroundColor:'grey',height:hp('100'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         > 
          <ScrollView
                    showsVerticalScrollIndicator={false}
          >
            <Text>QR CODE</Text>
          </ScrollView>
         </ImageBackground>
        </View>
    );
}
}