import Clubs from "./components/Clubs";
import {Provider as PaperProvider} from "react-native-paper";

const App = () => {
    return (<PaperProvider>
        <Clubs/>
    </PaperProvider>);
};

export default App;
