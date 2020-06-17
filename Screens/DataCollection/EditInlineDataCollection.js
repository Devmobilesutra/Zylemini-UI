import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Dash from 'react-native-dash';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';


const data = [{
    value: 'Box',
    }, {
    value: 'Unit',
    }, 
];

const labels = [
    {
        name:'Box',
    },
    {
        name:'Carton',
    },
    {
        name:'Bottles',
    },
    {
        name:'Promo Pack',
    },
]

export default class EditInlineDataCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { navigation } = this.props;
         if( this.props.radioVal2 == 0 )
        {
        return (
       
        <View style={styles.container}> 
        {/* <ScrollView
                 showsVerticalScrollIndicator={false}
              > */}
            <View style={styles.oredrFreeMainContainer}>
                <View style= {styles.orderFreeColumnContainer}>
                    <Text style={styles.orderTextStyle}>
                        Order
                    </Text>
                    <Text style={styles.freeTextStyle}>
                        Free
                    </Text>
                </View>

                <View style= {styles.boxColumnContainer}>
                    <Text style={styles.boxTextStyle}>
                        Box
                    </Text>
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.boxTextBoxStyle}
                    />
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.boxTextBoxStyle}
                    />
                </View>

                <View style= {styles.unitColumContainer}>
                    <Text style={styles.unitTextStyle}>
                        Unit
                    </Text>
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.unitTextBoxStyle}
                    />
                    <TextInput
                        keyboardType= "numeric"
                        placeholder="0"
                        style={styles.unitTextBoxStyle}
                    />
                </View>
            </View>

            {/* Dash Line */}
            <View style={styles.dashLineContainer}>
                  <Dash style={styles.dashLineStyle}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View>

            <View style= {styles.totalAmntMainContainer}>
                <View style= {styles.totalAmntColContainer}>
                    <Text  style = {styles.totalAmntTextStyle}>
                        Total Amount (INR)
                    </Text>
                </View>

                <View style= {styles.actualAmntColContainer}>
                    <Text  style = {styles.actualAmntTextStyle}>
                        00,00
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


            <View style={styles.applyDeleteMainContainer}>
                <View style={styles.applyImgContainer}>
                    <Image style={styles.applyImgStyle} 
                                source={require('../../Assets/Icons/apply_green.png')}
                    /> 
                </View>
 
                <View style={styles.applyTextContainer}>
                    <Text style={styles.applyTextStyle}> 
                        APPLY 
                    </Text>
                </View>
               
                <View style={styles.deleteImgContainer}>
                    <Image style={styles.deleteImgStyle} 
                                source={require('../../Assets/Icons/delete_red.png')}
                    /> 
                </View>
                <View style={styles.deleteTextContainer}>
                    <Text style={styles.deleteTextStyle}> 
                        DELETE
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

        {/* </ScrollView> */}
        </View>
        );
    }
    else{
        return (
           
            <View style={styles.containerStock}>
                 {/* TextInput Array */}
                {
                labels.map((item, index) => (
                <View style={styles.innerContainerStock}>
                    <View style={styles.dropOuterMainContainerStock}>
                        <Text style={styles.labelNameStyle}>
                            {item.name} &nbsp; : 
                        </Text>
                    </View>
                    <View style={styles.textInputMainContainerStock}>
                        <TextInput
                            keyboardType= "numeric"
                            placeholder="0"
                            style={styles.rateTextBoxStyleStock}
                        />
                    </View>
                </View>
                ))
                }

            {/* Dash Line */}
            <View style={styles.dashLineContainerStock}>
                  <Dash style={styles.dashLineStyleStock}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View>
            
            {/* Apply Delete */}
            <View style={styles.applyDeleteMainContainer}>
                <View style={styles.applyImgContainer}>
                    <Image style={styles.applyImgStyle} 
                                source={require('../../Assets/Icons/apply_green.png')}
                    /> 
                </View>
                <View style={styles.applyTextContainer}>
                    <Text style={styles.applyTextStyle}> 
                        APPLY 
                    </Text>
                </View>
               
                <View style={styles.deleteImgContainer}>
                    <Image style={styles.deleteImgStyle} 
                                source={require('../../Assets/Icons/delete_red.png')}
                    /> 
                </View>
                <View style={styles.deleteTextContainer}>
                    <Text style={styles.deleteTextStyle}> 
                        DELETE
                    </Text>
                </View>
            </View>

            {/* Dash Line */}
            <View style={styles.dashLineContainer2Stock}>
                  <Dash style={styles.dashLineStyle2Stock}
                    dashLength = {2}
                    dashColor = '#ADA2A2'
                  />
            </View> 
            

        </View>
        
        );
        }
    }
}


const styles = StyleSheet.create({

    container: {
        flex:1,
    },

    oredrFreeMainContainer: { 
        flex:1, 
        flexDirection:'row', 
    },

    orderFreeColumnContainer: { 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start', 
        marginHorizontal:wp('3')
    },

    orderTextStyle: { 
        marginTop:hp('5'), 
        color: '#796A6A', 
        fontSize: wp('3%'), 
        fontFamily: 'Proxima Nova', 
    },

    freeTextStyle: { 
        marginTop:hp('1'), 
        color: '#796A6A', 
        fontSize: wp('3%'), 
        fontFamily: 'Proxima Nova',
        marginTop:hp('4')
    },

    boxColumnContainer: { 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-start', 
    },

    boxTextStyle: { 
        color: '#796A6A', 
        fontSize: wp('3%'), 
        fontFamily: 'Proxima Nova',
        marginHorizontal:wp('2'), 
        fontWeight: 'bold',
    },

    boxTextBoxStyle: {
        height: hp('5.5'), 
        width:wp('30'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1, 
        borderRadius:wp('1'),
        backgroundColor: '#ffffff',
        marginLeft:wp('-10'), 
        marginRight:wp('10'),  
        marginTop:hp('1'),
        textAlign: 'center',
    },

    unitColumContainer: { 
        flex:0.5, 
        flexDirection:'column', 
    },

    unitTextStyle: { 
        color: '#796A6A', 
        fontSize: wp('3%'), 
        fontFamily: 'Proxima Nova', 
        marginHorizontal:wp('9'),
        fontWeight: 'bold',  
    },

    unitTextBoxStyle: { 
        height: hp('5.5'), 
        width:wp('30'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1, 
        borderRadius:wp('1'),
        backgroundColor: '#ffffff', 
        marginLeft:wp('-3'), 
        marginRight:wp('10'),   
        marginTop:hp('1'), 
        textAlign: 'center',
    },

    dashLineContainer: {
        flex:1, 
        marginTop:hp('3'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('89'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },


    totalAmntMainContainer: { 
        flex:1, 
        flexDirection:'row', 
        marginTop: hp('3') 
    },

    totalAmntColContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
    },

    totalAmntTextStyle:{ 
        color:'#362828', 
        fontSize:RFValue(14), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('2') 
    },

    actualAmntColContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        alignItems:'flex-end',
    },

    actualAmntTextStyle:{  
        color:'#362828', 
        fontSize:RFValue(14), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        // marginLeft: wp('1')
        marginRight: wp('3'),
    },

    applyDeleteMainContainer: { 
        flex:1, 
        marginTop:hp('2'), 
        flexDirection: 'row', 
    },

    applyImgContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems:'flex-start',
        justifyContent:'center',
    },

    applyImgStyle: { 
        marginLeft:wp('10'), 
        height:hp('3'),
        width:wp('4'),
    },

    applyTextContainer: {
        flex: 1,
        flexDirection: 'column', 
        alignItems:'flex-start',
        justifyContent:'center', 
    },

    applyTextStyle: { 
        fontFamily: 'Proxima Nova',
        color:'#2FC36E', 
        fontWeight:'bold', 
        marginLeft:wp('-1'), 
    },

    deleteImgContainer: {
        flex: 1,
        flexDirection: 'column', 
        alignItems:'flex-end', 
        justifyContent:'center',
        marginRight:wp('7',) 
    },

    deleteImgStyle: {  
        height:hp('3'), 
        width:wp('4'),
    },

    deleteTextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
    },

    deleteTextStyle: { 
        fontFamily: 'Proxima Nova',
        color:'#E23333', 
        fontWeight:'bold',
        marginLeft:wp('-4'),
    },

    containerStock: {
        flex:1,
    },

    innerContainerStock: {
        flex:1, 
        flexDirection: 'row', 
        marginLeft: wp('2'),
    },

    dropOuterMainContainerStock : {
        flex:0.5, 
        flexDirection: 'column', 
        alignItems:'flex-start',
        marginLeft: wp('2'),
        justifyContent:'center'
    },

    labelNameStyle: {  
        color:'#796A6A', 
        fontSize:RFValue(18), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        justifyContent:'center',
    },


    textInputMainContainerStock:{
        flex:0.5, 
        flexDirection: 'column', 
        alignItems:'flex-end',
        marginBottom: hp('1')
    },

    rateTextBoxStyleStock: { 
        height: hp('6'), 
        width:wp('38'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1, 
        borderRadius:wp('1'),
        backgroundColor: '#ffffff',
        marginRight:wp('-2'),
        marginTop:hp('0'), 
        textAlign: 'center',
        marginRight: wp('1'),
    },

    dashLineContainerStock: {
        flex:1, 
        marginTop:hp('1'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyleStock: {
        width:wp('85'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },

    dashLineContainer2Stock: {
        flex:1, 
        marginTop:hp('4'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle2Stock: {
        width:wp('89'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },



})