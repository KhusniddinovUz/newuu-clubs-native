import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from "react-redux";
import {login} from "../redux/actions/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(login({username, password}));
    };

    return (<View>
        <Text>Login Page</Text>
        <TextInput style={styles.input} value={username} onChangeText={(text) => {
            setUsername(text);
        }}/>
        <TextInput style={styles.input} value={password} onChangeText={(text) => {
            setPassword(text);
        }}/>
        <Button title="Login" onPress={loginHandler}/>
    </View>)
};

const styles = StyleSheet.create({
    input: {
        height: 40, margin: 12, borderWidth: 1, padding: 10,
    },
})

export default Login;
