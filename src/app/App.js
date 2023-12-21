import '../App.css';
import { Header } from "../core";
import { Router } from "./Providers/routes";

const App = () => (
    <div className="App">
        <Header navList={[
            { id: 1, name: 'Home' },
            { id: 2, name: 'Written off' },
            { id: 3, name: 'Contacts' },
        ]}></Header>
        {Router()}

    </div>
);

export default App;
