import React from 'react';
import {TouchableOpacity,Text,Image,View} from 'react-native';


function BookView({book, text, addFavourites, onPress }) {

    return(
        <TouchableOpacity style={styles.view} onPress={onPress}>
            <Image source={{uri:book.image}} style={styles.img} />
            <Text>{book.title}</Text>
            <Text>{book.subtitle}</Text>
            <TouchableOpacity  onPress={()=>addFavourites(book.isbn13)} style={styles.button}>
            <Text  style={styles.favtext}>{text}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default BookView;

const styles ={ 
    view:{borderWidth:2 ,borderColor:'#000000',alignItems:'center',marginVertical:20,
    marginHorizontal:20,
        padding:20, borderRadius: 10,},
    img:{width:200,height:150},
    button:{width:200,height:30,backgroundColor:"gray",alignItems:'center', borderRadius: 10,},
    favtext:{color:'white',fontSize:20}
}