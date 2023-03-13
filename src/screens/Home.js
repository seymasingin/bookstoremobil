import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import BookView from '../components/BookView';
import { useNavigation } from "@react-navigation/native";
import Foto from '../assets/images/picture.png' // import edilerek kullanımı


const Home = () => {
  const [book, setBook] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new')
        .then(res => setBook(res.data.books))
    }, []);

  const [favourites, setFavourites] = useState([]);

  const addFavourites = (id) => {
    const allReady = favourites?.find(item => item.isbn13 === id)
    if(allReady){
      console.log('giriyor')
      }
    else{
     const newFavourite = book?.find(item => item?.isbn13 === id)
      setFavourites([...favourites, newFavourite])
    }   
      }

const ProfilData={
name:'Seyma', 
age: '30', 
image: require('../assets/images/picture.png'), //import etmeden kullanmak için
password: 123456,
}

const ProfilData2=[{
  name:'Elif', 
  age: '31', 
  image: Foto, // import ederek kullanmak için
  password: 654321,
  }]

  return (
    <ScrollView style={{flex:1}}>
      <View style= {{flexDirection:"row",}}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Favourites',{ favourites})} 
      style={{backgroundColor:'#deb887',borderRadius:20,height:40,width:150,justifyContent:'center',alignItems:'center', marginTop:10}}>
      <Text style={{color:'white'}}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Profile',{ ProfilData, ProfilData2})} 
      style={{backgroundColor:'#8fbc8f',borderRadius:20,height:40,width:150,justifyContent:'center',alignItems:'center', marginTop:10,marginLeft:90}}>
      <Text style={{color:'white'}}>Profile</Text>
      </TouchableOpacity>
      </View>
    <ScrollView style={{flex:1,marginHorizontal:20}}>
      {book?.map((item) =>
       <BookView book={item} key={Math.random(10)}
       addFavourites={addFavourites}
        text='Add Favourites'/>)}
      </ScrollView>   
    </ScrollView>
  )
}

export default Home;

const styles ={
  nav:{flexDirection:'row'},
  profil:{backgroundColor:'#006400', borderRadius:20, height:40, width:150,
          justifyContent:'center', alignItems:'center', marginTop:10,}
}