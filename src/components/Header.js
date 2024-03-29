import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from "@react-native-material/core";

function Header(props){
    return(
        <View style={styles.container}>
            <View style={styles.items}>
                <Image style={styles.logo} source={require("../assets/images/storelogo.png")}/>
                <Text style={styles.title} > {props.title} </Text> 
                
            </View>
        </View>
    )
}
export default Header;

const styles ={
    container:{
        flexDirection: "row",
        height:60,
        width:Dimensions.get("window").width, 
        backgroundColor: "#778899",
        position: 'relative'
        },
    items:{flexDirection:'row',
            alignItems: 'center',
            },
    logo:{height: 40,
        width: 40,
        resizeMode: "cover",
        marginLeft: 4,
        backgroundColor: "#778899",
        
        },
    title:{fontSize:20, 
        color:'black',
        marginLeft: 8
        },
}