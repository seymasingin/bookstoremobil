import React from 'react';
import {TouchableOpacity,Text,Image,View} from 'react-native';
  
function BookView({book, addFavourites, text}) {

    return(//yine kopyala yapıştır hatası onclick reactta onPress react native de
        <View style={styles.view}>
            <Image source={{uri:book.image}} style={styles.img} />
            <Text >{ book.title}</Text>
            <Text >{book.subtitle}</Text>
            <TouchableOpacity  onPress={() => addFavourites(book.isbn13)} style={styles.button} >
            <Text  style={styles.favtext}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BookView;

const styles ={ // buda stylesin diğer kullanımı burda kullanırsan yukardaki kod daha okunaklı olur
    view:{borderWidth:2 ,borderColor:'#000000',alignItems:'center',marginVertical:20,
        padding:20, borderRadius: 10,},
    img:{width:200,height:150},
    button:{width:200,height:30,backgroundColor:"gray",alignItems:'center', borderRadius: 10,},
    favtext:{color:'white',fontSize:20}
}