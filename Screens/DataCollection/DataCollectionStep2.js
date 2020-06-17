import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground,
                FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import { Searchbar} from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

import NextButton from '../../Components/Common/NextButton';
import DropdownCommon from '../../Components/Common/DropdownCommon';
import SublistDataCollection from './SublistDataCollection';
// import SublistDataCollectionStock from './SublistDataCollectionStock';


export default class DataCollectionStep2 extends Component {
constructor(props) {
    super(props);
    this.state = { 
        productChoose: 'false',
        collapsed:false,
        rv: '',
    };
}

static navigationOptions = {
  title: 'Data Collection : Step 2/3',
  color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff',
        fontSize: RFValue(15),
    },

    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.DataCollectionStep1() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    )                               
}

componentDidMount() {
//     try {
//   const value =  AsyncStorage.getItem('radioVlueAsc');
//   alert(value)
//   if (value !== null) {
//     // We have data!
//     console.log(value);
//   }
// } catch (error) {
//   // Error retrieving data
// }


    // let radioVlueAsc = AsyncStorage.getItem('radioVlueAsc');  
    // // let parsed = JSON.parse(radioVlueAsc);
    // let stringifyData = JSON.stringify(radioVlueAsc)  
    // alert(stringifyData);

    // AsyncStorage.getItem('radioVlueAsc').then(value =>
    // //AsyncStorage returns a promise so adding a callback to get the value
    // this.setState({ rv: radioVlueAsc }),
    // console.log("rv", this.state.rv)
    // //Setting the value in Text
    //);

}


SchemesArrow(){
    if( this.state.collapsed == false){
        return(
            <View>
            <Image style={styles.downSublistArrowStyle} 
                source = {require('../../Assets/Icons/Add.png')}/>
            </View>
        )
    }
    else {
        return(
            <View>
            <Image style={styles.downSublistArrowStyle} 
                source = {require('../../Assets/Icons/minus_white.png')}/>
            </View>
        )
    }
}



searchResult(){
    const { navigation } = this.props;
    if( this.state.productChoose == 'true' ){
        // if(this.props.navigation.state.params.valueRadio == 0){
            return(
                <View> 
                    <View style={styles.searchResultsResulContainer}>
                        
                        <Collapse 
                            //isCollapsed={this.state.collapsed} 
                            onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
                            // onToggle={this.toggle()}
                        >
                        <CollapseHeader style={styles.collapseHeaderStyle}>
                            <View style={styles.nameOfBrandContainer}>
                                    <Text style= {styles.nameOfBrandTextStyle}>
                                        Name of Brand Name of Brand  Name of Brand Name of Brand  Name of Brand  Name of Brand 
                                    </Text>
                            </View>
                            <View style={styles.schemesIconContainer}>
                                    <View style={styles.roundedtext}></View>
                            </View>
                            <View style={styles.schemesDownArrowContainer}>
                                                {/* <Image style={styles.downSublistArrowStyle} 
                                                        source = {require('../../Assets/Icons/Add.png')}/> */}
                                {this.SchemesArrow()}
                            </View>  
                            
                        </CollapseHeader>
                        <CollapseBody>
                            <ListItem >
                            <SublistDataCollection navigation={navigation} radioVal={this.props.navigation.state.params.valueRadio} />
                            </ListItem>
                        </CollapseBody>
                    </Collapse>  
                </View>
            </View>
            );
        // }
        // else if(this.props.navigation.state.params.valueRadio == 1){ 
        //     return(
        //         <View> 
        //             <View style={styles.searchResultsResulContainer}>
                        
        //                 <Collapse 
        //                     //isCollapsed={this.state.collapsed} 
        //                     onToggle={( )=>this.setState({collapsed:!this.state.collapsed})}
        //                     // onToggle={this.toggle()}
        //                 >
        //                 <CollapseHeader style={styles.collapseHeaderStyle}>
        //                     <View style={styles.nameOfBrandContainer}>
        //                             <Text style= {styles.nameOfBrandTextStyle}>
        //                                 Name of Brand Name of Brand  Name of Brand Name of Brand  Name of Brand  Name of Brand 
        //                             </Text>
        //                     </View>
        //                     <View style={styles.schemesIconContainer}>
        //                             <View style={styles.roundedtext}></View>
        //                     </View>
        //                     <View style={styles.schemesDownArrowContainer}>
        //                                         {/* <Image style={styles.downSublistArrowStyle} 
        //                                                 source = {require('../../Assets/Icons/Add.png')}/> */}
        //                         {this.SchemesArrow()}
        //                     </View>  
                            
        //                 </CollapseHeader>
        //                 <CollapseBody>
        //                     <ListItem >
        //                     <SublistDataCollectionStock navigation={navigation}/>
        //                     </ListItem>
        //                 </CollapseBody>
        //             </Collapse>  
        //         </View>
        //     </View>
        //     ); 
        // }
}
}

render() {
 
    // if(  this.props.navigation.state.params.valueRadio == 0)  for radio value
    return (
      <View style = {{ flex: 10 }}>
        <ImageBackground
            source={require('../../Assets/Icons/android_BG.png')}
            style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        >
        <ScrollView
            showsVerticalScrollIndicator={false}
        > 
             {/* Store Name Id and History */}
                 <View style = {{ flex:0.1 }}>
                    <View style= {styles.storeInfoMainContainer}>
                        <View style= {styles.storeTextContainer}>
                            <Text  style = {styles.storeNameText}>
                                MANGALAM STORE
                            </Text>
                        </View>
                    </View>

                <View style= {{ flexDirection:'row' }}>
                     <Text  style = {styles.storeIdText}>
                        Store ID :
                    </Text>

                     <Text  style = {styles.storeIdStyle}>
                         0122
                    </Text>
                </View>
                </View>

                {/* Dash Line */}
                <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
                </View>

                 <View style = {styles.textDropdownContainer}>
                    <Text style = {styles.dropdownheadingTitleText}>CHOOSE PRODUCT</Text>
                    <Searchbar
                          style={styles.searchbarContainerStyle}
                          theme={false}
                          icon= {false}
                          placeholder="Search"
                          onChangeText={ query => { this.setState({ productChoose: 'true' });}}
                        //   value={firstQuery}
                    />
                </View>
                {/* search results */}
                <View style= {styles.searchResultTextRowContainer}>
                    <View style= {styles.searchResultTextColContainer}>
                            <Text  style = {styles.searchResultText}>
                                Search Results
                            </Text>
                    </View>

                    <View style= {styles.CPDMaintContainer}>
                        <View>
                            <Text  style = {styles.CPDTextStyle}>
                                Collected Product Data
                            </Text>
                        </View>
                        <View style={styles.roundedtextBlue}>
                            <Text style={styles.roundInnerValue}> 
                                10
                            </Text>
                        </View>
                    </View>
                </View>

                {this.searchResult()}

        </ScrollView>
            {/* Next Button */}
            <View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DataCollectionStep3',
                    {
                        valueRadio1: this.props.navigation.state.params.valueRadio,
                    }
                )}>
                    <NextButton/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    );
}
}


const styles = StyleSheet.create({
    storeInfoMainContainer: {
        flex:1, 
        flexDirection:'row',
    },

    storeTextContainer: {
        flex: 0.5, 
        flexDirection:'column', 
    },

    historyTextContainer: {
        flex: 0.5, 
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    storeNameText: {
        color: '#796A6A', 
        fontSize: wp('3.5%'), 
        fontWeight: 'bold', 
        marginTop: hp('3%'), 
        marginLeft: wp('6%'), 
        fontFamily: 'Proxima Nova',
    },

    historyText: {
        color: '#3955CB', 
        fontSize: wp('3%'), 
        fontWeight: 'bold', 
        marginTop: hp('3%'), 
        fontFamily: 'Proxima Nova', 
        marginRight: wp('9%'),
    },

    storeIdText: {
        color: '#796A6A', 
        fontSize: wp('2%'), 
        fontWeight: 'bold', 
        marginTop: hp('1%'), 
        marginLeft: wp('6%'), 
        fontFamily: 'Proxima Nova'
    },

    storeIdStyle: {
        color: '#796A6A', 
        fontSize: wp('2%'), 
        marginTop: hp('1%'),
        marginLeft: hp('2%'),
        fontFamily: 'Proxima Nova', 
        alignContent: 'flex-end',
    },

    dashLineContainer: {
        flex:1, 
        marginTop:hp('2'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('89'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },

    textDropdownContainer : {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: hp('2'),
        //   marginVertical: hp('3'),
        marginHorizontal: wp('4'),
    },

    dropdownheadingTitleText : {
        fontSize: wp('3'), 
        color: '#796A6A',
        fontWeight: 'bold',
        fontFamily:'Proxima Nova',
        marginLeft: wp('1'),
        marginVertical: wp('1'),
    },

    searchbarContainerStyle: {
        height:hp('9'),
        width:wp('88'),
        borderColor: '#E6DFDF',
        borderWidth: wp('0.4'),
        borderRadius: wp('2'),
        marginTop: hp('1'),
        alignSelf:'center',
        elevation: 0,    
    },

    searchResultTextRowContainer: { 
        flex:1, 
        flexDirection:'row' 
    },

    searchResultTextColContainer: { 
        flex:0.5, 
        flexDirection:'column', 
    },

    searchResultText: {
        color:'#8C7878',
        // fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
        fontSize:RFValue(12), 
        marginTop: hp('3'), 
        marginLeft: wp('5'), 
        fontFamily: 'Proxima Nova',
    },

    CPDMaintContainer:{ 
        flex:0.5, 
        flexDirection:'row', 
        alignItems:'flex-end'
    },

    CPDTextStyle:{ 
        color: '#3955CB', 
        fontFamily: 'Proxima Nova',   
        fontSize:RFValue(12), 
        fontWeight: 'bold', 
        justifyContent:'center', 
        alignItems:'center',
        marginRight: wp('2'), 
        marginLeft: wp('3')
    },

    roundedtextBlue: {
        width: 25,
        height: 25, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25 / 2,
        backgroundColor: "#3955CB",
        borderColor: '#3955CB',
        borderWidth: 3,
    },

    roundInnerValue: {
        color: '#ffffff', 
        fontFamily: 'Proxima Nova',  
        fontSize:RFValue(13), 
    },

    searchResultContainer: {
        flex:1, 
        alignItems:'flex-start', 
        marginHorizontal: hp('3'),
        marginTop: wp('2'),
        marginTop: hp('3'),
    },

    searchResultsResulContainer: {
        flex:1,
        marginTop: wp('4')
    },

    collapseHeaderStyle: {
        alignItems:'center' ,
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:  '#ffffff',
        borderColor: '#E6DFDF',
        borderRadius: wp('2'), 
        height: hp('9'), 
        width: wp('88'),
        borderWidth: hp('0.2'), 
        // marginHorizontal: wp('4'),
    },

    nameOfBrandContainer: { 
        flex:3,                                                                                  //28-03
        alignItems: 'flex-start',
    },

    nameOfBrandTextStyle: {
        marginLeft:wp('5'),
        fontFamily: 'Proxima Nova', 
        fontSize:RFValue(13), 
        color:'#362828'
    },

    schemesIconContainer: { 
        flex:1,                                                                                 //28-3
        alignItems: 'flex-end', 
        flexDirection:'row',
        //marginRight: wp('-4')
    },

    schemesDownArrowContainer: {
        // marginRight:wp('6'),
    },

    schemesIconStyle: { 
        marginLeft: wp('27'), 
    },

    roundedtext: {
        width: 18,
        height: 18, 
        //flexWrap:"wrap",                                                  //28-03
        //   justifyContent: 'center',
        //   alignItems: 'center',
        borderRadius: 18 / 2,
        backgroundColor: "#EAA304",
        borderColor: '#EAA304',
        borderWidth: 3,
        marginLeft: wp('12'),                                               //28-03                                                                              
    },

    downSublistArrowStyle: { 
        // marginLeft: wp('2'), 
        height:hp('4'),
        width:wp('7'),
        marginRight: wp('4'),
    },

    filterButtonContainer: {
        alignItems:'flex-end',
    },





});