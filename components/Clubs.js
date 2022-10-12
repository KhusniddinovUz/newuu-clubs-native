import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from "axios";

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [err, setErr] = useState();
    useEffect(() => {
        axios.get('https://newuuclubs.herokuapp.com/api/clubs?format=json').then(data => {
            setClubs(data.data);
        }).catch(err => {
            setErr(err)
        })
    }, [])

    return (
        <View>
            {clubs.map((club) => <Text key={club["id"]}>{club["club_name"]}</Text>)}
        </View>
    )
};

export default Clubs;