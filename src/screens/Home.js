import React, { useState, useEffect } from 'react';
import { Alert, TextInput, ScrollView, View, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import BookView from '../components/BookView';
import Header from '../components/Header';
import { useDispatch , useSelector } from 'react-redux';
import { add } from "../features/favSlice";
import Icon from 'react-native-vector-icons/Ionicons';

//import { useNavigation } from "@react-navigation/native";
//import Foto from '../assets/images/picture.png' // import edilerek kullanımı

const Home = ({navigation}) => {

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
    Alert.alert("already exist")
    }
  else{
    const newFavourite = book?.find(item => item.isbn13 === id);
    dispatch(add(newFavourite))
  }   
    }   

  const [text, onChangeText] = useState('');

  const handleChangetext = () => {};


  return (
    <SafeAreaView>
        <View style={styles.home}>
          <Header title= "Home" 
          name={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="person" size={25} />
                </TouchableOpacity>} />
        </View>

        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder= "search"
            onChangeText={onChangeText}
            value={text}
          />
          <Icon style= {styles.searchicon} name= "search-outline" size={30}/> 
        </View>
        <ScrollView>
          {book?.map((item) =>
          <BookView book={item} 
                    key={Math.random(10)}
                    addFavourites={addFavourites}
                    text='Add Favourites'
                    handlePress= {() => {navigation.navigate('BookDetail', {book})}}/>)}
        </ScrollView>
    </SafeAreaView>
    
  )
}
export default Home;

const styles ={
  search:{flexDirection: "row", justifyContent: "center", alignItems: 'center',margin:20,borderWidth: 1,  
  borderRadius: 10,},
  input:{ flex:1,
          fontWeight:'bold',
          height: 50,        
  },
  searchicon:{paddingRight:7}
 }

