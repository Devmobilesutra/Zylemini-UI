// Conversations
// 7.1 GB (47%) of 15 GB used
// Manage
// Programme Policies
// Powered by Google
// Last account activity: 0 minutes ago
// Open in 1 other location · Details

import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
import { ActionSheet,Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

export default class reactNativeCamera extends Component {
    constructor(props){
    super(props);
    this.state = {
      fileList: [],
    };
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
  takePhotoFromCamera=()=>{
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
          this.onSelectedImage(image)
        console.log(image);
      });
  }
takePhotoFromLibrary=()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        this.onSelectedImage(image)
        console.log(image);
      });
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
  renderItem=({item,indx})=>{
      return(
          <View>
              <Image style={styles.itemImage}
              source={item.url}
              ></Image>
          </View>
      )

  }
    render() {
        let{content}=styles
        let{fileList}=this.state
        return (
            <Root>
            <View style={content}>
                <FlatList
                horizontal={true}
                data={fileList}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                extraData={this.state}
                
               />
               <TouchableOpacity onPress={this.onClickAddImage} style={styles.btn}>
                  <Text>add</Text> 
               </TouchableOpacity>

               
            </View>
            </Root>
        )
    }
}

const styles = StyleSheet.create({    
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
  btn:{
      backgroundColor:'#0080ff',
      height:50,
      width:60,
      alignItems:'center',
      justifyContent:'center'
  }
});