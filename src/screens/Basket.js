import React, {useState} from "react";
import {Text, ScrollView, View, Image, TouchableOpacity, SafeAreaView, FlatList, } from 'react-native';
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/Ionicons';

const Basket = ({route}) => {

const {item,quantity} = route.params;
const [number, setNumber] = useState(quantity);

const increase = () => {setNumber(number+1)}
const decrease = () => {setNumber(number-1)}

const [sepet, setSepet] = useState([item]);

const deleteItem = (id) => {
    const removed = sepet.filter(book => book.isbn13 === id ) ;
    setSepet(removed)
}

    return(
        <SafeAreaView>
            <Header title= "Basket"/>
            
            <ScrollView>
          {sepet && sepet.map((book) =>
            <View style={styles.basketcard}>
            <View style={{padding:10}}><Image style={styles.basketimage} source={{uri:book.image}}/></View>
            <View>
                <Text style={styles.basketname}>{book.title}</Text>
                <View style={styles.counter}>
                    <View style={styles.arrows}>
                    <TouchableOpacity onPress={increase}>
                    <Icon name="chevron-up-outline" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.count}> {number} </Text>
                    <TouchableOpacity onPress={decrease}>
                    <Icon name="chevron-down-outline" size={25} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.priceview}>
                <TouchableOpacity onPress={deleteItem} >
                    <Icon style= {styles.deleteitem} name='trash-outline' size={27} color="black" />
                </TouchableOpacity>
                <Text style={styles.price}>{(book.price.substr(1,(book.price).length))*(number)} $</Text>
            </View>
            </View>
          )
            
}   
        </ScrollView>
        </SafeAreaView>
    )
}

export default Basket;

const styles = {
    basketcard:{
        flex:1,
        flexDirection:"row",
        backgroundColor:'white',
        margin:20,
        borderRadius:12
    },
    basketimage:{
        width:80,
        height:100,
        
    },
    basketname:{
       color:'black',
        fontSize:12,
        width: 120,
        padding:10
    },
    arrows:{
        fontSize:24,
        backgroundColor:'#ccc',
   
        
        flexDirection:'row'
    },
    count:{fontSize:14, backgroundColor: 'aliceblue', fontWeight: 'bold', padding:4},
    counter:{alignItems:'baseline', paddingLeft: 12, marginBottom:10, marginTop:1},
    price:{fontWeight:'bold', color: 'red', fontSize: 20, },
    priceview:{alignItems:'flex-end', marginBottom:10, padding:10, paddingLeft:40, justifyContent: 'space-between'},
    deleteitem:{marginTop: 10},
}