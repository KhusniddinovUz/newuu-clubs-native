import {StyleSheet, View} from 'react-native';
import Clubs from "./components/Clubs";

const App = () => {
    return (
        <View style={styles.container}>
            <Clubs/>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },
});
