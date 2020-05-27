import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Picker, Button } from 'react-native';
import axios from 'axios';
// import { Picker } from '@react-native-community/picker';

export default function App() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [terms, setTerms] = useState(false);
  const [age, setAge] = useState(20);

  function handleSubmit() {
    const data = { name, lastname, terms, age };

    axios({
      method: 'POST',
      url: 'http://localhost:8000',
      data,
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        onChangeText={text => setName(text)}
        defaultValue={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu apellido"
        onChangeText={text => setLastname(text)}
        secureTextEntry
        defaultValue={lastname}
      />
      <Switch
        onValueChange={() => setTerms(!terms)}
        value={terms}
      />
      {/* <Picker
        selectedValue={age}
        style={styles.input}
        onValueChange={value => setAge(value)}
      >
        <Picker.Item
          label="20"
          value={20}
        />
        <Picker.Item
          label="21"
          value={21}
        />
        <Picker.Item
          label="22"
          value={22}
        />
        <Picker.Item
          label="23"
          value={23}
        />
      </Picker> */}
      <Text>{name} {lastname}</Text>
      <Button
        onPress={handleSubmit}
        title="Enviar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
  }
});
