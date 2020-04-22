import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RouteMain from './RouteMain';


console.disableYellowBox = true;

// import SplashScreen from './Screens/SplashScreenComponent/SplashScreen';
// import RouteMain from './RouteMain';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RouteMain />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


