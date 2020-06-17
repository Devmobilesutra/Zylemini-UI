import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import EditInlineDataCollection from './EditInlineDataCollection';



const list = [
    {
        name: 'Name of SubBrand Name of SubBrand  Name of SubBrand ',
        amount: '12 6BC',
        button: 'EDIT',
    },
     {
        name: 'Name of SubBrand',
        amount: '',
        button: 'ADD',
    },
    
];

export default class SublistDataCollection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: 'false',
            collapsed:false,
         };
    }
    render() {
        const { navigation } = this.props;
        // if( this.props.radioVal == 0 )
        // {
        return (
              <View style = {styles.Container}> 
              {
               list.map((item, index) => (
                 <Collapse 
                   //onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                 >  
                 <CollapseHeader style = {styles.listInnerContainer}>
                    {/* 28-03 */}
                    <View style={styles.nameOfBrandContainer}>
                      <Text style={styles.nameTextStyle}>
                          {item.name}
                      </Text>
                    </View>
                    <View style={styles.amountContainer}>                   
                      <Text style={styles.amountTextStyle} >
                          {item.amount}
                      </Text>

                      <Text style={styles.buttonTextStyle}>
                          {item.button}
                      </Text>
                    </View>
                 </CollapseHeader>
                   <CollapseBody>
                        <ListItem >
                        <EditInlineDataCollection navigation={navigation} radioVal2={this.props.navigation.state.params.valueRadio}/>
                        </ListItem>
                    </CollapseBody>
                 </Collapse>   
               ))
            }
         </View>
            
        );
        // }
        // else{
        //   return(<View><Text>noooo</Text></View>)
        // }
    }
}

const styles = StyleSheet.create({

  Container: {
    marginTop: hp('-2'),
    alignItems:'center',
    alignSelf:'center',
  },

  listInnerContainer: { 
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6DFDF',
    borderRadius: wp('1'), 
    height: hp('8'), 
    width: wp('88'),
    alignSelf:'center',
    justifyContent:'center',
    borderWidth: hp('0.2'),
    marginLeft: wp('1.5'),
    marginTop: hp('-0.5'),
  },

  nameOfBrandContainer: { 
    flex:3.2,                                                                                  //28-03
    alignItems: 'flex-start',
  },

  nameTextStyle: { 
    // flex:1,
    // marginLeft:wp('5'),
    // fontFamily: 'Proxima Nova', 
    // fontSize: wp('3'),
    // color:'#362828',
    marginLeft:wp('5'),
    marginRight:wp('1'),
    fontFamily: 'Proxima Nova', 
    fontSize:RFValue(13), 
    color:'#362828'
  },

  amountContainer: { 
    flex:1, 
    alignItems:'flex-end', 
    flexDirection:'row', 
    justifyContent:'flex-end', 
    marginRight:wp('3'),
  },

  amountTextStyle: { 
    marginRight:wp('3'), 
    color:'#CC1167',
    fontFamily: 'Proxima Nova', 
    fontSize: wp('3'),
    fontWeight: 'bold',
  },

  buttonTextStyle: { 
    color:'#3955CB',
    fontFamily: 'Proxima Nova',
    fontSize: wp('3'),
    fontWeight: 'bold',
  },

})
