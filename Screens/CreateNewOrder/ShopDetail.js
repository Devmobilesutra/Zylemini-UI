import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

import SublistExtended from './SublistExtended';
import ShopDetailExtended from './ShopDetailExtended'


export default class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          collapsed:false,
         };
    }

  ToggleArrow(){
    if( this.state.collapsed == false){
        return(
          <View>
              <Image style={styles.rightArrowStyle} 
                    source = {require('../../Assets/Icons/right_arrow_front.png')}/>
          </View>
      )
    }
    else {
        return(
          <View>
                <Image style={styles.rightArrowStyle} 
                    source = {require('../../Assets/Icons/right_arrow.png')}/>
          </View>
        )
    }
  }



    render() {
      console.log(this.props.name);
        const { navigation } = this.props;
        return (
            <View style={styles.Container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <Collapse 
                       onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                    >
                    <CollapseHeader style={styles.collapseHeaderStyle}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageStyles} 
                                source = {require('../../Assets/Icons/shopImg.png')}/>
                        </View>
                         <View style={styles.shopDetailsContainer}>
                            <Text style={styles.shopNameTextStyle}>
                                {this.props.name}
                            </Text >
                            <Text style={styles.shopAddressTextStyle}>
                                Kothrud, Pune
                            </Text>
                            <Text style={styles.shopDistanceTextStyle}>
                                1 Km Away     ETA 5Mins
                            </Text>
                        </View>
                        <View style={styles.rightArrowContainer}>
                            {this.ToggleArrow()}
                                        
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <ListItem >
                        <ShopDetailExtended navigation={navigation}/>
                        </ListItem>
                    </CollapseBody>
                    </Collapse>  
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

  Container:{
    flex:1,
    marginTop:hp('1'),
    marginLeft:wp('-3'),
    alignItems: 'center',
    alignSelf: 'center',
  },

  collapseHeaderStyle: {
    alignItems:'center' ,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6DFDF',
    borderRadius: wp('2'), 
    height: hp('18'), 
    width: wp('90'),
    borderWidth: hp('0.2'), 
    marginHorizontal: wp('4'),
  },

  imageContainer: { 
    flex:1, 
    alignItems: 'flex-start',
  },

  imageStyles: { 
    marginLeft: wp('5'),
    height:hp('10'),
    width:wp('18'),
  },

  shopDetailsContainer: { 
    flex:1.5, 
    flexDirection:'column', 
    alignItems: 'flex-start',
    marginTop: hp('-3'),
    marginLeft: wp('4'),
  },

  shopNameTextStyle: { 
    color:'#796A6A',  
    fontWeight: 'bold',
    fontFamily:'Proxima Nova', 
    fontSize:wp('4'),
    marginTop: hp('3'),
  },

  shopAddressTextStyle: { 
    color:'#796A6A', 
    fontFamily:'Proxima Nova', 
    fontSize:wp('3'), 
    marginVertical:wp('3'),
  },

  shopDistanceTextStyle: { 
    color:'#796A6A', 
    fontFamily:'Proxima Nova', 
    fontSize:wp('3'),
  },
  
  rightArrowContainer: { 
    flex:1, 
    alignItems: 'flex-end', 
    flexDirection:'row',
    marginTop:hp('-8'),
    marginRight:wp('6')
  },

  rightArrowStyle : { 
    marginLeft: wp('20'),
  },

})
