import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Back</Text>

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChange={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(text) => setPassword(text)}
      />

      <Button>Login</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    mar
  }
});
export default Login;
