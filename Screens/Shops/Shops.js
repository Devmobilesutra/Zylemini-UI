import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Dash from 'react-native-dash';
import { FloatingAction } from "react-native-floating-action";

import ShopCardHeaderIcon from './ShopCardHeaderIcon';
import ShopListHeaderIcon from './ShopListHeaderIcon';

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
            listView: true ,  
            cardView: false ,  
            myColor : 'blue',
        };
    }
componentWillMount() {

    this.props.navigation.setParams({
      cardView: this.state.cardView
    });

    this.props.navigation.setParams({
      listView: this.state.listView
    });

     this.props.navigation.setParams({
      myColor: this.state.myColor
    });


    this.props.navigation.setParams({
        handelCardView: this.cardViewFunction.bind(this)
    });

    this.props.navigation.setParams({
        handelListView: this.listViewFunction.bind(this)
    });

    // this.props.navigation.setParams({
    //     handelcardIMG: this.cardIMG.bind(this)
    // });
    
    // this.props.navigation.setParams({
    //     handellistIMG: this.listIMG.bind(this)
    // })

    // this.props.navigation.setParams({ handelcardIMG: this.cardIMG});
    // this.props.navigation.setParams({ handellistIMG: this.listIMG});
}


cardViewFunction =  () => {
    this.setState({ 
        cardView: true ,
        listView: false , 
    });
}

listViewFunction = () => {
    this.setState({ 
        cardView: false ,
        listView: true , 
    });
}

// cardIMG = () =>  {
//        <ShopCardHeaderIcon cardView={this.state.cardView}/>
//     if(this.state.cardView == true){
//         return(
//             <View>
//                 <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'), color:'#2FC36E',
//                                        tintColor:'#2FC36E'}}
//                             source = {require('../../Assets/Icons/Card_View.png')}
//                 />
//             </View>
//         );
//     }
//     else if(this.state.cardView == false){
//         return(
//             <View>
//                 <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}
//                             source = {require('../../Assets/Icons/Card_View.png')}
//                 />
//             </View>
//         );
//     }
// }

// listIMG = () => {
//     if(this.state.listView == true){
//         return(
//             <View>
//                 <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}  
//                     source = {require('../../Assets/Icons/List_View_Selected.png')}
//                 />
//             </View>
//         );
//     }
//     else if(this.state.listView == false){
//         return(
//             <View>
//                 <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),color:'#8C7878', 
//                                        tintColor:'#8C7878'}}  
//                     source = {require('../../Assets/Icons/List_View_Selected.png')}
//                 />
//             </View>
//         );
//     }
// }


static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
    return {
    title: 'Shops',
    color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },
  
    headerRight: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity  
                 onPress={ () => params.handelCardView() } 
            > 

            <ShopCardHeaderIcon cardView={params.cardView}/>
                {/* <Image    style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}
                    //color = {params.myColor}
                    source = {require('../../Assets/Icons/Card_View.png')}
                /> */}
                {/* {params.handelcardIMG()} */}
                
                {/* {cardIMG()} */}
            </TouchableOpacity>

            <TouchableOpacity  
                 onPress={ () => params.handelListView() } 
            >  
                 <ShopListHeaderIcon listView={params.listView}/>
                {/* <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('4'),}}  
                    source = {require('../../Assets/Icons/List_View_Selected.png')}
                /> */}
                {/* {params.handellistIMG()} */}
                {/* {listIMG()} */}
                
            </TouchableOpacity>

            <Image  style={{marginRight:hp('2'), marginBottom:hp('0.5'), height:hp('4'), width:wp('6'),}}
                source = {require('../../Assets/Icons/SearchHeader.png')}
            />   
        </View>
    ),
    
    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.drawerMenu() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
    )
    }
}



cardListViewsView =  () => {
 if(this.state.listView == true)
    {
        return(
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
        );
    }

    else if(this.state.cardView == true){
        return(
            <View style={styles.shopListMainContainerCard}>
                <TouchableOpacity onPress={() =>Actions.Info()}>
                    <View style={styles.shopListBackContainerCard}>
                        <View style={styles.shopNameAddContainerCard}>
                            <Text style={styles.shopNameTextStyleCard}>
                                Shop Name
                            </Text>
                        </View>
                        <View style={styles.shopNameAddContainerCard}>
                            <Text style={styles.shopDistanceTextStyleCard}>
                                Kothrud             1Km Away            ETA 5 mins
                            </Text>
                        </View>
                        <View style={styles.imgBackContainerCard}>
                            <Image 
                                style={styles.imageStylesCard}   
                                    source = {require('../../Assets/Icons/Shop_card_watermark.png')}/>
                        </View>
                        <View style= {styles.NCMContainerCard}>
                            <View style= {styles.navContainerCard}>
                                <TouchableOpacity>
                                    <Text  style = {styles.navTextStyleCard}>
                                        Navigate
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style= {styles.callContainerCard}>
                                <TouchableOpacity>
                                    <Text  style = {styles.callTextStyleCard}>
                                            Call
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style= {styles.msgContainerCard}>
                                <TouchableOpacity>
                                    <Text  style = {styles.msgTextStyleCard}>
                                            Message
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        </View>
        );
    }
}

render() {
    return (
        <View style = {{ flex: 10 }}>
        <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        >
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* <View>
                <View style={{  flex:1,backgroundColor: '#210305', height:hp('8'), flexDirection:'row' }}>
                    <View style={{flex:0.1, flexDirection:"column", alignItems:'flex-start',justifyContent:'center',alignSelf:'center',}}>
                        <TouchableOpacity   onPress={() =>Actions.drawerMenu() }>  
                            <Image  style={{marginLeft:wp('4'),}}
                                source = {require('../../Assets/Icons/Back_White.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.7, flexDirection:"column", alignItems:'flex-start',justifyContent:'center',alignSelf:'center',}}>
                           <Text style={{  color: '#ffffff', fontSize:RFValue(18),  fontWeight: 'bold', 
                                            marginTop:hp('0.5'), marginLeft: wp('6%'), fontFamily: 'Proxima Nova', }}>
                                Shops
                            </Text>
                    </View>
                    <View style={{flex:0.1, flexDirection:"column", alignItems:'flex-end',justifyContent:'center',alignSelf:'center',}}>
                       <TouchableOpacity onPress={() =>this.cardViewFunction() }>
                            {this.cardIMG()}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.1, flexDirection:"column", alignItems:'flex-end',justifyContent:'center',alignSelf:'center',}}>
                        <TouchableOpacity onPress={() =>this.listViewFunction() }>
                            {this.listIMG()}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.1, flexDirection:"column", alignItems:'flex-end',justifyContent:'center',alignSelf:'center',}}>
                        <Image  style={{marginRight:hp('4'), height:hp('3'), width:wp('5'),}}  
                                         source = {require('../../Assets/Icons/SearchHeader.png')}
                        />
                    </View>
                </View>
            </View> */}

            
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
            {this.cardListViewsView()}
            <View style={{marginTop:hp('10')}}></View>
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

    shopListMainContainerCard:{
        marginTop:hp('3')
    },

    shopListBackContainerCard:{
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        borderRadius: wp('2'), 
        height: hp('42'),  
        width: wp('90'),
        borderWidth: hp('0.3'), 
        marginHorizontal: wp('4'),
    },

    shopNameAddContainerCard:{
        alignItems:'flex-start', 
        flexDirection:'row', 
        marginLeft:wp('6'),
    },

    shopNameTextStyleCard: { 
        color:'#796A6A',  
        fontWeight: 'bold',
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(17),
        marginTop: hp('2'),
    },


    shopDistanceTextStyleCard: { 
        color:'#796A6A', 
        fontFamily:'Proxima Nova', 
        fontSize:RFValue(11),
        marginTop:wp('3'),

    },
     imgBackContainerCard:{
        backgroundColor: '#F8F4F4',
        borderRadius: wp('2'), 
        height:hp('18'),
        width:wp('80'), 
        marginTop:hp('3'), 
        alignSelf:'center', 
        alignItems:'center',
        justifyContent:'center',
    },

    imageStylesCard: { 
        marginLeft: wp('5'),
        height:hp('8'),
        width:wp('15'),
    },

    NCMContainerCard:{ 
        flex:1, 
        flexDirection:'row',
    },

    navContainerCard:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    navTextStyleCard:{  
        color: '#3955CB', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',  
        marginLeft: wp('6'), 
        fontFamily: 'Proxima Nova', 
    },

    callContainerCard:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },

    callTextStyleCard:{  
        color: '#3955CB', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',  
        fontFamily: 'Proxima Nova',  
        marginLeft: wp('5'),
    },

    msgContainerCard:{ 
        flex:0.5, 
        flexDirection:'column',
        alignItems:'flex-end',
        justifyContent:'center',
    },

    msgTextStyleCard:{  
        color: '#3955CB', 
        fontSize:RFValue(13),  
        fontWeight: 'bold',   
        marginRight:wp('6'),   
        fontFamily: 'Proxima Nova', 
    },
})