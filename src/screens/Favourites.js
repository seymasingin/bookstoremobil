import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import BookView from '../components/BookView';
import { useSelector, useDispatch } from 'react-redux';
import { remove} from '../features/favSlice';
import Header from '../components/Header';


const Favourites = () => {

  const {favourites} = useSelector((store) => store.favs);

  const dispatch = useDispatch();

  const removeFavourites = (id) => {
    const removed = favourites?.filter(item => item.isbn13 !== id);
    dispatch(remove(removed))
  };

  return (
      <ScrollView style={{flex:1,}}>
        <Header title= "Favourites"/>
        {favourites.map((item) => 
        <BookView book={item} 
        key={Math.random(10)} 
        text='Remove Favourites'
        addFavourites={(removeFavourites)}/>)}
      </ScrollView>
  )
}
export default Favourites;
