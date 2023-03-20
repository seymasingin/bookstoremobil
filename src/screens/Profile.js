import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from '../features/memberSlice';
import { Formik } from "formik";
import Header from '../components/Header';

function Profile(props) {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {members} = useSelector(s => s.members);

    const handleLogin = (values) => {
        const allReady = members?.find(item => item.password === values.password)
        if(allReady){
          Alert.alert("var")
          }
        else{
          dispatch(addMember(values))}
        }   
        return(
            <ScrollView>
              <Header title= 'Login'/>
            <Formik style={styles.container} initialValues={{username:"", password:""}} onSubmit= {handleLogin}>
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
            <Button  text= "LOGIN" onPress={handleSubmit}  />
            </View>)}
            </Formik>
            </ScrollView>
            )
    
          } 
       
export default Profile;

const styles={
  container:{},
}



/*
const data = props.route.params?.ProfilData;// gelen obje
    const data2 = props.route.params?.ProfilData2; // gelen array

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
        </ScrollView>*/