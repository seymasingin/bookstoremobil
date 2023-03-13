import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import BookView from '../components/BookView';
import { useDispatch , useSelector } from 'react-redux';
import { add } from "../features/fav/favSlice";
//import { useNavigation } from "@react-navigation/native";
//import Foto from '../assets/images/picture.png' // import edilerek kullanımı



const Home = () => {
  const [book, setBook] = useState();
  const dispatch = useDispatch();

  const {favourites} = useSelector((store) => store.favs);
  
  useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new')
        .then(res => setBook(res.data.books))
    }, []);

const addFavourites = (id) => {
  const allReady = favourites?.find(item => item.isbn13 === id)
  if(allReady){
    Alert.alert("var")
    }
  else{
    const newFavourite = book?.find(item => item.isbn13 === id);
    dispatch(add(newFavourite))
  }   
    }   

/*const ProfilData={
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
  }]*/

  return (
    <ScrollView style={{flex:1,marginHorizontal:20}}>
      {book?.map((item) =>
       <BookView book={item} key={Math.random(10)}
       addFavourites={addFavourites}
        text='Add Favourites'/>)}
    </ScrollView>   
  )
}
export default Home;

