import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image,
             Platform, Linking, PermissionsAndroid } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';


export default class ScanQRCode extends Component {
constructor(props) {
    super(props);
    this.state = { 
          QR_Code_Value: '',
          Start_Scanner: true,
    };
}

 
openLink_in_browser = () => {
  Linking.openURL(this.state.QR_Code_Value);
}

onQR_Code_Scan_Done = (QR_Code) => {
  this.setState({ QR_Code_Value: QR_Code });
  this.setState({ Start_Scanner: false });
}
 
open_QR_Code_Scanner=()=> {
  var that = this;
 
  if (Platform.OS === 'android') {
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA, {
            'title': 'Camera App Permission',
            'message': 'Camera App needs access to your camera '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          that.setState({ QR_Code_Value: '' });
          that.setState({ Start_Scanner: true });
        } else {
          alert("CAMERA permission denied");
        }
      } catch (err) {
        alert("Camera permission err", err);
        console.warn(err);
      }
    }
    requestCameraPermission();
  } else {
    that.setState({ QR_Code_Value: '' });
    that.setState({ Start_Scanner: true });
  }
  }

  render() {
    // if (!this.state.Start_Scanner) {
 
    //   return (
    //       <View>
    //     <ImageBackground
    //              // source={require('../../Assets/Icons/android_BG.png')}
    //          style={{backgroundColor:'grey',height:hp('70'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
    //     > 
    //     <ScrollView
    //                 showsVerticalScrollIndicator={false}
    //     >
    //     <View style={styles.MainContainer}>
 
    //       <Text style={{ fontSize: 22, textAlign: 'center' }}>React Native Scan QR Code Example</Text>
 
    //       <Text style={styles.QR_text}>
    //         {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
    //       </Text>
 
    //       {this.state.QR_Code_Value.includes("http") ?
    //         <TouchableOpacity
    //           onPress={this.openLink_in_browser}
    //           style={styles.button}>
    //           <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
    //         </TouchableOpacity> : null
    //       }
 
    //       <TouchableOpacity
    //         onPress={this.open_QR_Code_Scanner}
    //         style={styles.button}>
    //         <Text style={{ color: '#FFF', fontSize: 14 }}>
    //           Open QR Scanner
    //         </Text>
    //       </TouchableOpacity>

    //     </View>
    //     </ScrollView>
    //     </ImageBackground>
    //     </View>
    //   );
    // }
    return (
        <View style={styles.container}>
            <View style={styles.kitContainer}>
              <CameraKitCameraScreen
              style={{
                  // flex: 1,
                  backgroundColor: 'grey'
                }}
                showFrame={true}
                scanBarcode={true}
                laserColor={'#221818'}
                frameColor={'grey'}
                // colorForScannerFrame={'black'}
                colorForScannerFrame = {'#221818'}
                onReadCode={event =>                    
                  this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
                }
              />
            </View>
            <View style={styles.buttonsContainer}>
                {/* CONFIRM Button */}
                <View style={styles.confirmButtonMainContainer}>
                    <TouchableOpacity  onPress={() => Actions.AuditAssetStep2()} >
                        <View style={styles.confirmButtonInnerContainer}>
                            <Text style={styles.confirmTextStyle}>
                                    CONFIRM
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    );
  }
}

// render() {
//     return (
        // <View>
        // <ImageBackground
        //         // source={require('../../Assets/Icons/android_BG.png')}
        //     style={{backgroundColor:'grey',height:hp('70'),width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
        // > 
        //   <ScrollView
        //             showsVerticalScrollIndicator={false}
        //   >
            
        //     {/* <View style={{ flex: 1 }}> */}
        //     {this.open_QR_Code_Scanner()}
        //         <CameraKitCameraScreen
        //             showFrame={true}
        //             scanBarcode={true}
        //             laserColor={'#FF3D00'}
        //             frameColor={'#00C853'}
        //             colorForScannerFrame={'black'}
        //             onReadCode={event =>
        //             this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
        //             }
        //         />
        //     {/* </View> */}

        //   </ScrollView>
        //     <View>
        //         {/* CONFIRM Button */}
        //         <View style={styles.confirmButtonMainContainer}>
        //             <TouchableOpacity  onPress={() => Actions.AuditAssetStep2()} >
        //                 <View style={styles.confirmButtonInnerContainer}>
        //                     <Text style={styles.confirmTextStyle}>
        //                             CONFIRM
        //                     </Text>
        //                 </View>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        //  </ImageBackground>
        // </View>


//     );
// }
// }


const styles = StyleSheet.create({

  container:{
    flex:1, 
    flexDirection:'column',
  },

  kitContainer:{ 
    flex:2, 
    alignItems:'flex-start',
    marginTop: hp('-20'),
  },

  buttonsContainer:{
    flex:1,  
    marginTop:hp('30'),
  },

   confirmButtonMainContainer: {
    marginTop:hp('3'), 
    alignItems:'center', 
    justifyContent:'center',
    marginBottom:hp('5'),
  },

  confirmButtonInnerContainer:{
    backgroundColor:'#221818', 
    //  backgroundColor:'grey',
    height:hp('9'), 
    width:wp('90'), 
    borderRadius:wp('2'), 
    alignItems:'center',
    justifyContent:'center',
  },

  confirmTextStyle:{ 
    color: '#FFFFFF', 
    fontSize:RFValue(15), 
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova',
  },

    // MainContainer: {
    //   flex: 1,
    //   paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // QR_text: {
    //   color: '#000',
    //   fontSize: 19,
    //   padding: 8,
    //   marginTop: 12
    // },
    // button: {
    //   backgroundColor: '#2979FF',
    //   alignItems: 'center',
    //   padding: 12,
    //   width: 300,
    //   marginTop: 14
    // },


});
