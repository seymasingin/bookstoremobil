import React, {useState} from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import BookView from '../components/BookView';
import { useNavigation } from "@react-navigation/native";

const Favourites = (props) => {

  const navigation = useNavigation();
  const [favourites, setFavourites] = useState(props.route.params?.favourites);
console.log(favourites,'favori sayfamdaki data')
  const deleteFavourite = (id) => {
      const remove = favourites?.filter(item => item.isbn13 !== id);
      setFavourites(remove)
    };
    
  return (
    <ScrollView>
        <View style={styles.nav}>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')} 
        style={{backgroundColor:'#deb887',borderRadius:20,height:40,width:150,justifyContent:'center',alignItems:'center', marginTop:10}}>
        <Text style={{color:'white'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profil}
        onPress={()=>navigation.navigate('Profile')}>
        <Text style={{color:'white'}}>Profile</Text>
        </TouchableOpacity>
        </View>

      <ScrollView style={{flex:1,marginHorizontal:20}}>
        {favourites?.map((item) => 
        <BookView book={item} 
        key={Math.random(10)} 
        text='Remove Favourites'
        addFavourites={deleteFavourite}/>)}
      </ScrollView>
    </ScrollView>
  )
}
export default Favourites;

const styles ={
  nav:{flexDirection:'row'},
  profil:{backgroundColor:'#006400', borderRadius:20, height:40, width:150, justifyContent:'center',
          alignItems:'center', marginTop:10,}
}