import { StyleSheet, Text, View , StatusBar, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"  
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.multiLine} 
        multiline 
        placeholder="Enter Your Address"
        value={address}
        onChangeText={setAddress}
      />
      
      <Text style={styles.text}>Hello {name}</Text>
      {address ? <Text style={styles.text}>Your address is: {address}</Text> : null}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 12
  },
  multiLine: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    minHeight: 100,
    textAlignVertical: "top"
  }
});
