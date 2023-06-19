import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Text} from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
      <Text style={styles.label}>Full Names</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
        <Text style={styles.label}>Phone Numbers</Text>
      <TextInput 
       style={styles.input}
       placeholder='Phone Number'
       value={phoneNumber}
       onChange={text => setPhoneNumber(text)}
      
      />
        <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" style={styles.Btn} onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label:{
    marginLeft: 4,
    fontSize: 16,
    marginBottom: 2,

  },

  Btn: {
    marginTop: 32,
  },

  text:{
     textAlign:'center',
     marginBottom: 15,
     fontSize: 25,
     fontWeight: 800,
  }
});

export default RegistrationForm;
