import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { useSelector } from "react-redux";
import styles from "./styles";

const Login = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loginHandler = () => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate("Clubs");
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Pressable style={styles.button} onPress={loginHandler}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
      <View style={styles.flexView}>
        <Text style={[styles.authText]}>No account? </Text>
        <Text
          style={styles.secondaryText}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Sign up here
        </Text>
      </View>
    </View>
  );
};

export default Login;
