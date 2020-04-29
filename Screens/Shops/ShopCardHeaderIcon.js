import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

// name={this.state.query}

// data = {this.props.data}


export default class ShopCardHeaderIcon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
              
         };
    }

returnImg =  () => {
 if( this.props.cardView == false )
    {
        return (     
            <View>
                <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}
                        source = {require('../../Assets/Icons/Card_View.png')}
                    />
            </View>  
            );
    }
    else if( this.props.cardView == true )
    {
        return (     
            <View>
                <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'), color:'#2FC36E',
                                        tintColor:'#2FC36E'}}
                        source = {require('../../Assets/Icons/Card_View.png')}
                    />
            </View>  
            );
    }
}

    
    render() {
        return(
            <View>
                {this.returnImg()}
            </View>
        );
    }
}