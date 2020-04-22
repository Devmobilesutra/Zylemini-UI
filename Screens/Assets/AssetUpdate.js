import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

// import { RadioButton } from 'react-native-paper';

var radio_props = [
    {label: 'Audit Existing Asset', value: 0 },
    {label: 'Add New Asset', value: 1 },
    {label: 'Replace Asset', value: 2 },
    {label: 'Discard Asset', value: 3 }
];

export default class AssetUpdate extends Component {
constructor(props) {
    super(props);
    this.state = { 
        value: 0,
     };
}



static navigationOptions = {
  title: 'Asset',
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
            <TouchableOpacity   onPress={() =>Actions.Info() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
 )                               
}

nextNavigation =  () => {
    if(this.state.value == 0) {
        return(
            Actions.ScanQRCode()
        );
    }
}



render() {
    const { checked } = this.state;
    return (
    <View>
        <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('100'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        > 
        <ScrollView
                    showsVerticalScrollIndicator={false}
        >
        <View>

           {/* Header */}
            <View style = {styles.headerMainContainer}>
                <View style={styles.headerInnerContainer}>
                    <View style={styles.imgColContainer}>
                        <Image style={styles.imgStyle}
                            source={require('../../Assets/Icons/home_normal_sidebar.png')}/>
                    </View>
                    <View style={styles.shopNameAddMainContainer}>
                        <Text style={styles.shopNameTextStyle}>
                            Mangalam Shop
                        </Text>
                         <Text style={styles.shopAddTextStyle}>
                            Kothrud, Pune
                        </Text>
                    </View>
                </View>  
            </View>

            {/* Choose Action */}
            <View style={styles.chooseActionMainContainer}>
                <View style={styles.chooseBGContainer}>
                    <Text style={styles.chooseTextStyle}>
                        Choose the action
                    </Text>

                    {/* Line  */}
                    <View
                        style={styles.middleLineStyle}
                    />

                    {/* Radio Options */}
                    <View style={{ marginTop:hp('2'), marginLeft:wp('4')}}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#E6DFDF'}
                            buttonInnerColor={'#E6DFDF'}
                            selectedButtonColor={'#E6DFDF'}
                            buttonSize={11}
                            buttonOuterSize={25}
                            radioStyle={{marginTop: hp('3')}}
                            labelStyle={{fontSize: RFValue(13), color: 'black', marginLeft:wp('5')}}
                            animation={true}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>   
                </View>
            </View>

            {/* Next Button */}
            <View style={styles.nextButtonMainContainer}>
                <TouchableOpacity onPress={this.nextNavigation}>
                    <View style={styles.nextButtonBG}>
                        <Text style={styles.nextLabelStyle}>
                            NEXT
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
        </ImageBackground>
    </View>
    );
}
}

const styles = StyleSheet.create({

headerMainContainer: { 
    flex:0.3, 
    backgroundColor: '#210305', 
},

headerInnerContainer:{
    flexDirection:'row', 
    marginTop:hp('2'), 
    marginLeft:wp('5'), 
    marginBottom:hp('2'),
},

imgColContainer:{
    flexDirection:'column',
},

imgStyle:{
    height: hp('10'), 
    width:wp('15'), 
    tintColor:'grey',
},

shopNameAddMainContainer:{
    flexDirection:'column',
    marginTop:hp('3'), 
    marginLeft:wp('5'),
},

shopNameTextStyle:{ 
    color: '#FFFFFF', 
    fontSize:RFValue(15), 
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
},

shopAddTextStyle:{ 
    color: '#796A6A', 
    fontSize:RFValue(12),
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
    marginTop:hp('1'),
},

chooseActionMainContainer:{
    marginTop: hp('5'), 
    justifyContent:'center', 
    alignItems:'center',
},

chooseBGContainer:{
    backgroundColor:'#FFFFFF', 
    height:hp('43'), 
    width:wp('90'), 
    borderRadius:wp('2'),
    borderColor:'#d5d7db', 
    borderWidth:wp('0.1'),
},

chooseTextStyle:{  
    color: '#221818', 
    fontSize:RFValue(15), 
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova', 
    marginTop:hp('2'), 
    marginLeft:wp('4'),
},

middleLineStyle: {
    width:wp('75'),    
    borderBottomColor: '#E6DFDF',
    borderBottomWidth: wp('0.3'),
    alignSelf:'center',
    marginTop: hp('3'),
},

nextButtonMainContainer:{
    marginTop:hp('13'), 
    alignItems:'center', 
    justifyContent:'center',
},

nextButtonBG:{
    backgroundColor:'#221818', 
    height:hp('9'), 
    width:wp('90'), 
    borderRadius:wp('2'), 
    alignItems:'center',
    justifyContent:'center',
},

nextLabelStyle:{ 
    color: '#FFFFFF', 
    fontSize:RFValue(15), 
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
},

});