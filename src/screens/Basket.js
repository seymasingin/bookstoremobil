import React from "react";
import {Text, ScrollView} from 'react-native';
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Basket = () => {

const {quantities} = useSelector(s => s.quans)

    return(
        <ScrollView>
            <Header title= "Basket" />
            
            <Text>basket</Text>
            {quantities}
        </ScrollView>
    )
}

export default Basket;

const style = {}