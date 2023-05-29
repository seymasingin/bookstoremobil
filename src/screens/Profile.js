import React, {useState} from 'react';
import { ScrollView, View, } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { Formik } from "formik";
import Header from '../components/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const  handleLogin = (values) => {
      setLoading(true)
      axios.post('https://fakestoreapi.com/auth/login',values)
      .then(res => {
        setUser(res.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
      }

  if(error) {
    console.log('User Not Found')
  }

  if (user){
    console.log(user)
    
    }
    
  return(
      <ScrollView>
        <Header title= 'Login'/>
        <Formik  initialValues={{username:"", password:""}} onSubmit= {handleLogin}>
        {({handleSubmit, handleChange, values}) => 
        (<View >
          <Input placeholder="enter username" 
                  value={values.username} 
                  onType={handleChange("username")}
                  iconName="person-outline"/>
          <Input placeholder= "enter password" 
                  value={values.password} 
                  onType={handleChange("password")}
                  iconName="lock-closed-outline"/>
          <Button text= "LOGIN" onPress={handleSubmit} loading= {loading} />
        </View>)}
        </Formik>
      </ScrollView>
      )

    } 
       
export default Profile;


