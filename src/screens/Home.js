import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import BookView from '../components/BookView';
import { useNavigation } from "@react-navigation/native";




const Home = () => {
  const [book, setBook] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new')
        .then(res => setBook(res.data.books))
    }, []);

  const [favourites, setFavourites] = useState([]);// sorun burdaki koyduğun tag mış ' favorites' diye

  const addFavourites = (id) => {
    const allReady = favourites?.find(item => item.isbn13 === id)
    if(allReady){
      console.log('giriyor')
      }else{
     const newFavourite = book?.find(item => item?.isbn13 === id)
  setFavourites([...favourites, newFavourite])
    }   
      }

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [word, setWord] = useState('show');

  const handlePasswordVisibility = () => {
    if (word === 'show') {
      setWord('show');
      setPasswordVisibility(passwordVisibility);
    } else if (word !== 'show') {
      setWord('hide');
      setPasswordVisibility(!passwordVisibility);
    }
  };

const ProfilData={
name:'Seyma', 
age: '30', 
//uri: require('./assets/images/picture.png'),
password: 123456,
//showPassword: passwordVisibility, word, handlePasswordVisibility,
}

  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.nav}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Favourites',{ favourites})} 
      style={{backgroundColor:'#deb887',borderRadius:20,height:40,width:150,justifyContent:'center',alignItems:'center', marginTop:10}}>
      <Text style={{color:'white'}}>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profil}
      onPress={()=>navigation.navigate('Profile', {ProfilData})}>
      <Text style={{color:'white'}}>Profile</Text>
      </TouchableOpacity>
      </View>

      <ScrollView style={{flex:1,marginHorizontal:20}}>
      { book?.map((item) =>
       <BookView book={item} key={Math.random(10)}
       addFavourites={addFavourites}
        text='Add Favourites'/>)
      }
      </ScrollView>   
    </ScrollView>
  )
}

export default Home;

const styles ={
  nav:{flexDirection:'row'},
  profil:{backgroundColor:'#006400', borderRadius:20, height:40, width:150, justifyContent:'center',
          alignItems:'center', marginTop:10,}
}