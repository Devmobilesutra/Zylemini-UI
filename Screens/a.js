
// static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     //const { navigation } = this.props;
//      return {
//     // title: 'Shops',
//     color: 'white',
//     headerStyle: {
//         backgroundColor: '#221818'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         color: '#fff'
//     },
//     headerLeft: (
//         <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
//             <TouchableOpacity   onPress={() =>Actions.Shops() }>  
//                 <Image  style={{marginLeft:wp('4'),}}
//                     source = {require('../../Assets/Icons/Back_White.png')}
//                 />
//             </TouchableOpacity>
//         </View>
//     ),  
//     headerRight: (
//         <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
        
//             <TouchableOpacity  
//                 // onPress={() => params.handleSave()}
//                 // onPress={() => alert('hii')}
//                 //  onPress={this.applicablePopUp.bind(this)}
//             >     
//               <View style={{backgroundColor: '#CC1167',justifyContent:'center',marginRight:hp('3'),
//                                 borderColor: '#CC1167',height:hp('4'),width:wp('23'),borderRadius:wp('5')}}>
//                 <Text style={{alignSelf:'center', color:'#FFFFFF', fontFamily:'Proxima Nova',fontSize:RFValue('12'),
//                                 fontWeight: 'bold',padding:10}}>
//                     CHECK IN
//                 </Text>
//              </View>
//             </TouchableOpacity>

//             <Image  style={{marginRight:hp('2'), marginBottom:hp('0.5'), height:hp('4'), width:wp('6'),}}
//                 source = {require('../../Assets/Icons/edit.png')}
//             />    
//         </View>
//     )
//     }
// }