import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from "axios";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [groupNumber, setGroupNumber] = useState("");
    const [email, setEmail] = useState("");

    const registerHandler = () => {
        console.log(username, email, password, groupNumber);
        axios.post('https://newuuclubs.herokuapp.com/api/auth/register/',
            {"username": username, "email": email, "group_number": groupNumber, "password": password}).then(data => {
            console.log(data.data);
        }).catch(e => {
            console.log(e.error)
        })
    }

    return (<View>
        <Text>Register Page</Text>
        <TextInput style={styles.input} value={username} onChangeText={text => {
            setUsername(text);
        }}/>
        <TextInput style={styles.input} value={password} onChangeText={text => {
            setPassword(text);
        }}/>
        <TextInput style={styles.input} value={email} onChangeText={text => {
            setEmail(text);
        }}/>
        <TextInput style={styles.input} value={groupNumber} onChangeText={text => {
            setGroupNumber(text);
        }}/>
        <Button title="Register" onPress={registerHandler}/>
    </View>);
};


const styles = StyleSheet.create({
    input: {
        height: 40, margin: 12, borderWidth: 1, padding: 10, color: "#000",
    },
})

export default Register;
