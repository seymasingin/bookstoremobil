import React from 'react';
import { ScrollView } from 'react-native';
import BookView from '../components/BookView';
import { useSelector, useDispatch } from 'react-redux';
import { remove} from '../features/favSlice';
import Header from '../components/Header';


const Favourites = ({navigation}) => {

  const {favourites} = useSelector((store) => store.favs);

  const dispatch = useDispatch();

  const removeFavourites = (id) => {
    const removed = favourites?.filter(item => item.isbn13 !== id);
    dispatch(remove(removed))
  };

  return (
      <ScrollView style={{flex:1,}} pagingEnabled={true}>
        <Header title= "Favourites"/>
        {favourites.map((item) => 
        <BookView filteredBook={item} 
        key={Math.random(10)} 
        text='Remove Favourites'
        addFavourites={(removeFavourites)}
        onPress={()=>navigation.navigate('BookDetail', {item:item})}/>)}
      </ScrollView>
  )
}
export default Favourites;
