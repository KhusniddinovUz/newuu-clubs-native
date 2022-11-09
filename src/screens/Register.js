import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import { useSelector } from "react-redux";
import styles from "./styles";

const Register = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate("Clubs");
    }
  });

  const registerHandler = () => {
    dispatch(
      register({ username, password, email, group_number: groupNumber })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Full name"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
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
      <TextInput
        style={styles.input}
        value={groupNumber}
        placeholder="Group number"
        onChangeText={(text) => {
          setGroupNumber(text);
        }}
      />
      <Pressable style={styles.button} onPress={registerHandler}>
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <View style={styles.flexView}>
        <Text style={[styles.authText]}>Already have an account? </Text>
        <Text
          style={styles.secondaryText}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Sign in here
        </Text>
      </View>
    </View>
  );
};

export default Register;
