import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import MainStackNavigator from "./src/navigation/MainStackNavigator";

const App = () => {
    return (<PaperProvider>
        <MainStackNavigator/>
    </PaperProvider>);
};

export default App;
