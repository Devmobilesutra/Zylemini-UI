import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Dash from 'react-native-dash';
import { ActionSheet,Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

export default class AuditAssetStep2 extends Component {
constructor(props) {
    super(props);
    this.state = { 
           fileList: [],
    };
}

static navigationOptions = {
  title: 'Audit Asset : Step 2/3',
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
            <TouchableOpacity   onPress={() =>Actions.Manual() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    )                               
}

onClickAddImage=()=>{
    const BUTTONS=['Take photo','Choose','cancel']
    ActionSheet.show({options:BUTTONS,cancelButtonIndex:2,title:"select photo"},
    buttonIndex=>{
        switch(buttonIndex){
            case 0:  
                this.takePhotoFromCamera()
                break;

            case 1:    
                this.takePhotoFromLibrary()
                break;
              
            default:break;
          }
    })
}

takePhotoFromCamera=()=>{
    ImagePicker.openCamera({
            // width: 300,
            // height: 400,
            // cropping: true,
    }).then(image => {
        this.onSelectedImage(image)
        console.log(image);
    });
}

takePhotoFromLibrary=()=>{
    ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            // cropping: true
    }).then(image => {
        this.onSelectedImage(image)
        console.log(image);
    });
}

onSelectedImage=(image)=>{
    let newDataImg=this.state.fileList;
    const source={uri:image.path};
    let item={
        id:Date.now(),
        url:source,
        content:image.data
    }
    newDataImg.push(item);
    this.setState({fileList:newDataImg})
}

renderItem=({item,indx})=>{
      return(
          <View>
              <Image style={styles.imagesFrompHOTO}
              source={item.url}
              ></Image>
          </View>
      )
}


showPhoto() {
    let{content}=styles
    let{fileList}=this.state
        return (
            <Root>
            <View>
                <FlatList
                horizontal={true}
                data={fileList}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                extraData={this.state}
               />
            </View>
            </Root>
        )
}


render() {
    return (
    <View>
        <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
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
                {/* Asset Type */}
                <View style={styles.assetTypeMainContainer}>
                    <View style= {styles.assetTypeLabelColContainer}>
                        <Text  style = {styles.assetTypeleLabelStyle}>
                            ASSET TYPE
                        </Text>
                    </View>

                    <View style= {styles.assetTypesColContainer}>
                        <Text  style = {styles.assetTypesTextStyle}>
                            Refrigerator
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

                {/* Manufac. by */}
                <View style={{  flex:1, marginTop:hp('3'), marginLeft:wp('6'), flexDirection:'row',}}>
                    <View style= {{ flex: 0.4, flexDirection:'column', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', 
                                    fontWeight: 'bold',  }}>
                            MANUFACTURED BY
                        </Text>
                    </View>

                    <View style= {{ flex: 0.8, flexDirection:'column', alignItems:'center', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova',marginRight:wp('16') }}>
                             Bosch
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

                 {/* Model */}
                <View style={{  flex:1, marginTop:hp('3'), marginLeft:wp('6'), flexDirection:'row',}}>
                    <View style= {{ flex: 0.3, flexDirection:'column', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', 
                                    fontWeight: 'bold',  }}>
                            MODEL
                        </Text>
                    </View>

                    <View style= {{ flex: 0.7, flexDirection:'column', alignItems:'center', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova',marginRight:wp('1')}}>
                            MD Cool 15455
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

                 {/* sERIAL NO. */}
                <View style={{  flex:1, marginTop:hp('3'), marginLeft:wp('6'), flexDirection:'row',}}>
                    <View style= {{ flex: 0.4, flexDirection:'column', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', 
                                    fontWeight: 'bold',  }}>
                            SERIAL NUMBER
                        </Text>
                    </View>

                    <View style= {{ flex: 0.7, flexDirection:'column', alignItems:'center', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova',marginRight:wp('1')}}>
                            SRNO12345678910
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

                 {/* Installation Date */}
                <View style={{  flex:1, marginTop:hp('3'), marginLeft:wp('6'), flexDirection:'row',}}>
                    <View style= {{ flex: 0.4, flexDirection:'column', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', 
                                    fontWeight: 'bold',  }}>
                            Installation Date
                        </Text>
                    </View>

                    <View style= {{ flex: 0.8, flexDirection:'column', alignItems:'center', }}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', marginRight:wp('6') }}>
                            20/12/2016
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

                 {/* Allocated To */}
                <View style={{  flex:1,  marginLeft:wp('6'), flexDirection:'row',}}>
                    <View style= {{ flex: 0.4, flexDirection:'column', marginTop:hp('3'),}}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova', 
                                    fontWeight: 'bold',  }}>
                            ALLOCATED TO
                        </Text>
                    </View>

                    <View style= {{ flex: 0.4, flexDirection:'column', alignItems:'center',marginTop:hp('2'),}}>
                        <Text  style = {{ color:'#796A6A', fontSize:RFValue(13), fontFamily: 'Proxima Nova',marginLeft:wp('13'),
                                            }}>
                            Mangalam Shop Warje, Pune
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

                <View>
                    <View style={styles.OODMainContainer}>
                        <Text style={styles.OODTextStyle}>
                            ADD PICTURES
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:hp('2'),
                                    marginLeft:wp('4')}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{flexDirection:'column', marginTop:hp('2')}}>
                                <TouchableOpacity 
                                            // onPress={() =>Actions.camera()}
                                            onPress={this.onClickAddImage}
                                            >
                                    <Image  style={{height:hp('7'), width:wp('12')}}
                                                    source = {require('../../Assets/Icons/Add_Images.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                {this.showPhoto()}
                            </View>
                        </ScrollView>
                    </View>  
                </View> 
                          
            </View>
            <View style={{marginTop:hp('5')}}></View>
        </ScrollView>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <TouchableOpacity onPress={() => Actions.AuditAssetStep3()}>
                    <View style={{   backgroundColor:'#221818', height:hp('8'), width:wp('90'), 
                                    borderRadius:wp('2'), alignItems:'center',justifyContent:'center',}}>
                        <Text style={{ color: '#FFFFFF', fontSize:RFValue(14), fontWeight: 'bold',
                                        fontFamily: 'Proxima Nova',}}>
                            CONFIRM ASSET DETAILS
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{alignItems:'center',justifyContent:'center',marginVertical:hp('3')}}>
                        <Text style={{ color: 'black', fontSize:RFValue(14), fontWeight: 'bold',
                                        fontFamily: 'Proxima Nova',}}>
                            CANCEL
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
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

    assetTypeMainContainer:{
        flex:1, 
        marginTop:hp('3'), 
        marginLeft:wp('6'), 
        flexDirection:'row',
    },

    assetTypeLabelColContainer:{ 
        flex: 0.3, 
        flexDirection:'column', 
    },

    assetTypeleLabelStyle:{ 
        color:'#796A6A', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova', 
        fontWeight: 'bold',  
    },

    assetTypesColContainer:{ 
        flex: 0.8, 
        flexDirection:'column', 
        alignItems:'center', 
    },

    assetTypesTextStyle:{ 
        color:'#796A6A', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova', 
    },



    dashLineContainer: {
        // flex:1, 
        marginTop:hp('3'), 
        alignContent: 'center', 
        alignItems: 'center',
    },

    dashLineStyle: {
        width:wp('88'), 
        height:hp('1'), 
        color: '#ADA2A2',
    },




    OODMainContainer: {
        flex:1,
    },

    OODTextStyle: { 
        color:'#796A6A', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('6'),
        marginTop:hp('3'),
    },

    imagesFrompHOTO: {
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('7'),
        marginRight:wp('2'),
        marginTop:hp('1'),
    },



});