import { View, Text, ImageBackground, TextInput,StyleSheet, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react';
import axios from "axios";

const LoginPage = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [apiData, setapiData] = useState();
   

 
  
  const getApiData = async () => {
    try {
      const response = await axios.post("", {
        name: name,
        email: email,

      });
      //setapi data
      setapiData(response.data)
      console.log("apiData is :", setapiData);
      Alert.alert("Success", "Succesfull login")
      
    } catch (error) {
      console.error("API Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  }

  //Press and next page
  handleLogin = () => {
    getApiData();
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../image/images (3).jpg")}
        resizeMode= "contain"
        style={styles.background}
      >
        
   
        {/*{FormLogin}*/}
        <View style = { styles.viewContainer}>
          <Text style={styles.header}> Form Login </Text>


          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Name here ....'
            placeholderTextColor="green"
            value={name}
            onChangeText={setName}
          />


          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Email here ....'
            placeholderTextColor="green"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={handleLogin}
          >  
            <Text style= {styles.btnText}>Login...</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  background: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    width: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#90ee90',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  btn: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },

  btnText: {
    color: "white"
  },


})