import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        console.log(username, password);
        axios.post('https://newuuclubs.herokuapp.com/api/auth/login/', {username, password}).then(data => {
            console.log(data.data);
        }).catch(e => {
            console.log(e);
        })
    };

    return (
        <View>
            <Text>Login Page</Text>
            <TextInput style={styles.input} value={username} onChangeText={(text) => {
                setUsername(text);
            }}/>
            <TextInput style={styles.input} value={password} onChangeText={(text) => {
                setPassword(text);
            }}/>
            <Button title="Login" onPress={loginHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default Login;
