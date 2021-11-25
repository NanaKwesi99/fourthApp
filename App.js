import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View,TextInput, TouchableOpacity  } from 'react-native';
import Petlist from './Petlist';
export default function App() {
  return (
    <View style={styles.container}>
      <Petlist/>
    {/* <View style={styles.SamContainer}>
    <Text style={styles.InputEdit}>Sign up</Text>
    </View>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Password again" style={styles.input} />
    </View>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonsText}>Sign up</Text>
    </TouchableOpacity>
    <View style={styles.contacts}>
      <Text style={styles.inputSign}>You already have account?  <Text style={{color:"#5F2585"}}>Log in</Text></Text>    
    </View> */}
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginTop: 40,
    backgroundColor: "white",
  },

  SamContainer: {
    flex: 0.5,
    fontSize: 20,
    marginLeft: 30,
    justifyContent: "center",
  },

  InputEdit:{
    fontSize: 60,
    color: "#5F2585",
  },
  
  inputContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderBottomWidth: 2,
    borderColor: "#5F2585",
    height: 40,
    marginBottom: 30,
    width: 360,
  },

  button:{
    backgroundColor: "#5F2585",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },

  buttonsText:{
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  inputSign:{
    marginLeft: 100,
    marginTop: 45,
  }
});