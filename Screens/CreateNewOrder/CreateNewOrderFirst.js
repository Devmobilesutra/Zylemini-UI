import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { Icon, } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import { Dropdown } from 'react-native-material-dropdown';
import Search from 'react-native-search-box'
import { Searchbar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import Autocomplete from 'react-native-autocomplete-input'


import NextButton from '../../Components/Common/NextButton';
import DropdownCommon from '../../Components/Common/DropdownCommon';
import ShopDetail from './ShopDetail';
import AddNewOutlet from './AddNewOutlet';


const API = 'https://swapi.co/api';

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

const labels = [
  {
    entityType: 'ENTITY TYPE',
    chooseBeat: 'CHOOSE BEAT',
    chooseOutlet: 'CHOOSE OUTLET',
    selectDistributor: 'SELECT DISTRIBUTOR',
  }, 
]

export default class CreateNewOrderFirst extends Component {
constructor(props) {
    super(props);
    this.state = { 
      label:'Select',
      shopDetailFlag: 'false',
      shopName: 'Mangalam Store',

      films: [],

      films1:[{title: '~+Add New Outlet'}],
      films2:[],
      
      query: '',
      index: '',

      data2:['aaa','bbb']

    };
}

static navigationOptions = {
  title: 'Create New Order',
  color: 'white',
    headerStyle: {
        backgroundColor: '#221818'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },

  //  headerLeft: <Icon  name="ios-arrow-round-back" size={20} color="white"    padding='20'  
  //               onPress={ () => { Actions.Dashboard() }}   />

  headerLeft: (
        <View style={{flexDirection:"row", alignItems:'center',justifyContent:'center',alignSelf:'center',}}>
            <TouchableOpacity   onPress={() =>Actions.Dashboard() }>  
                <Image  style={{marginLeft:wp('4'),}}
                    source = {require('../../Assets/Icons/Back_White.png')}
                />
            </TouchableOpacity>
            
        </View>
 )
                               
}

shopDetail(){

  if(this.state.query == '~+Add New Outlet'){
     return(
        <View>
         {this.props.navigation.navigate('AddNewOutlet')}
        </View>
      );
  }
    else  if ( this.state.shopDetailFlag == 'true' ){
         return(
        <ShopDetail name={this.state.shopName}/>
           );
      }
 
}

componentDidMount() {
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
        <View style={styles.descriptionContainer}>
        {this.shopDetail()}
        </View>  
      </View>
    );  
}


    render() {


        const { navigation } = this.props;
        return (
           labels.map((item, index) => (
            <View style = {styles.container}>
            <ImageBackground
                source={require('../../Assets/Icons/android_BG.png')}
                 style={{height:hp('89'), width:wp('100'), resizeMode: 'cover',  justifyContent: 'center',}}
            >
              <ScrollView
                 showsVerticalScrollIndicator={false}
              >
                {/* Header */}
                 <View style= {styles.textDropdownContainer}>
            
                    <Text style = {styles.headingTitleText}>  {item.entityType}</Text>
                      <Dropdown
                        value={'Retailer'}
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
                        // animationDuration= {10}
                        rippleOpacity={0}
                    />
                 </View>
                
                 <View style= {styles.textDropdownContainer2}>
                    <Text style = {styles.headingTitleText}> {item.chooseBeat}</Text>
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

                 <View style= {styles.textDropdownContainer2}>
                    <Text style = {styles.headingTitleText}> {item.chooseOutlet}</Text>
                      {this.searchComponent()}
                        {/* <Searchbar
                          placeholder="Search"
                          onChangeText={ query => { this.setState({ shopDetailFlag: 'true' });}}
                          // value={firstQuery}
                        /> */}
                 </View>

                 <View style= {styles.textDropdownContainer3}>
                    <Text style = {styles.headingTitleText}> {item.selectDistributor}</Text>
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
              </ScrollView>
              {/* Next Button */}
               <View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('CreateNewOrderSecond')}>
                        <NextButton/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </View>
             
           ))
        );
    }
}



const styles = StyleSheet.create({
  container : {
    flex: 10,
    //  backgroundColor:'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  textDropdownContainer : {
      flexGrow: 1,
      alignItems: 'flex-start',
      marginTop: hp('3'),
    //   marginVertical: hp('3'),
      marginHorizontal: wp('3.5'),                                  //28-3
  },
  textDropdownContainer2 : {
      flexGrow: 1,
      marginTop: hp('0'),
    //   marginVertical: hp('1'),
      marginHorizontal: wp('4'),
  },
  textDropdownContainer3 : {
      flexGrow: 1,
      marginTop: hp('3.5'),
    //   marginVertical: hp('1'),
      marginHorizontal: wp('4'),
  },

  headingTitleText : {
      color: '#796A6A',
      fontWeight: 'bold',
      fontFamily:'Proxima Nova',
      marginHorizontal: wp('1'),
  },

   dropDownContainer : {
      borderWidth:wp('0.5'), 
      borderColor:'#E6DFDF', 
      borderRadius: wp('2%'), 
      width: wp('88'), 
      height: hp('9'),
      marginTop: hp('1'), 
      marginVertical: hp('3'),
      marginHorizontal: wp('1'),
      backgroundColor: '#FFFFFF',
      paddingHorizontal:hp('2'), 
      alignSelf:'center',
      padding: -1,
  },

    SearchContainer: {
        backgroundColor: '#F5FCFF'
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
        width:wp('80'),
        padding: 10,
        marginTop: hp('1'),
        marginLeft:wp('2'),
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

    descriptionContainer: {
      flex: 1,
      justifyContent: 'center',
    },

    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
    },
    itemSubText: {
        fontSize: 10,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
        marginLeft: 10
    },
    infoText: {
        textAlign: 'center',
        fontSize: 16,
    },
    listStyle: {
        position: "relative",
        zIndex: 999,
        alignSelf:'center',
        padding: 10,
        width: wp('77'),                                                    //28-3
    }

})