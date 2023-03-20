import React from "react";
import { Text,SafeAreaView, View, Image } from "react-native-elements";
import Header from "../components/Header";

const BookDetail = ({route}) => {
  const {book} = route.params;

     return(
    <SafeAreaView>
        <View style={styles.detail}>
          <Header title= "Detail" />
          <View>
            <Image style= {styles.image} souce= {{uri:book.image}}> </Image>
            <Text style= {styles.title}>{book.title}</Text>
            <Text style= {styles.subtitle}>{book.subtitle}</Text>
            <Text style= {styles.price}>{book.price}</Text>
          </View>
        </View>
    </SafeAreaView>
    )
}

export default BookDetail;

const styles= {
  
}