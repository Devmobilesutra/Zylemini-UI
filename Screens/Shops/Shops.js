import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Dash from 'react-native-dash';
import { FloatingAction } from "react-native-floating-action";



const data = [{
    value: 'Route 1',
    }, {
    value: 'Route 2',
    }, {
    value: 'Route 3',
    }, {
    value: 'Route 4',
    },
    {
    value: 'Route 5',
    },
    {
    value: 'Route 6',
    },
];

const actions = [
  {
    text: "Add New Shop",
    color: 'transperent',
    name: "bt_accessibility", 
    position: 1,
  },

];

export default class Shops extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // cardView: false ,
        };
    }

static navigationOptions = {
    title: 'Shops',
    color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },
    // headerRight: <Image  source = {require('../../Assets/Icons/SearchHeader.png')}
    //                 source = {require('../../Assets/Icons/Card_View.png')}
    // />,
     headerRight: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            {/* <TouchableOpacity  onPress={(cardView)=>this.setState({cardView:!this.state.cardView})}>     */}
            <TouchableOpacity   onPress={() =>Actions.ShopCardView() }>  
                <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}
                    source = {require('../../Assets/Icons/Card_View.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}  
                    source = {require('../../Assets/Icons/List_View_Selected.png')}
                />
            </TouchableOpacity>

            <Image  style={{marginRight:hp('2'), marginBottom:hp('0.5'), height:hp('4'), width:wp('6'),}}
                source = {require('../../Assets/Icons/SearchHeader.png')}
            />
            
        </View>
 )
}

// CardOrListView(){
//     if(this.state.cardView == false)
//     {
//      return(
//         <View style={{marginTop:hp('3')}}>
//             <View style={{alignItems:'center' ,flexDirection:'row',backgroundColor: '#FFFFFF', 
//                             borderColor: '#E6DFDF', justifyContent:'center', alignSelf:'center',
//                             borderRadius: wp('2'), height: hp('18'),  width: wp('90'),borderWidth: hp('0.3'), 
//                             marginHorizontal: wp('4')}}>

//                 <View style={styles.imageContainer}>
//                         <Image style={styles.imageStyles} 
//                                 source = {require('../../Assets/Icons/shopImg.png')}/>
//                 </View>
//                 <View style={styles.shopDetailsContainer}>
//                         <Text style={styles.shopNameTextStyle}>
//                                 Shop Name
//                         </Text >
//                         <Text style={styles.shopAddressTextStyle}>
//                                 Kothrud, Pune
//                         </Text>
//                         <Text style={styles.shopDistanceTextStyle}>
//                                 1 Km Away     ETA 5Mins
//                         </Text>
//                 </View>
//                 <View style={{ flex:1, alignItems: 'flex-end', flexDirection:'row', marginLeft:wp('5')}}>
//                         <Text style={{color:'#3955CB', fontFamily:'Proxima Nova', fontSize:RFValue(15),}}>
//                             Call
//                         </Text>
//                 </View>
//             </View>
//         </View>
//         );
//     }

//     else
//     {
//      return(
//             <View>
//                 <Text>Hiii</Text>
//             </View>
//      );

//     }
// }



render() {
    return (
        <View style = {{ flex: 10 }}>
        <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        >
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style = {styles.headerMainContainer}>
                <Text style = {styles.todaysRouteTextStyle} >
                      TODAY'S ROUTE
                </Text>
                <Dropdown
                        placeholder= "Route 1"
                        value={'Route 1'}
                        itemCount = {4} 
                        dropdownOffset={{top:10}}
                        containerStyle={styles.dropDownContainer}
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        // fontSize = '10'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-5.4}
                        dropdownOffset={{top:20, left:18,}}
                        fontSize= {RFValue(15)}
                        fontFamily= 'Proxima Nova'
                    />
            </View>

            {/*Total Shops  */}
            <View style= {styles.totalShopsMainContainer}>
                <View style= {styles.totalShopColContainer}>
                    <Text  style = {styles.totalShopCountTextStyle}>
                            24
                    </Text>
                    <Text  style = {styles.totalShopHeadingTextStyle}>
                            Total Shops
                    </Text>

                </View>
                <View style= {styles.shopVisitedColContainer}>
                    <Text  style = {styles.shopVisitedCountTextContainer}>
                            10
                    </Text>
                    <Text  style = {styles.shopVisitedHeadingTextStyle}>
                            Shop Visited Today
                    </Text>

                </View>
                {/* Filter Icon */}
                <View style= {styles.filterIconContainer}>
                   <Image  source={require('../../Assets/Icons/filter_list_shop.png')}
                        style={styles.filterIconStyle}>
                    </Image>
                </View>
            </View>

             {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                />
            </View>

            {/* Shop LIST LIST VIEW */}
            {/* <View>
                {this.CardOrListView()}
            </View> */}
            <View style={styles.shopListMainContainer}>
              <TouchableOpacity onPress={() =>Actions.Info()}>
                <View style={styles.shopDetailBackStyle}>

                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyles} 
                                source = {require('../../Assets/Icons/shopImg.png')}/>
                    </View>
                    <View style={styles.shopDetailsContainer}>
                        <Text style={styles.shopNameTextStyle}>
                                Shop Name
                        </Text >
                        <Text style={styles.shopAddressTextStyle}>
                                Kothrud, Pune
                        </Text>
                        <Text style={styles.shopDistanceTextStyle}>
                                1 Km Away     ETA 5Mins
                        </Text>
                    </View>
                    <View style={styles.callContainer}>
                        <TouchableOpacity >
                            <Text style={styles.callTextStyle}>
                                Call
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            
        </ScrollView>

             <FloatingAction
                color='#a10d59'
                actions={actions}
                buttonSize= {hp('9.5')}
                // floatingIcon= {require('../../Assets/Icons/Floating.png')}
                // iconWidth={wp(20)}
                // iconHeight={hp(16)}
                iconWidth={wp(5)}
                iconHeight={hp(3)}
                shadow= 'null'
                overlayColor= '#221818'
                showBackground= {true}
                onPressItem={name => {
                    // Actions.CreateNewOrderFirst()
                    if(name = "bt_accessibility"){ 
                            Actions.AddNewShop()
                    }
                }}
            />
        </ImageBackground>
        </View>
    );
}
}

const styles = StyleSheet.create({

    headerMainContainer:{ 
        flex:0.3,
        backgroundColor: '#210305', 
    },

    todaysRouteTextStyle:{ 
        color:'#ADA2A2', 
        fontSize:RFValue(11), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('6'), 
        marginTop:hp('4'), 
    },

    dropDownContainer : {
        borderWidth:wp('0.5'), 
        borderColor:'#E6DFDF', 
        borderRadius: wp('2%'), 
        width: wp('90'), 
        height: hp('9'),
        marginTop: hp('2'), 
        paddingRight: wp('3%'), 
        marginVertical: hp('5'),
        marginHorizontal: wp('5'),
        backgroundColor: '#FFFFFF',
        paddingHorizontal:hp('2'), 
    },

    totalShopsMainContainer:{ 
        flex:1, 
        flexDirection:'row', 
        marginTop:hp('2'),
    },

    totalShopColContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    totalShopCountTextStyle: {  
        color: '#221818', 
        fontSize:RFValue(22), 
        fontWeight: 'bold',
        marginLeft: wp('11'), 
        fontFamily: 'Proxima Nova',   
    },

    totalShopHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold', 
        marginTop:hp('0.5'), 
        marginLeft: wp('6%'), 
        fontFamily: 'Proxima Nova', 
    },

    shopVisitedColContainer:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-start',
    },

    shopVisitedCountTextContainer:{  
        color: '#221818', 
        fontSize:RFValue(22), 
        fontWeight: 'bold', 
        marginLeft:wp('8'),
        fontFamily: 'Proxima Nova', 
        fontWeight: 'bold',  
    },

    shopVisitedHeadingTextStyle:{  
        color: '#8C7878', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',  
        marginTop:hp('0.5'),
        marginLeft:wp('-2'),
        fontFamily: 'Proxima Nova', 
    },

    filterIconContainer:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-end',
        marginTop:hp('1'),
    },

    filterIconStyle:{ 
        justifyContent: 'center',
        height:hp('4'),
        width:wp('8'), 
        marginRight:wp('5'),
    },

    dashLineContainer: {
        flex:1, 
        marginTop:hp('2.5'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('100'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },

    shopListMainContainer:{
        marginTop:hp('3'),
    },

    shopDetailBackStyle:{
        alignItems:'center' ,
        flexDirection:'row',
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        justifyContent:'center', 
        alignSelf:'center',
        borderRadius: wp('2'), 
        height: hp('18'),  
        width: wp('90'),
        borderWidth: hp('0.3'), 
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
        flex:3, 
        flexDirection:'column', 
        alignItems: 'flex-start',
        marginTop: hp('-3'),
        marginLeft: wp('15'),
    },

    shopNameTextStyle: { 
        color:'#796A6A',  
        fontWeight: 'bold',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(17),
        marginTop: hp('2.5'),
    },

    shopAddressTextStyle: { 
        color:'#796A6A', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(10), 
        marginTop:wp('3'),
    },

    shopDistanceTextStyle: { 
        color:'#796A6A', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(10),
        marginTop:wp('3'),

    },

    callContainer:{ 
        flex:1, 
        alignItems: 'flex-end', 
        flexDirection:'row', 
        marginLeft:wp('5'),
    },

    callTextStyle:{
        color:'#3955CB', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(15),
    },
})