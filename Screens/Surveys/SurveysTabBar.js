import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';



export default class SurveysTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.backArrowContainer}>
                        <TouchableOpacity   onPress={() =>Actions.drawerMenu() }>  
                            <Image  style={styles.backArrowStyle}
                                source = {require('../../Assets/Icons/Back_White.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.assetLabelStyle}> Surveys </Text>
                    </View>

                    
                <Image  style={styles.searchIconStyle}
                    source = {require('../../Assets/Icons/SearchHeader.png')}
                />    
                </View> 

            </View>
        );
    }
}

const styles = StyleSheet.create({

  mainContainer:{
    flexDirection:'row',
    backgroundColor: '#221818', 
    color: '#fff', 
    height:hp('8'),
  },

  backArrowContainer: {
    flexDirection:"row", 
    alignItems:'flex-start',
    flex:1,
    alignSelf:'center',
  },

  backArrowStyle:{
    marginLeft:wp('4'),
  },

  assetLabelStyle:{ 
    color: '#FFFFFF', 
    fontSize:RFValue(20), 
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    alignSelf:'center', 
    marginLeft:wp('7'),
  },

  searchIconStyle:{
    marginRight:hp('2'),
    marginBottom:hp('0.5'), 
    height:hp('4'), 
    width:wp('6'),
    alignSelf:'center',
  },

});