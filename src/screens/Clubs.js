import {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import axios from "axios";
import {List} from 'react-native-paper';

const Clubs = (props) => {
    const {navigation} = props;
    const [clubs, setClubs] = useState([]);
    const [err, setErr] = useState();
    useEffect(() => {
        axios.get('https://newuuclubs.herokuapp.com/api/clubs?format=json').then(data => {
            setClubs(data.data);
        }).catch(err => {
            setErr(err);
            console.log(err);
        })
    }, [])

    return (<View style={styles.wrapper}>
        <View style={styles.container}>
            {clubs && clubs.map((club) => <List.Item onPress={() => navigation.navigate('Club', {"club": club})}
                                                     style={styles.list}
                                                     key={club["id"]} title={club["club_name"]}/>)}
        </View>
    </View>)
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 30,
    }, container: {
        marginTop: 100,
    }, list: {
        width: "100%",
        marginTop: 20,
        padding: 10,
        textAlign: "center",
        borderRadius: 16,
        borderColor: "rgba(0, 0, 0, 0.08)",
        borderStyle: "solid",
        borderWidth: 1,
    }
})

export default Clubs;
