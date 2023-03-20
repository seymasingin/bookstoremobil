import React from "react";
import {Text, ScrollView} from 'react-native';
import Header from "../components/Header";

const Basket = () => {
    return(
        <ScrollView>
            <Header title= "Basket" />
            <Text>basket</Text>
        </ScrollView>
    )
}

export default Basket;

const style = {}