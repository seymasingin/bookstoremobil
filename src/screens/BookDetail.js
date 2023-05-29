import React, {useState, useEffect} from "react";
import { Text,SafeAreaView, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Header from "../components/Header";
import axios from "axios";
import Icon from 'react-native-vector-icons/Ionicons';
import {increase, decrease} from '../features/quantitySlice';
import { useDispatch, useSelector } from "react-redux";

const BookDetail = (props) => {

  const key= 'https://api.itbook.store/1.0/books';
 
  const id = props.route.params.x;

  const [selectedBook, setSelectedBook] = useState();

  const dispatch = useDispatch();

  const {quantity} = useSelector((store) => store.quans);

  useEffect(() => {
    axios.get(`${key}/${id}`)
    .then((response) => {
      setSelectedBook(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  return(
    <SafeAreaView>
          <Header title= "Detail" />
          <View>
        {selectedBook && (
            <View style={styles.container}>
              <Text style={styles.maintitle}>{selectedBook.title}</Text>
              <Image style={styles.image} source={{ uri: selectedBook.image }} />
              <Text style={styles.title}>{selectedBook.title}</Text>
              <Text style={styles.subtitle}>{selectedBook.subtitle}</Text>
              <View style={styles.bottom_container}>
                <View style={styles.numbers}>
                  <View style={styles.counter}>
                    <Text style={styles.count}>{quantity}</Text>
                      <View style={styles.arrows}>
                      <TouchableOpacity onPress={() => dispatch(increase(id))}>
                        <Icon name="chevron-up-outline" size={25} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => dispatch(decrease(id))}>
                        <Icon name="chevron-down-outline" size={25} />
                      </TouchableOpacity>
                      </View>
                  </View>
                <Text style={styles.price}>{selectedBook.price}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Basket')} >
                  <Text style={styles.buy}> BUY </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
    </SafeAreaView>
    )
}

export default BookDetail;

const styles ={
  container:{marginTop:30, alignItems: 'center', justifyContent: 'center',},
  maintitle:{color:'black',fontSize:24},
  image:{backgroundColor: 'white', width:320, height:320, marginTop:15, marginBottom:10},
  price:{color:'black', fontSize:30, paddingLeft: 185 },
  bottom_container:{marginTop:20, backgroundColor: 'gainsboro', 
                    width:Dimensions.get("window").width, padding:8, alignItems: 'center' },
  button:{backgroundColor: 'rosybrown', width:350, height:45, 
          borderRadius:8, alignItems: 'center',justifyContent:'center', marginTop:10},
  buy:{color:'black',fontSize:20, fontWeight:'bold'},
  count:{fontSize:26},
  counter:{borderWidth:1, borderRadius:6, width: 70, flexDirection: 'row', 
            alignItems: 'center',justifyContent: 'space-around', },
  arrows:{flexDirection: 'column'},
  numbers:{flexDirection: 'row', justifyContent: 'flex-end'}
  };

