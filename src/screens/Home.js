import React, { useState, useEffect } from 'react';
import { Alert, TextInput, ScrollView, View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import axios from 'axios';
import BookView from '../components/BookView';
import Header from '../components/Header';
import { useDispatch , useSelector } from 'react-redux';
import { add } from "../features/favSlice";
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from "@react-native-material/core";

const Home = ({navigation}) => {

  const [search, setSearch] = useState('');
  const [filteredBook, setFilteredBook] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new')
      .then((res) => {
        setFilteredBook(res.data.books);
        setBook(res.data.books);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const dispatch = useDispatch();
  const {favourites} = useSelector((store) => store.favs);
  
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

      const searchFilterFunction = (text) => {
        if (text) {
          const newData = book.filter(function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredBook(newData);
          setSearch(text);
        } else {
          setFilteredBook(book);
          setSearch(text);
        }
      };

  /*const handleProductSelect= (isbn13) => {
    navigation.navigate('BookDetail', {id:isbn13} )
  }*/
 
  return (
    <SafeAreaView>
      <View style={styles.head}>
          <Header style={styles.home} title= "Home" />
          <View style={styles.icons}>
          <IconButton icon={props => <Icon  name="add" {...props} size={30}/>}
                      onPress={()=> navigation.navigate('Add')}/>
          <IconButton icon={props => <Icon  name="person" {...props}/>}
                      onPress={()=> navigation.navigate('Profile')}
          />
          </View>
          </View>
        <View style={styles.search_container}>
          <TextInput
            style={styles.search}
            placeholder= "search"
            value={search}
            onChangeText={(text) => searchFilterFunction(text)}
          />
        </View>
        <ScrollView >
          {filteredBook.map((item) =>
          <BookView filteredBook={item} 
                    key={Math.random(10)}
                    addFavourites={addFavourites}
                    text='Add Favourites'
                    onPress= {()=>navigation.navigate('BookDetail', {item:item}) }
                      />)
                    }
        </ScrollView>
    </SafeAreaView>
  )
}                                       
export default Home;          

const styles ={
  head:{flexDirection: "row", height:60, position: 'relative'} ,
  icons:{flexDirection: "row", position: 'absolute', marginLeft:290,},
  search_container:{flexDirection: "row", 
                    justifyContent: "center", 
                    alignItems: 'center',
                    margin:20,
                    borderWidth: 1,  
                    borderRadius: 10,},
  search:{flex:1,
          fontWeight:'bold',
          height: 50,        
            },
  
 }





