import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({text}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}> {text} </Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = {
    container:{margin:10,
        backgroundColor: "rosybrown",
        borderRadius:8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        },
        title:{fontWeight: 'bold', fontSize:17}
}