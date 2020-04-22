import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

import Shops from './Shops';

export default class Shop2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cardView: true ,
            listView: false , 
         };
    }


cardViewFunction =  () => {
    this.setState({ 
        cardView: true ,
        listView: false , 
    });
    // return(
    //     <Shops cardView={this.state.cardView} />
    // );
}

listViewFunction = () => {
    this.setState({ 
        cardView: false ,
        listView: true , 
    });
    //  return(
    //     <Shops listView={this.state.listView} />
    // );
}


    render() {
        return (
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.backArrowContainer}>
                        <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                            <Image  style={styles.backArrowStyle}
                                source = {require('../../Assets/Icons/Back_White.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
                        <TouchableOpacity   onPress={() => {this.cardViewFunction()}} >  
                            <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}
                                source = {require('../../Assets/Icons/Card_View.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => {this.listViewFunction()}} >
                            <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}  
                                source = {require('../../Assets/Icons/List_View_Selected.png')}
                            />
                        </TouchableOpacity>

                        <Image  style={{marginRight:hp('2'), marginBottom:hp('0.5'), height:hp('4'), width:wp('6'),}}
                            source = {require('../../Assets/Icons/SearchHeader.png')}
                        /> 
                    </View>
                </View>
            </View>    
        );
    }
}

const styles = StyleSheet.create({

  mainContainer:{
    flexDirection:'row',
    backgroundColor: '#221818', 
    // color: '#fff', 
    height:hp('8'),
  },

  backArrowContainer: {
    flexDirection:"column", 
    alignItems:'flex-start',
    flex:1,
    alignSelf:'center',
  },

  backArrowStyle:{
    marginLeft:wp('4'),
  },

});