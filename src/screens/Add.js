import React, {useState,useEffect} from 'react';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import Header from '../components/Header';
import { Formik } from "formik";
import Button from '../components/Button';
import axios from 'axios';

const Add = () => {
   

    const handlePost = (values) => {
        axios.post('https://api.itbook.store/1.0/books/', values)
    };

    return (
        <SafeAreaView>
            <Header title='Add Book'/>
            <Formik initialValues={{ title: '', subtitle:'', price:'' }} onClick={handlePost}>
                {({ handleChange, handleBlur, handleClick, values }) => (
                <View>
                    <Text style={styles.text}>Title:</Text>
                    <TextInput onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                                style={styles.title}
                                />
                    <Text style={styles.text}>Subtitle:</Text>
                    <TextInput onChangeText={handleChange('subtitle')}
                                onBlur={handleBlur('subtitle')}
                                value={values.subtitle}
                                style={styles.subtitle}
                                />
                    <Text style={styles.text}>Price:</Text>
                    <TextInput onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values.price}
                                style={styles.price}
                                />
                    <Button text= "ADD" onPress={handleClick} />
                </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}
export default Add;

const styles = {
    text:{fontSize: 18, margin:5},
    title: {
            height: 40,
            alignItems: 'center', 
            justifyContent: 'center', 
            borderWidth:1 ,
            borderColor:'#000000',
            borderRadius:8,
            margin:5},
    subtitle: { 
        height: 150,
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth:1 ,
        borderColor:'#000000',
        borderRadius:8,
        margin:5},
    price: { 
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth:1 ,
        borderColor:'#000000',
        borderRadius:8,
        margin:5}
}