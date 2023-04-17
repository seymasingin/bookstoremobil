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

  const [book, setBook] = useState();
  const [filterText, setFilterText] = useState('');
  const [data, setData] = useState(book);

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

  const handleFilter = (filterText) => {
    const newFilter = book?.filter((item) => {
      return item.title.toLowerCase().includes(filterText.toLowerCase());
      });
      if (filterText === "") {
        setData(book);
      } else {
        setData(newFilter);
      }
  }

  const handleProductSelect= (isbn13) => {
    navigation.navigate('BookDetail', {isbn13} )
  }
  console.log(book)
  return (
    <SafeAreaView>
      <View style={styles.head}>
          <Header style={styles.home} title= "Home" />
          <View style={styles.icons}>
          <IconButton icon={props => <Icon  name="add" {...props} size={30}/>}
                      onPress={()=> navigation.navigate('Add')}/>
          <IconButton icon={props => <Icon  name="person" {...props}
                      onPress={()=> navigation.navigate('Profile')}
          />}/>
          </View>
          </View>
        <View style={styles.search_container}>
          <TextInput
            style={styles.search}
            placeholder= "search"
            value={filterText}
            onChange= {filterText=> setFilterText(filterText)}
          />
          <TouchableOpacity onSubmit={handleFilter}>
            <Icon style= {styles.searchicon} name= "search-outline" size={30} /> 
          </TouchableOpacity>
        </View>
        <ScrollView >
          {(book?.map((item) =>
          <BookView book={item} 
                    key={Math.random(10)}
                    addFavourites={addFavourites}
                    text='Add Favourites'
                    onPress= {()=>handleProductSelect(item.isbn13) }
                      />))
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
  searchicon:{paddingRight:7},
 }

