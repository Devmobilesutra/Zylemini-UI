/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Login from '../LoginComponent/Login';
import RouteMain from '../../RouteMain'
import { Actions } from 'react-native-router-flux';

import Logo from '../../Components/Common/Logo';

export default class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result')},
            2000
        )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
      // this.props.navigation.natigate('RouteMain');
      // <RouteMain/>
    }
  }


// async componentDidMount = () => {
//     // Preload data from an external API
//     // Preload data using AsyncStorage
//     const data = await this.performTimeConsumingTask();

//     if (data !== null) {
//       // this.props.navigation.navigate('Login');
//       Actions.Login()
//     };
// }

render(){
    return (
      <View style={styles.viewStyles}>
          <ImageBackground
                source={require('../../Assets/Icons/splashBottom.png')}
                 style={{height:hp('100'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
          >
              <View style={{flexGrow: 1,alignItems: 'center',justifyContent: 'flex-start',marginTop:hp('20')}}>
                <Image style={{width: wp('30'), height: hp(19)}}
                  source={require('../../Assets/Icons/zylemini_logo.png')}/>
              </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};
