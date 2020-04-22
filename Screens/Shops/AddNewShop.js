import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground,
                FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { Header, LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
// import ImagePicker from 'react-native-image-picker';
import { ActionSheet,Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import NextButton from '../../Components/Common/NextButton';


const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class AddNewShop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: '',

            imgforstoring:[],

            fileList: [],
        };
    }

static navigationOptions = {
    title: 'Add New Party',
    color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },
    headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.Shops() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    ),  
}

//   chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       // customButtons: [
//       //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//       // ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//     //   console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         // alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // alert(JSON.stringify(response));s
//         // console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });
//   }


// renderFileUri() {
//     if (this.state.fileUri) {
//       return <Image
//         source={{ uri: this.state.fileUri }}
//         style={styles.imagesFrompHOTO}
//       />
//     var newImgArr = this.state.imgforstoring.push('this.state.fileUri');
//        this.setState({ imgforstoring: newImgArr })
//     //   this.setState({
//     //       imgforstoring: [this.state.fileUri]
//     //   })
//       console.log('images ', imgforstoring);
//     } else {
//       return <Image  styles={styles.imgStyle}
//         source= {require('../../Assets/Icons/Add_Images.png')}
//       />
//     }
//   }



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
        let{content}=styles
        let{fileList}=this.state
        return (
        <View>
         <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
         >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        OUTLET NAME
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>

            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        OWNER NAME
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>
            
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        ADDRESS
                    </Text>
                </View>

                <View style={styles.OODTextBoxMainContainer}>
                    <TextInput
                            //multiline= {}
                            placeholder= "Type Here"
                            style={styles.OODTextBoxSelfContainer}
                            // onChangeText={text => onChangeText(text)}
                            // value={Type Here}
                        />
                </View>
            </View>

            <View style={styles.AddLocMainContainer}>
                <View style={styles.AddLocRowContainer}>
                    <View style={styles.AddLocTextContainer}>
                        <Text style={styles.AddLocTextStyle}>
                                ADD LOCATION
                        </Text>
                    </View>
                    
                    <View style={styles.deviceLocationColContainer}>
                        <Text style={styles.deviceLocTextStyle}>
                            Turn on the device location
                        </Text>
                    </View>
                </View>

                <View style={styles.addLocTextBoxMainCont}>
                   <View style={styles.addLocTextBoxColCont}>
                        <TextInput
                                placeholder= "Type Here"
                                style={styles.addLocTextBoxStyle}
                                // onChangeText={text => onChangeText(text)}
                                // value={Type Here}
                        />
                    </View>
                    <View style={styles.addLocBGStyle}>
                        <TouchableOpacity>
                         <Image style={styles.addLocImgStyle}
                                source = {require('../../Assets/Icons/geo_location.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

             <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        ADD PICTURES
                    </Text>
                </View>

                {/* <View style={styles.horiIMGSMainCont}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                            <TouchableOpacity 
                                // onPress={() =>Actions.camera()}
                                // onPress={this.onClickAddImage}
                                >
                                <View style={styles.imgBG}>
                                    <Image  styles={styles.imgStyle}
                                        source = {require('../../Assets/Icons/Add_Images.png')}/>
                                    {/* {this.showPhoto()} */}
                                {/* </View>
                            </TouchableOpacity>

                        <TouchableOpacity */}
                            {/* // onPress={this.chooseImage}
                        >
                            <View style={styles.imgBG}>
                                 {/* {this.renderFileUri()} */}
                                {/* <Image  styles={styles.imgStyle}
                                    source = {require('../../Assets/Icons/Add_Images.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Actions.reactNativeCamera}>
                            <View style={styles.imgBG}>
                                <Image  styles={styles.imgStyle}
                                    source = {require('../../Assets/Icons/Add_Images.png')}/>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.lastIMGBG}>
                            <Image  styles={styles.imgStyle}
                                source = {require('../../Assets/Icons/Add_Images.png')}/>
                        </View>
                    </ScrollView> 
                // </View> */}

                    <View style={{flexDirection:'row', marginTop:hp('2'),
                                    marginLeft:wp('4')}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{flexDirection:'column', marginTop:hp('7')}}>
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


        <View style={{marginTop:hp('6')}}></View>
            </ScrollView>
            {/* Next Button */}
            <View>
                <TouchableOpacity onPress={() =>Actions.AddNewShopNext()}>
                    <NextButton/>
                </TouchableOpacity>
            </View>
         </ImageBackground>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    OODMainContainer: {
        flex:1,
    },

    OODTextStyle: { 
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'),
    },

    OODTextBoxMainContainer:{
        flex:1, 
        marginTop:hp('1.5')
    },

    OODTextBoxSelfContainer:{ 
        height: hp('9'), 
        width:wp('89'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1,
        borderRadius:wp('2') , 
        backgroundColor: '#ffffff',
        alignSelf:'center', 
        padding: 15,
    },

    AddLocMainContainer:{
        flexDirection:'column',
    },

    AddLocRowContainer:{
        flex:1, 
        flexDirection:'row',
    },

    AddLocTextContainer:{ 
        flex:1,
        alignItems:'flex-start', 
        flexDirection:'column',
    },

    AddLocTextStyle:{  
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('5'),
        marginTop:hp('3'), 
    },

    deviceLocationColContainer:{ 
        flex:1, 
        alignItems:'flex-end', 
        flexDirection:'column',
    },

    deviceLocTextStyle:{
        flex:1, 
        color:'#796A6A', 
        fontSize:RFValue(12), 
        fontFamily: 'Proxima Nova',
        marginTop:hp('3'),
        alignItems:'flex-end',
        marginRight:wp('6'), 
    },

    addLocTextBoxMainCont:{
        marginTop:hp('1.5'), 
        flexDirection:'row',
        alignSelf:'center',
    },

    addLocTextBoxColCont:{
        flexDirection:'column',
    },

    addLocTextBoxStyle:{ 
        height: hp('9'),
        width:wp('80'), 
        borderColor: '#E6DFDF', 
        borderWidth: 1, 
        borderRadius:wp('2') , 
        backgroundColor: '#ffffff',
        alignSelf:'center', 
        padding: 15, 
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderColor:'#E6DFDF', 
        borderRadius: wp('2%'), 
        borderRightWidth:hp('0'),
        borderTopRightRadius: wp('0'), 
        borderBottomRightRadius: wp('0'),
    },

    addLocBGStyle:{
        flexDirection:'column',
        backgroundColor:'#ffffff',  
        height:hp('9'),
        width:wp('8'),
        justifyContent:'center',                                    
        borderRightWidth:hp('0.18'), 
        borderTopWidth:hp('0.18'),                                 
        borderBottomWidth:hp('0.18'),                              
        borderTopRightRadius: wp('2'),
        borderTopLeftRadius: wp('0'), 
        borderBottomRightRadius: wp('2'), 
        borderBottomLeftRadius: wp('0'),  
        borderColor:'#E6DFDF', 
    },

    addLocImgStyle:{
        height:hp('4'), 
        width:wp('8'), 
        alignSelf:'center', 
        marginRight:wp('3'),
    },

    horiIMGSMainCont:{
        flex:1, 
        marginTop:hp('3'), 
        marginLeft:wp('3'),
    },

    imgBG:{
        backgroundColor:'#E6DFDF', 
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('2'),
    },

    imgStyle: {
        alignSelf:'center',  
    },

    lastIMGBG:{
        backgroundColor:'#E6DFDF', 
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('2'), 
        marginRight:wp('2'),
    },

    imagesFrompHOTO: {
        height:hp('18'), 
        width:wp('40'),
        borderRadius:wp('2'), 
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('2'),
        marginTop:hp('1'),
  },

  itemImage:{
    backgroundColor:'#2F455C',
    height:150,
    width:60,
    borderRadius:8,
    resizeMode:'contain'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
      flex:1,
      alignItems:'center',
      marginRight:50
  },
//   btn:{
//       backgroundColor:'#0080ff',
//       height:50,
//       width:60,
//       alignItems:'center',
//       justifyContent:'center'
//   }
});