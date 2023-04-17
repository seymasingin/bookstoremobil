import React from "react";
import {View, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({placeholder, onType, value, iconName}) => {
    return(
        <View style= {styles.container}>
            <TextInput style={styles.input}
                        placeholder={placeholder} 
                        onChangeText= {onType} 
                        value={value}/>
            <Icon style={styles.icon} name={iconName} size={20} />
        </View>
    )
}

export default Input;

const styles ={
    container:{
        flexDirection: "row",
        padding:5,
        margin:10,
        backgroundColor: "lightgrey", 
        borderRadius:8,
        height: 50,        
        },
   
    icon:{
        margin:10,
        color:"black",
        paddingLeft:220
    }

}