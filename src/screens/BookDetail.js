import React, {useState, useEffect} from "react";
import { Text,SafeAreaView, View, Image } from "react-native";
import Header from "../components/Header";
import axios from "axios";


const BookDetail = (props) => {

  const key= 'https://api.itbook.store/1.0/books';
 
  const id = props.route.params.isbn13;

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${key}/${id}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  return(
    <SafeAreaView>
          <Header title= "Detail" />
          <View>
        {data && (
            <>
              <Image style={styles.image} source={{ uri: data.image }} />
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.subtitle}>{data.subtitle}</Text>
              <Text style={styles.price}>{data.price}</Text>
            </>
          )}
        </View>
    </SafeAreaView>
    )
}

export default BookDetail;

const styles ={
  image:{backgroundColor: 'white', width:300, height:300}};

