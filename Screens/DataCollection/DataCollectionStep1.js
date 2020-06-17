import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground,
                FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';
import Autocomplete from 'react-native-autocomplete-input';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Dropdown } from 'react-native-material-dropdown';
import Dialog, { DialogContent, DialogFooter, DialogButton, DialogTitle} from 'react-native-popup-dialog';

import NextButton from '../../Components/Common/NextButton';

const API = 'https://swapi.co/api';

var radio_props = [
    {label: 'Sales', value: 0 },
    {label: 'Stock', value: 1 },
];

const data = [{
    value: 'Route 1',
    }, {
    value: 'Route 2',
    }, {
    value: 'Route 3',
    }, {
    value: 'Route 4',
    },
];

export default class DataCollectionStep1 extends Component {
constructor(props) {
    super(props);
    this.state = { 
        films: [],
        films1:[{title: '~+Add New Outlet'}],
        films2:[],
        query: '',
        index: '',

        radioValue: 0,
        // value3Index: 0,
        shopClick: true, 
        //  shopClick: false, 
        distributorClick: false,

        visible: '',
    };
}


static navigationOptions = {
  title: 'Data Collection : Step 1/3',
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
            <TouchableOpacity   onPress={() =>Actions.drawerMenu() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
        </View>
    )                               
}

calenderPopUp =  () => {
    const { navigation } = this.props;
    this.setState({ visible: true });
}


componentDidMount() {
    // AsyncStorage.setItem('radioVlueAsc',this.state.radioValue);  
    // AsyncStorage.setItem('radioValue', this.state.radioValue);
  //First method to be called after components mount
  //fetch the data from the server for the suggestion
  fetch(`${API}/films/`)
    .then(res => res.json())
    .then(json => {
      const { results: films2 } = json;
      this.setState({ films2 });
      //setting the data in the films state
      console.log('films2',films2)
      this.setState({
          films: [...this.state.films1, ...this.state.films2]
      })
      console.log('films',films);
    });
}




findFilm(query) {
    //method called everytime when we change the value of the input
  if (query === '') {
      //if the query is null then return blank
    return [];
  }
 
  const { films } = this.state;
  //making a case insensitive regular expression to get similar value from the film json
  const regex = new RegExp(`${query.trim()}`, 'i');
  //return the filtered film array according the query from the input
  return films.filter(film => film.title.search(regex) >= 0);
}

searchComponent(){

  const { query } = this.state;
    const films = this.findFilm(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
 
    return (
      <View style={styles.searchResultContainer}>
      
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
          <Autocomplete
              autoCapitalize="none"
              autoCorrect={false}
              inputContainerStyle={styles.inputContainerStyle}
              listStyle = {styles.listStyle}
              //data to show in suggestion
              data={films.length === 1 && comp(query, films[0].title) ? [] : films}
              //data={((films.length === 1 && comp(query, films[0].title)) || this.state.clicked) ? [] : films}
              //default value if you want to set something in input
              defaultValue={query}
              /*onchange of the text changing the state of the query which will trigger
              the findFilm method to show the suggestions*/
              onChangeText={text => this.setState({ query: text })}
              placeholder="search"
              renderItem={({ item, i }) => (
                //you can change the view you want to show in suggestion from here
                <TouchableOpacity onPress={() => this.setState({ query: item.title, shopDetailFlag:'true',})}>
                  <Text style={styles.itemText}>
                    {item.title} 
                    {/* ({item.release_date}) */}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.searchIconBG}>
            <Image  source={require('../../Assets/Icons/search.png')}
                  style={styles.searchIconStyle}></Image>
          </View>
        </View>
      </View>
    );  
}

ShopClick  =  () => {
    if( this.state.shopClick == false )
    {
        return(
             <View style={styles.SDCardBG}>
                <View style={styles.ITColContainer}>
                    <Image style={styles.cardImgStyle} 
                        source = {require('../../Assets/Icons/Shop_card_watermark.png')}
                    />
                        <Text style={styles.cardTextStyle}>
                            Shops
                        </Text>
                </View>
            </View>
        );
    }
    else if( this.state.shopClick == true ){
        // this.setState({ distributorClick : false });
         return(
             <View style={styles.SDCardBGClickTrue}>
                <View style={styles.ITColContainer}>
                    <Image style={styles.cardImgStyle} 
                        source = {require('../../Assets/Icons/ShopDataCollection.png')}
                    />
                        <Text style={styles.cardTextStyleAfterClick}>
                            Shops
                        </Text>
                </View>
            </View>
        );
    }
}

distributorClick = () => {
    if( this.state.distributorClick == false ){
        return(
            <View style={styles.SDCardBG}>
                <View style={styles.ITColContainer}>
                    <Image style={styles.cardImgStyle} 
                        source = {require('../../Assets/Icons/Distributor.png')}
                    />
                    <Text style={styles.cardTextStyle}>
                        Distributors
                    </Text>
                </View>
            </View>
        )
    }
    else if( this.state.distributorClick == true ) {
       return(
           
            <View style={styles.SDCardBGClickTrue}>
                <View style={styles.ITColContainer}>
                    <Image style={styles.distriImgStyleAfterClick} 
                        source = {require('../../Assets/Icons/Distributor.png')}
                    />
                    <Text style={styles.cardTextStyleAfterClick}>
                        Distributors
                    </Text>
                </View>
            </View>
        ) 
    }
}

fromToto = () => {
    if( this.state.radioValue == 0 ) {
    return(
        <View style={styles.fromToMainContainer}>
            {/* From */}
            <View style={styles.FTContainer}>
                <View style={styles.FromCardBG}>
                    <View style={styles.FTCalRowContainer}>
                        <View style={styles.FTTextColContainer}>
                            <Text style={styles.FTTextStyle}>
                                 From
                            </Text>
                        </View>
                        <View styles={styles.CalenderImgContainer}>
                            <TouchableOpacity  onPress={this.calenderPopUp.bind(this)}>
                                    <View >
                                            {/* <Button
                                                title="Show Dialog"
                                                onPress={() => {
                                                this.setState({ visible: true });
                                                }}
                                            /> */}
                                            <Dialog
                                                visible={this.state.visible}
                                                onTouchOutside={() => {
                                                this.setState({ visible: false });
                                                }}
                                                width={wp('90')}
                                                //  backdropOpacity= {1}
                                                //  transparent={true}
                                                // overlayBackgroundColor={false}
                                                hasOverlay={false}
                                                overlayOpacity={10}

                                                //  height={hp('50')}
                                                // dialogTitle={
                                                //     <DialogTitle
                                                //       title="Applicable Schemes"
                                                //       style={{
                                                //         // backgroundColor: '#F7F7F8',
                                                //          color:'#3955CB',
                                                //       }}
                                                //       hasTitleBar={false}
                                                //       // align="left"
                                                //     />
                                                //   }
                                                 footer={
                                                  <DialogFooter>
                                                    <DialogButton
                                                      text="OK"
                                                      textStyle = {{color:'white'}}
                                                      style = {{backgroundColor:'#46BE50'}}
                                                      onPress={() => { this.setState({ visible: false });}}
                                                    />
                                                  </DialogFooter>
                                                }
                                               > 
                                                <DialogContent>
                                                  <View style={styles.appliSchemesMainContainer}>
                                                      <View style={styles.appliSchemesRowContainer}>
                                                                  <View style={styles.roundedtext}></View>

                                                                  <Text style= {styles.appliSchemeTextStyle}>
                                                                      Applicable Schemes( 12 )
                                                                  </Text>
                                                            </View>
                                                  </View>
                                                  {/* Scheme Description */}
                                                  <View style={styles.schemesDescriptionMainContainer}>
                                                          <Text style={styles.descriptionTextStyle}>
                                                              Dummy Scheme Description.Dummy Scheme Description. Dummy Scheme Description.Dummy 
                                                              Scheme Description. Dummy Scheme Description.
                                                          </Text>
                                                  </View>

                                                  <View style={styles.validityDateMainContainer}>
                                                      <Text style={styles.validityTextStyle}>
                                                          Validity
                                                      </Text>
                                                      <Text style={styles.validytyDateTextStyle}>
                                                          12 Feb 2020
                                                      </Text>
                                                  </View>
                                                </DialogContent>
                                            </Dialog>
                                      </View>
                                <Image style={styles.CalenderImgStyle} 
                                    source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </View>
            {/* To */}
            <View style={styles.FTContainer}>
                <View style={styles.ToCardBG}>
                    <View style={styles.FTCalRowContainer}>
                        <View style={styles.FTTextColContainer}>
                            <Text style={styles.FTTextStyle}>
                                To
                            </Text>
                        </View>
                        <View styles={styles.CalenderImgContainer}>
                            <TouchableOpacity>
                                <Image style={styles.CalenderImgStyle} 
                                    source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
             </View>
        </View>
    );
    }
    else if( this.state.radioValue == 1 ){
        return(
            <View style={styles.fromToMainContainer}>
                {/* From */}
                <View style={styles.FTContainer}>
                    <View style={styles.FromCardBG}>
                        <View style={styles.FTCalRowContainer}>
                            <View style={styles.FTTextColContainer}>
                                <Text style={styles.FTTextStyle}>
                                    10/05/2020
                                </Text>
                            </View>
                            <View styles={styles.CalenderImgContainer}>
                                <TouchableOpacity>
                                    <Image style={styles.CalenderImgStyle} 
                                        source = {require('../../Assets/Icons/Calendar_normal.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

radioFunc= (value) => {
    this.setState({
        radioValue: value
    })
}

render() {
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
                        OUTLET TYPE
                    </Text>
                </View>
                <View style={styles.SDCardsMainContainer}>

                    {/* Shops Card */}
                    <View style={styles.SDCardMainContainer}>
                        <TouchableOpacity onPress={() => this.setState({ shopClick: true, distributorClick: false })} >
                           {this.ShopClick()}
                        </TouchableOpacity>
                    </View>

                    {/* Distributors Card */}
                    <View style={styles.SDCardMainContainer}>
                        <TouchableOpacity onPress={() => this.setState({ distributorClick: true, shopClick: false })}>
                            {this.distributorClick()}
                        </TouchableOpacity>
                    </View>

                </View>  
            </View>
             {/* beat Select */}
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        SELECT BEAT
                    </Text>
                </View>
                 <Dropdown
                        // value={'Select'}
                        placeholder= "Select"
                        itemCount = {4} 
                        dropdownOffset={{top:10}}
                        containerStyle={styles.dropDownContainer}
                        pickerStyle={{width:wp('87.3')}}                        //28-03
                        rippleCentered={true}
                        itemColor = '#ADA2A2'
                        // fontSize = '10'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        data = {data}
                        dropdownPosition={-5.4}
                        dropdownOffset={{top:20, left:18,}}
                        rippleOpacity={0}
                    />
            </View>
            {/* Search Box */}
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        OUTLET NAME
                    </Text>
                </View>
                {this.searchComponent()}
            </View>
            {/* Data Type */}
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        DATA TYPE
                    </Text>
                </View>
                 {/* Radio Options */}
                <View style={{ marginTop:hp('2'), marginLeft:wp('4')}}>
                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                    >
                      {
                        radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                buttonWrapStyle={{marginLeft: 10}}
                                initial={0}
                                isSelected={this.state.radioValue === i}
                                formHorizontal={true}
                                labelHorizontal={true}
                                buttonColor={'#E6DFDF'}
                                buttonInnerColor={'#E6DFDF'}
                                buttonOuterColor={'#E6DFDF'}
                                selectedButtonColor={'#E6DFDF'}
                                buttonSize={11}
                                borderWidth={3}
                                buttonOuterSize={25}
                                radioStyle={{marginTop: hp('1'),marginLeft: wp('1.5')}}
                                // onPress={(value) => {this.setState({radioValue:value})}}
                                onPress={(value) => {this.radioFunc(value)}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                labelStyle={{fontSize: RFValue(15), color: '#8C7878', marginLeft:wp('1'),
                                                paddingRight: wp('15'),}}
                            />
                        </RadioButton>
                        ))
                    }  
                </RadioForm> 
                </View>
            </View>
            {/* Select Duration */}
            <View>
                <View style={styles.OODMainContainer}>
                    <Text style={styles.OODTextStyle}>
                        SELECT DURATION
                    </Text>
                </View>
                {/* From - TO */}
                {this.fromToto()} 
            </View>

        </ScrollView>
            {/* Next Button */}
            <View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DataCollectionStep2',
                    {
                        valueRadio: this.state.radioValue,
                    })}>
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

    
   dropDownContainer : {
      borderWidth:wp('0.5'), 
      borderColor:'#E6DFDF', 
      borderRadius: wp('2%'), 
      width: wp('88'), 
      height: hp('9'),
      marginTop: hp('1'), 
      marginHorizontal: wp('1'),
      backgroundColor: '#FFFFFF',
      paddingHorizontal:hp('2'), 
      alignSelf:'center',
      padding: -1,
  },

    SDCardsMainContainer: { 
        flex:1, 
        flexDirection:'row', 
    },

    SDCardMainContainer:{ 
        flex:0.5, 
        flexDirection:'column', 
        marginTop: hp('1'), 
        alignSelf:'center', 
        alignItems:'center',   
    },

    SDCardBG: {  
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        borderRadius: wp('2'), 
        height: hp('12'),  
        width: wp('41'),
        borderWidth: hp('0.3'), 
    },

    SDCardBGClickTrue: {
        backgroundColor: '#F8F4F4', 
        borderColor: '#221818', 
        borderRadius: wp('2'), 
        height: hp('12'),  
        width: wp('41'),
        borderWidth: hp('0.3'),   
    },

    ITColContainer: {
        flex:1, 
        alignItems:'center', 
        flexDirection:'column'
    },

    cardImgStyle:{ 
        height:hp('4'), 
        width:wp('7'), 
        marginTop: hp('1.5') 
    },

    distriImgStyleAfterClick: {
        height:hp('4'), 
        width:wp('7'), 
        marginTop: hp('1.5'),
        tintColor: 'black',
    },

    cardTextStyle:{ 
        color:'#8C7878', 
        fontSize:RFValue(15), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop:hp('1.5') 
    },

    cardTextStyleAfterClick : {
        color:'#362828', 
        fontSize:RFValue(15), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginTop:hp('1.5') 
    },

    searchResultContainer : {
      flex: 10,
      flexDirection:'column',
      //  backgroundColor:'white',
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    inputContainerStyle: {
        backgroundColor: '#ffffff',
        borderWidth:wp('0.5'), 
        borderColor:'#E6DFDF', 
        borderRadius: wp('2%'), 
        height:hp('9'),
        width:wp('82'),
        padding: 10,
        marginTop: hp('1'),
        marginLeft:wp('5'),
        borderRightWidth:hp('0'),
        borderTopRightRadius: wp('0'), 
        borderBottomRightRadius: wp('0'),
    },

    searchIconBG: {
        // alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#ffffff', 
        height:hp('9'),                                           //28-3
        width:wp('8'),
        justifyContent:'center',
        marginTop:wp('1.8'),                                      //28-3
        // alignSelf:'center',
        borderRightWidth:hp('0.25'),                              //28-3
        borderTopWidth:hp('0.25'),                                //28-3
        borderBottomWidth:hp('0.25'),                             //28-3
        borderTopRightRadius: wp('2'),
        borderTopLeftRadius: wp('0'), 
        borderBottomRightRadius: wp('2'), 
        borderBottomLeftRadius: wp('0'),  
        borderColor:'#E6DFDF', 
    },

    searchIconStyle:{ 
        marginRight:wp('5'), 
    },

    fromToMainContainer: {
        flex:1, 
        flexDirection:'row', 
    },

    FTContainer: { 
        flex:0.5, 
        flexDirection:'column', 
        marginTop: hp('1'), 
        alignSelf:'center', 
        alignItems:'center',  
    },

    FromCardBG: { 
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        borderRadius: wp('2'),  
        height: hp('9'), 
        width: wp('43'), 
        borderWidth: hp('0.3'), 
        marginLeft:wp('2') 
    },

    ToCardBG: { 
        backgroundColor: '#FFFFFF', 
        borderColor: '#E6DFDF', 
        borderRadius: wp('2'), 
        height: hp('9'), 
        width: wp('43'), 
        borderWidth: hp('0.3'), 
        marginRight:wp('2') 
    },

    FTCalRowContainer: {  
        flex:1, 
        alignItems:'center', 
        flexDirection:'row'
    },

    FTTextColContainer:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    FTTextStyle:{
        color:'#796A6A', 
        fontSize:RFValue(13), 
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold', 
        marginLeft: wp('2'),
    },

    CalenderImgContainer:{ 
        flex:1, 
        alignItems: 'flex-end', 
        flexDirection:'row', 
        justifyContent:'flex-end', 
        alignItems: 'center',
    },


    CalenderImgStyle: { 
        marginRight:wp('2'), 
        tintColor:'#8C7878', 
        height:hp('4.5'), 
        width:wp('5.5'),
    },

});