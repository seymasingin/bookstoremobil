import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function Profile(props) {

    const navigation = useNavigation();
    const data = props.route.params?.ProfilData;// gelen obje
    const data2 = props.route.params?.ProfilData2; // gelen array
    return(
        <ScrollView >
        <View style={styles.nav}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')} 
        style={{backgroundColor:'#deb887',borderRadius:20,height:40,width:150,justifyContent:'center',alignItems:'center', marginTop:10}}>
        <Text style={{color:'white'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favourites}
        onPress={()=>navigation.navigate('Favourites')}>
        <Text style={{color:'white'}}>Favourites</Text>
        </TouchableOpacity>
        </View>

        <View>
           {data2.map((item , i)=> 
           <View style={styles.view}>
            <Image source={item.image} key= {Math.random(10)} style={styles.foto}/>
            <View style={styles.profil}> 
            <Text style={styles.text} key= {Math.random(10)}>Name:{item.name} </Text>
            <Text style={styles.text} key= {Math.random(10)}>Age:{item.age}</Text>
            <Text style={styles.text} key= {Math.random(10)}>Password:{item.password}</Text>
            </View>
        
            </View>)}

            
            {<View style={styles.view}>
            <Image source={data.image} style={styles.foto}/>
            <View style={styles.profil}> 
            <Text style={styles.text}>Name:{data.name}</Text>
            <Text style={styles.text}>Age:{data.age}</Text>
            <Text style={styles.text}>Password:{data.password}</Text>
            </View>
            </View>}
        </View>
        </ScrollView>
        )
}
export default Profile;

const styles ={
    
    view:{padding:3, flexDirection:'row', margin: 10},
    text:{fontSize: 20, fontWeight: 'bold',},
    favourites:{backgroundColor:'#006400', borderRadius:20, height:40, width:150, justifyContent:'center',
          alignItems:'center', marginTop:10,},
    nav:{flexDirection:'row'},
    foto:{width:100, height:100},
    profil:{margin:10}
}