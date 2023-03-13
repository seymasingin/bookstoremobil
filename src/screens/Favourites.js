import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import BookView from '../components/BookView';
import { useSelector, useDispatch } from 'react-redux';
import { remove} from '../features/fav/favSlice';


const Favourites = () => {

  const {favourites} = useSelector((store) => store.favs);

  const dispatch = useDispatch();

  const removeFavourites = (id) => {
    const removed = favourites?.find(item => item.isbn13 === id);
    dispatch(remove(removed))
  };

  console.log(favourites)

  return (
      <ScrollView style={{flex:1,marginHorizontal:20}}>
        {favourites.map((item) => 
        <BookView book={item} 
        key={Math.random(10)} 
        text='Remove Favourites'
        addFavourites={removeFavourites}/>)}
    </ScrollView>
  )
}
export default Favourites;

const styles ={
  nav:{flexDirection:'row'},
  profil:{backgroundColor:'#006400', borderRadius:20, height:40, width:150, justifyContent:'center',
          alignItems:'center', marginTop:10,}
}