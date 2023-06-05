import React, {useState} from "react";
import { Text,SafeAreaView, View, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/Ionicons';


const BookDetail = ({navigation, route}) => {

  const {item} = route.params;

  const [quantity, setQuantity] = useState(1);

  const increase = () => {setQuantity(quantity+1)}

  const decrease = () => {setQuantity(quantity-1)}

  

  const handlePress = () => {navigation.navigate('Basket', {item, quantity})}

  return(
    <SafeAreaView>
          <Header title= "Detail" />
          <ScrollView>
       
            <View style={styles.container}>
              <Text style={styles.maintitle}>{item.title}</Text>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <View style={styles.bottom_container}>
                <View style={styles.numbers}>
                  <View style={styles.counter}>
                    <Text style={styles.count}>{quantity}</Text>
                      <View style={styles.arrows}>
                      <TouchableOpacity onPress={increase}>
                        <Icon name="chevron-up-outline" size={25} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={decrease}>
                        <Icon name="chevron-down-outline" size={25} />
                      </TouchableOpacity>
                      </View>
                  </View>
                <Text style={styles.price}>{item.price}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePress} >
                  <Text style={styles.buy}> ADD BASKET </Text>
                </TouchableOpacity>
              </View>
            </View>
          
        </ScrollView>
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

