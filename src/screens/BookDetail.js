import React, {useState, useEffect} from "react";
import { Text,SafeAreaView, View, Image } from "react-native-elements";
import Header from "../components/Header";
import axios from "axios";


const BookDetail = (props) => {

  const key= 'https://api.itbook.store/1.0/books';
 
  const id = props.route.params.isbn13;

  console.log(id); //çalışıyor

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${key}/${id}`)
         .then(res => setData(res))
     }, []);

  console.log(data);  //çalışmıyor

  return(
    <SafeAreaView>
        <View style={styles.detail}>
          <Header title= "Detail" />
          <View>
          <Image style= {styles.image} source= {{uri:data.image}}> </Image>
            <Text style= {styles.title}>{data.title}</Text>
            <Text style= {styles.subtitle}>{data.subtitle}</Text>
            <Text style= {styles.price}>{data.price}</Text>
          </View>
        </View>
    </SafeAreaView>
    )
}

export default BookDetail;

const styles ={image:{backgroundColor: 'red'}};

