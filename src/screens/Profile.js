import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

function Profile(props) {
    const navigation = useNavigation();
    const data = props.route.params.ProfilData;

    return(
        <ScrollView>

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
            {data.map((item)=> 
            <View style={styles.view}>
            <Image source={item.uri}></Image>
            <Text style={styles.text}>{item.name}</Text>
            </View>
            )}
        </View>
        </ScrollView>
        )
}
export default Profile;

const styles ={
    view:{padding:3},
    text:{fontSize: 20, fontWeight: 'bold',},
    favourites:{backgroundColor:'#006400', borderRadius:20, height:40, width:150, justifyContent:'center',
          alignItems:'center', marginTop:10,},
    nav:{flexDirection:'row'},

}